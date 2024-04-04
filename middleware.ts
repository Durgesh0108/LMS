import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
// export default authMiddleware({});

export default authMiddleware({
  publicRoutes: ["/", "/api/uploadthing"],
  // ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/teacher/courses/9daba199-5be1-46e3-8154-7227f7161a16"]
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
