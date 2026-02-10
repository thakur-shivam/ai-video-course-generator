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

export type Course = {
    courseId: string
    courseName: string
    type: string
    createdAt: string
    id: number
    courseLayout: CourseLayout
}