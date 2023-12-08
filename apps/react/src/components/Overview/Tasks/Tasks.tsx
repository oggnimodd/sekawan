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
  Chip,
  Checkbox,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { api } from "trpc";
import { Task } from "../../../../../../packages/api/node";

type ChipColor = "primary" | "success" | "default" | "danger";

const chipColors: Record<Task["priority"], ChipColor> = {
  new: "primary",
  finished: "success",
  normal: "default",
  urgent: "danger",
};

const getChipColor = (priority: Task["priority"]) => {
  return chipColors[priority];
};

const Tasks: FC = () => {
  const { data: tasks, isLoading } = api.task.getTasks.useQuery();

  if (isLoading) {
    return <Skeleton className="my-4 w-full h-96 rounded-xl" />;
  }

  if (!tasks) return null;

  return (
    <Card className="border-1 border-foreground/40 dark:border-foreground/10 w-full px-4 py-5">
      <div className="flex justify-between p-4 items-center">
        <div className="flex flex-col gap-y-2">
          <p className="text-lg font-medium">Tasks</p>
          <p className="text-foreground/70 text-xs">Today</p>
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
          <TableColumn>Finished</TableColumn>
          <TableColumn>Title</TableColumn>
          <TableColumn>Priority</TableColumn>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => {
            const chipColor = getChipColor(task.priority);

            return (
              <TableRow key={task.id}>
                <TableCell>
                  <Checkbox isSelected={task.isCompleted} radius="full" />
                </TableCell>
                <TableCell>{task.title}</TableCell>
                <TableCell>
                  <Chip
                    classNames={{
                      content: "capitalize",
                    }}
                    color={chipColor}
                    isDisabled={task.isCompleted}
                  >
                    {task.priority}
                  </Chip>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
};

export default Tasks;
