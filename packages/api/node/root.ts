import { ticketRouter } from "./router/ticket";
import { memberRouter } from "./router/member";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  ticket: ticketRouter,
  member: memberRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
