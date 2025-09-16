import { publicProcedure, router } from "../trpc";

export const footballRouter = router({
  getFootballsCompetitions: publicProcedure.query(() => {
    return { message: "Football competitions data" };
  }),
});
