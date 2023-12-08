import { Card } from "@nextui-org/react";
import clsx from "clsx";
import { FC } from "react";

interface HistoryCardProps {
  title: string;
  count: string;
  isLast?: boolean;
  isFirst?: boolean;
}

const HistoryCard: FC<HistoryCardProps> = ({
  title,
  count,
  isLast,
  isFirst,
}) => {
  return (
    <Card
      shadow="none"
      className={clsx(
        "group w-full flex-col px-8 py-6 rounded-none",
        !isLast && "border-foreground/40 dark:border-foreground/10 border-b-1 ",
        isFirst && "border-b-1 border-t-1 md:border-t-0",
      )}
    >
      <p className="font-semibold text-foreground/60 text-center text-sm mb-1 group-hover:text-primary-500">
        {title}
      </p>
      <p className="text-2xl font-medium text-center group-hover:text-primary-500">
        {count}
      </p>
    </Card>
  );
};

export default HistoryCard;
