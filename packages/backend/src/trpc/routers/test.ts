import { publicProcedure, router } from "../trpc";

export const testRouter = router({
  // Queries are the best place to fetch data
  hello: publicProcedure.query(() => {
    return {
      message: "hello world",
    };
  }),
});
