import { ticketRouter } from "./router/ticket";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  ticket: ticketRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
