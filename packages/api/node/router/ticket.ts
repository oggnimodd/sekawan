import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const ticketRouter = createTRPCRouter({
  getOverview: protectedProcedure.query(() => {
    return [
      {
        title: "Unresolved",
        count: 60,
      },
      {
        title: "Overdue",
        count: 16,
      },
      {
        title: "Open",
        count: 43,
      },
      {
        title: "On hold",
        count: 64,
      },
    ];
  }),
});
