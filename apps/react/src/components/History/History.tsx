import { FC } from "react";
import Graph from "./Graph";
import HistoryCards from "./HistoryCards";
import { Skeleton } from "@nextui-org/react";
import { api } from "trpc";

const History: FC = () => {
  const { data, isLoading } = api.ticket.getHistory.useQuery();

  if (isLoading) {
    return <Skeleton className="my-4 w-full h-96 rounded-xl" />;
  }

  if (!data) return null;

  return (
    <div className="flex my-4 rounded-xl bg-default-100 border-1 border-foreground/40 dark:border-foreground/10 overflow-hidden">
      <div className="w-8/12 p-8 flex h-full">
        <Graph data={data.graphData} />
      </div>
      <div className="w-4/12 border-foreground/40 dark:border-foreground/10 border-l-1 flex">
        <HistoryCards meta={data.meta} />
      </div>
    </div>
  );
};

export default History;
