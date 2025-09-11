import { testRouter } from "./routers/test";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  greeting: publicProcedure.query(() => "hello tRPC v10!"),
  test: testRouter,
});

export type AppRouter = typeof appRouter;
