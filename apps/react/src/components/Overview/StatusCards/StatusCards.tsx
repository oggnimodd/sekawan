import { FC } from "react";
import StatusCard from "./StatusCard";
import { nanoid } from "nanoid";
import { Skeleton } from "@nextui-org/react";
import { api } from "trpc";

const StatusCards: FC = () => {
  const { isLoading, data } = api.ticket.getOverview.useQuery();

  if (isLoading) {
    return (
      <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map(() => (
          <Skeleton className="w-full h-32 rounded-lg" key={nanoid()} />
        ))}
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {data.map((status) => (
        <StatusCard title={status.title} count={status.count} key={nanoid()} />
      ))}
    </div>
  );
};

export default StatusCards;
