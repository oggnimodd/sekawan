import clsx from "clsx";
import { FC } from "react";

interface HistoryCardProps {
  title: string;
  count: string;
  isLast: boolean;
}

const HistoryCard: FC<HistoryCardProps> = ({ title, count, isLast }) => {
  return (
    <div
      className={clsx(
        "group w-full flex-col px-8 py-6 bg-default-100 hover:!border-primary",
        !isLast && "border-foreground/40 dark:border-foreground/10 border-b-1 ",
      )}
    >
      <p className="font-semibold text-foreground/60 text-center text-sm mb-1 group-hover:text-primary-500">
        {title}
      </p>
      <p className="text-2xl font-medium text-center group-hover:text-primary-500">
        {count}
      </p>
    </div>
  );
};

export default HistoryCard;
