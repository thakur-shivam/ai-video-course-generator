export type Chapter = {
    chapterId: string
    chapterTitle: string
    subContent: string[]
}

export type CourseLayout = {
    courseName: string
    courseDescription: string
    courseId: string
    level: string
    totalChpters: number
    chapters: Chapter[]
}

export type ChapterContentSlide = {
    id: number
    courseId: string
    chapterId: string
    slideId: string
    slideIndex: number
    audioFileName: string
    narration: {
        fullText: string
    }
    html: string
    revealData: string[]
    audioFileUrl: string
    caption: {
        chunks: string[]
    }
}

export type Course = {
    courseId: string
    courseName: string
    type: string
    createdAt: string
    id: number
    courseLayout: CourseLayout
    chapterContentSlides: ChapterContentSlide[]
}
