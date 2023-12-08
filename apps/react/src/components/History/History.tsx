import { FC } from "react";
import Graph from "./Graph";
import HistoryCards from "./HistoryCards";

const History: FC = () => {
  return (
    <div className="flex my-4 rounded-xl bg-default-100 border-1 border-foreground/40 dark:border-foreground/10 overflow-hidden">
      <div className="w-8/12 p-8 flex h-full">
        <Graph />
      </div>
      <div className="w-4/12 border-foreground/40 dark:border-foreground/10 border-l-1 flex">
        <HistoryCards />
      </div>
    </div>
  );
};

export default History;
