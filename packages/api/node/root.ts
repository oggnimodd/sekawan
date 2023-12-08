import { ticketRouter } from "./router/ticket";
import { memberRouter } from "./router/member";
import { taskRouter } from "./router/task";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  ticket: ticketRouter,
  member: memberRouter,
  task: taskRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
