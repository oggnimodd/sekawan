import { FC } from "react";
import Graph from "./Graph";
import HistoryCards from "./HistoryCards";
import { Card, Skeleton } from "@nextui-org/react";
import { api } from "trpc";

const History: FC = () => {
  const { data, isLoading } = api.ticket.getHistory.useQuery();

  if (isLoading) {
    return <Skeleton className="my-4 w-full h-96 rounded-xl" />;
  }

  if (!data) return null;

  return (
    <Card className="flex flex-row my-4 rounded-xl border-1 border-foreground/40 dark:border-foreground/10 overflow-hidden flex-wrap">
      <div className="w-full md:w-8/12 p-6 md:p-8 flex h-full">
        <Graph data={data.graphData} />
      </div>
      <div className="w-full md:w-4/12 border-foreground/40 dark:border-foreground/10 border-l-1 flex">
        <HistoryCards meta={data.meta} />
      </div>
    </Card>
  );
};

export default History;
