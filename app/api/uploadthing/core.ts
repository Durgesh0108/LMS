import { auth } from "@clerk/nextjs";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = () => {
    const { userId } = auth();
    console.log(userId)
    // if (!userId) throw new Error("UnAuthorized")
    return { userId }
}

// export const ourFileRouter = {
//     courseImage: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
//         .middleware(() => handleAuth())
//         // .onUploadComplete(async ({ metadata, file }) => {
//         //     // This code RUNS ON YOUR SERVER after upload
//         //     console.log("Upload complete for userId:", metadata.userId);
//         //     console.log("file url", file.url);
//         //     return { uploadedBy: metadata.userId };
//         // }),
//         .onUploadComplete(() => { }),
//     courseAttachment: f({ 'application/pdf': { maxFileSize: '16GB', maxFileCount: 5 } })
//         .middleware(() => handleAuth())
//         .onUploadComplete(() => { }),
//     chapterVideo: f({ video: { maxFileSize: '512GB', maxFileCount: 1 } })
//         .middleware(() => handleAuth())
//         .onUploadComplete(() => { }),
// } satisfies FileRouter;

export const ourFileRouter = {
    courseImage: f({
        image: {
            maxFileSize: "4MB",
            maxFileCount: 1
        }
    })
        .middleware(() => handleAuth())
        .onUploadComplete(() => { }),
    courseAttachment: f(["text", "image", "video", "audio", "pdf"])
        .middleware(() => handleAuth())
        .onUploadComplete(() => { }),
    chapterVideo: f({
        video: {
            maxFileSize: "512GB",
            maxFileCount: 1
        }
    })
        .middleware(() => handleAuth())
        .onUploadComplete(() => { })
    ,

} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;