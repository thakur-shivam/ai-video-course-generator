import { db } from "@/config/db";
import { client } from "@/config/openai";
import { coursesTable } from "@/config/schema";
import { COURSE_CONFIG_PROMPT } from "@/constants/prompt";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { userInput, courseId, type } = await req.json();
    const user = await currentUser();

    const response = await client.chat.completions.create({
        model: "gpt-5-mini",
        messages: [
            { role: "system", content: COURSE_CONFIG_PROMPT },
            { role: "user", content: "Course Topic is" + userInput }
        ]
    });

    const rawResponse = response.choices[0].message?.content || "";
    const JSONResponse = JSON.parse(rawResponse);

    // Store JSONResponse in database
    const courseResponse = await db.insert(coursesTable).values({
        userId: user?.primaryEmailAddress?.emailAddress || "",
        courseId: courseId,
        userInput: userInput,
        type: type,
        courseName: JSONResponse.courseName,
        courseLayout: JSONResponse
    }).returning();

    return NextResponse.json(courseResponse[0]);

};
