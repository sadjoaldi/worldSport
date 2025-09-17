import { footballRouter } from "./routers/football-router";
import { testRouter } from "./routers/test";
import { router } from "./trpc";

export const appRouter = router({
  football: footballRouter,
  test: testRouter,
});

export type AppRouter = typeof appRouter;
