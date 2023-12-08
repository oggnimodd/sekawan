import { FC } from "react";
import Card from "./Card";
import { nanoid } from "nanoid";
import { useQuery } from "@tanstack/react-query";
import delay from "delay";
import { Skeleton } from "@nextui-org/react";

const StatusCard: FC = () => {
  const { isLoading } = useQuery({
    queryKey: ["status"],
    queryFn: async () => {
      await delay(2000);
      return Promise.resolve();
    },
  });

  if (isLoading) {
    return (
      <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map(() => (
          <Skeleton className="w-full h-32 rounded-lg" key={nanoid()} />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 4 }).map(() => (
        <Card title="Test" count={123} key={nanoid()} />
      ))}
    </div>
  );
};

export default StatusCard;
