import { z } from "zod";

export const TicketSchema = z.object({
  title: z.string().nonempty("Title is required"),
  description: z.string().nonempty("Description is required"),
  priority: z.enum(["high", "medium", "low"]),
});

export type TicketData = z.infer<typeof TicketSchema>;
