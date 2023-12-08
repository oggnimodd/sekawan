import { createTRPCRouter, protectedProcedure } from "../trpc";

type TicketSummary = {
  id: string;
  status: string;
  count: number;
};

const unresolvedTicketsSummary: TicketSummary[] = [
  {
    status: "Waiting on Feature Request",
    id: "4238",
    count: 4238,
  },
  {
    status: "Awaiting Customer Response",
    id: "1005",
    count: 1005,
  },
  {
    status: "Awaiting Developer Fix",
    id: "914",
    count: 914,
  },
  {
    status: "Pending",
    id: "281",
    count: 281,
  },
];

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
  getHistory: protectedProcedure.query(() => {
    return {
      graphData: [30, 40, 45, 50, 49, 60, 70, 91, 125],
      meta: [
        {
          title: "Resolved",
          count: "449",
        },
        {
          title: "Received",
          count: "426",
        },
        {
          title: "Average first response time",
          count: "33m",
        },
        {
          title: "Average response time",
          count: "3h 8m",
        },
        {
          title: "Resolution within SLA",
          count: "94%",
        },
      ],
    };
  }),
  getUnresolvedTicketsSummary: protectedProcedure.query(() => {
    return unresolvedTicketsSummary;
  }),
});
