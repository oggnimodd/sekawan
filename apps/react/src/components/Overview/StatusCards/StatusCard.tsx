import { FC } from "react";
import { Card } from "@nextui-org/react";

interface StatusCardProps {
  title: string;
  count: number;
}

const StatusCard: FC<StatusCardProps> = ({ title, count }) => {
  return (
    <Card className="group w-full rounded-lg flex-col px-8 py-6 border-foreground/40 dark:border-foreground/10 border-1 hover:!border-primary">
      <p className="font-semibold text-foreground/60 text-center text-lg mb-2 group-hover:text-primary-500">
        {title}
      </p>
      <p className="text-4xl font-medium text-center group-hover:text-primary-500">
        {count}
      </p>
    </Card>
  );
};

export default StatusCard;
