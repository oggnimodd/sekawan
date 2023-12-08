import HistoryCard from "./HistoryCard";
import { nanoid } from "nanoid";

const HistoryCards = () => {
  return (
    <div className="w-full flex flex-col">
      {Array.from({ length: 5 }).map((_i, id) => (
        <HistoryCard
          isLast={id === 4}
          title={"Title"}
          count={"10"}
          key={nanoid()}
        />
      ))}
    </div>
  );
};

export default HistoryCards;
