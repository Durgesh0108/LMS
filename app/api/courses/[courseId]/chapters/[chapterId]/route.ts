import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";

import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string, chapterId: string } }
) {
  try {
    const { userId } = auth()
    const { courseId, chapterId } = params;
    const { isPublished, ...values } = await req.json()

    // return new NextResponse(values);
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const ownCourse = await db.course.findUnique({
      where: {
        id: courseId,
        userId: userId
      }
    })

    if (!ownCourse) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const chapter = await db.chapter.update({
      where: {
        id: chapterId,
        courseId: courseId
      },
      data: {
        ...values
      }
    })
    // console.log(course)
    return NextResponse.json(chapter)
  }
  catch (err) {
    console.log("[Course_chapter ID]", err)
    return new NextResponse("Internal Error", { status: 500 });
  }
}