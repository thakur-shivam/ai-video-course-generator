"use client";

import React, { useEffect, useState } from 'react'
import CourseInfoCard from './_components/CourseInfoCard'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { Course } from '@/type/course-type';
import CourseChapters from './_components/CourseChapters';

function CoursePreview() {
    const [courseDetail, setCourseDetail] = useState<Course>();
    const { courseId } = useParams();

    useEffect(() => {
        courseId && GetCourseDetail();
    }, [courseId]);

    const GetCourseDetail = async () => {
        const response = await axios.get("/api/course?courseId=" + courseId);
        console.log(response.data);
        setCourseDetail(response.data);
    }
  return (
    <div className='flex flex-col items-center' >
      <CourseInfoCard course={courseDetail} />
      <CourseChapters course={courseDetail} />
    </div>
  );
}

export default CoursePreview;
