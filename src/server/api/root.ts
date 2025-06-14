import { exampleRouter } from "~/server/api/routers/example";
import { userRouter } from "~/server/api/routers/user";
import { jobDescriptionRouter } from "~/server/api/routers/jobDescription";
import { interviewRouter } from "~/server/api/routers/interview";
import { aiRouter } from "~/server/api/routers/ai";
import { mediaRouter } from "~/server/api/routers/media";
import { assessmentRouter } from "~/server/api/routers/assessment";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  user: userRouter,
  jobDescription: jobDescriptionRouter,
  interview: interviewRouter,
  ai: aiRouter,
  media: mediaRouter,
  assessment: assessmentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.example.hello({ text: "world" });
 */
export const createCaller = createCallerFactory(appRouter);
