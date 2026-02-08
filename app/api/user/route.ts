import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    // get current user from clerk
    const user = await currentUser();

    // if user already exists in database
    const existedUser = await db.select().from(usersTable).where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress as string));

    // if not, create a new user in database
    if (existedUser.length === 0) {
        const newUser = await db.insert(usersTable).values({
            email: user?.primaryEmailAddress?.emailAddress as string,
            name: user?.fullName as string
        }).returning();

        return NextResponse.json(newUser[0]);
    }

    return NextResponse.json(existedUser[0]);
}
