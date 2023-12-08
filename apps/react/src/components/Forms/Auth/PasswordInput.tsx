import React, { forwardRef, ForwardRefRenderFunction, Ref } from "react";
import { Input } from "@nextui-org/react";
import { Eye, EyeOff } from "lucide-react";
import { useToggle } from "@mantine/hooks";

type PasswordInputProps = React.ComponentProps<typeof Input>;

const ICON_SIZE = 18;

const PasswordInput: ForwardRefRenderFunction<
  HTMLInputElement,
  PasswordInputProps
> = (props, ref: Ref<HTMLInputElement>) => {
  const [isVisible, toggle] = useToggle([false, true] as const);

  return (
    <Input
      {...props}
      ref={ref}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={() => toggle()}
        >
          {isVisible ? <Eye size={ICON_SIZE} /> : <EyeOff size={ICON_SIZE} />}
        </button>
      }
      type={isVisible ? "text" : "password"}
    />
  );
};

const ForwardedPasswordInput = forwardRef(PasswordInput);

export default ForwardedPasswordInput;
