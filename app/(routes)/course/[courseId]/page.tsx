"use client";

import React, { useEffect, useState } from 'react'
import CourseInfoCard from './_components/CourseInfoCard'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { Course } from '@/type/course-type';
import CourseChapters from './_components/CourseChapters';
import { toast } from 'sonner';
import { getAudioData } from "@remotion/media-utils";

function CoursePreview() {
    const [courseDetail, setCourseDetail] = useState<Course>();
    const { courseId } = useParams();

    useEffect(() => {
      courseId && GetCourseDetail();
    }, [courseId]);

    const GetCourseDetail = async () => {
      const toastId = toast.loading("Fetching Course Details ...");
      const response = await axios.get("/api/course?courseId=" + courseId);
      setCourseDetail(response.data);
      toast.success("Course Details Fetched Successfully!", { id: toastId });

      if (response?.data?.chapterContentSlides?.length === 0) {
        GenerateVideoContent(response?.data);
      }
    }

    const GenerateVideoContent = async (course: Course) => {
      for (let i = 0; i < course?.courseLayout?.chapters?.length; i++) {
        if (i > 0) break;
        const toastId = toast.loading("Generating Video Content for Chapter " + (i + 1));
        const response = await axios.post("/api/generate-video-content", {
          chapter: course?.courseLayout?.chapters[i],
          courseId: course?.courseId
        });
        
        console.log(JSON.stringify(response.data));
        toast.success("Video Content Generated for Chapter " + (i + 1), { id: toastId });
      }
      
    }

  const fps = 30;
  const slides = courseDetail?.chapterContentSlides ?? [];
  const [durationBySlideId, setDurationBySlideId] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      if (!slides) return;
      const entries = await Promise.all(
        slides.map(async (slide) => {
          const audioData = await getAudioData(slide?.audioFileUrl);
          const audioDuration = audioData.durationInSeconds;
          const frames = Math.max(1, Math.ceil(audioDuration * fps));
          return [slide.slideId, frames] as const;
        })
      );
      if (!cancelled) {
        setDurationBySlideId(Object.fromEntries(entries));
      }
    }
    run();
    return () => {
      cancelled = true;
    }
  }, [slides, fps]);
  return (
    <div className='flex flex-col items-center' >
      <CourseInfoCard course={courseDetail} durationBySlideId={durationBySlideId}/>
      <CourseChapters course={courseDetail} durationBySlideId={durationBySlideId}/>
    </div>
  );
}

export default CoursePreview;
