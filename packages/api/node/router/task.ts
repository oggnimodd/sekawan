import { nanoid } from "nanoid";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export interface Task {
  id: string;
  title: string;
  priority: "new" | "finished" | "default" | "urgent";
  isCompleted: boolean;
}

const tasks: Task[] = [
  {
    id: nanoid(),
    title: "Finish ticket update",
    priority: "urgent",
    isCompleted: false,
  },
  {
    id: nanoid(),
    title: "Create new ticket example",
    priority: "new",
    isCompleted: false,
  },
  {
    id: nanoid(),
    title: "Update ticket report",
    priority: "finished",
    isCompleted: true,
  },
  {
    id: nanoid(),
    title: "Retest ticket examples",
    priority: "default",
    isCompleted: true,
  },
];

export const taskRouter = createTRPCRouter({
  getTasks: protectedProcedure.query(() => {
    return tasks;
  }),
});
