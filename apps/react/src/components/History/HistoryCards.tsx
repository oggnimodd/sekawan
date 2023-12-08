import { FC } from "react";
import HistoryCard from "./HistoryCard";
import { nanoid } from "nanoid";

interface HistoryCardsProps {
  meta: {
    title: string;
    count: string;
  }[];
}

const HistoryCards: FC<HistoryCardsProps> = ({ meta }) => {
  return (
    <div className="w-full flex flex-col">
      {meta.map((item, id) => (
        <HistoryCard
          isLast={id === 4}
          title={item.title}
          count={item.count}
          key={nanoid()}
        />
      ))}
    </div>
  );
};

export default HistoryCards;
