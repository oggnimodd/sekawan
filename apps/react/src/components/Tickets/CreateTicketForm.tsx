import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TicketSchema, TicketData } from "./models";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateTicketForm = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TicketData>({
    resolver: zodResolver(TicketSchema),
  });

  const onSubmit = async (_data: TicketData) => {
    toast.success("Ticket created successfully");
    navigate("/tickets");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md flex flex-col gap-4"
    >
      <Controller
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            placeholder="Title"
            errorMessage={errors.title?.message}
            label="Title"
            labelPlacement="outside"
          />
        )}
        name="title"
      />
      <Controller
        control={control}
        render={({ field }) => (
          <Textarea
            {...field}
            placeholder="Description"
            errorMessage={errors.description?.message}
            label="Description"
            labelPlacement="outside"
          />
        )}
        name="description"
      />
      <Controller
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            placeholder="Priority"
            errorMessage={errors.priority?.message}
            label="Priority"
            labelPlacement="outside"
          >
            <SelectItem key={"high"} value="high">
              High
            </SelectItem>
            <SelectItem key={"medium"} value="medium">
              Medium
            </SelectItem>
            <SelectItem key={"low"} value="low">
              Low
            </SelectItem>
          </Select>
        )}
        name="priority"
      />
      <Button color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default CreateTicketForm;
