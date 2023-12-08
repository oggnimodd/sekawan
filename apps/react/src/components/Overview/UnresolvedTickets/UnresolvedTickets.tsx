import { FC } from "react";
import {
  Card,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Skeleton,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { api } from "trpc";

const UnresolvedTickets: FC = () => {
  const { data: unresolvedTicketsSummary, isLoading } =
    api.ticket.getUnresolvedTicketsSummary.useQuery();

  if (isLoading) {
    return <Skeleton className="my-4 w-full h-96 rounded-xl" />;
  }

  if (!unresolvedTicketsSummary) return null;

  return (
    <Card className="border-1 border-foreground/40 dark:border-foreground/10 w-full px-4 py-5">
      <div className="flex justify-between p-4 items-center">
        <div className="flex flex-col gap-y-2">
          <p className="text-lg font-medium">Unresolved tickets</p>
          <p className="text-foreground/70 text-xs">
            Group :{" "}
            <span className="text-foreground/80 font-semibold">Support</span>
          </p>
        </div>
        <Link to="/" className="text-primary-500 text-sm">
          View details
        </Link>
      </div>

      <Table
        aria-label="Unresolved Tickets Summary"
        radius="none"
        border={0}
        shadow="none"
      >
        <TableHeader>
          <TableColumn>Status</TableColumn>
          <TableColumn>Total</TableColumn>
        </TableHeader>
        <TableBody>
          {unresolvedTicketsSummary.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell>{ticket.status}</TableCell>
              <TableCell>{ticket.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default UnresolvedTickets;
