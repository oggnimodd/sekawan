import { useSignIn } from "@clerk/clerk-react";
import { FC, useState } from "react";
import BaseForm from "./BaseForm";
import { Input, Button } from "@nextui-org/react";
import PasswordInputProps from "./PasswordInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "./models";
import type { SignInData } from "./models";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SignIn: FC = () => {
  const { signIn, isLoaded, setActive } = useSignIn();
  const navigate = useNavigate();
  const [isSigningIn, setIsSigningIn] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = async (data: SignInData) => {
    if (!isLoaded) {
      return;
    }

    setIsSigningIn(true);

    try {
      const result = await signIn.create({
        identifier: data.email,
        password: data.password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        navigate("/");
      } else {
        throw result;
      }
    } catch (error: any) {
      const ERROR_MESSAGE =
        error.errors[0].longMessage || "Something went wrong";

      // Set root error
      setError("root", {
        type: "manual",
        message: ERROR_MESSAGE,
      });
      // Display toast
      toast.error(ERROR_MESSAGE);
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <BaseForm
      header={
        <div className="flex flex-col items-center mb-8 gap-y-1">
          <p className="text-foreground font-medium text-xl">
            Sign in to Dashboard Kit
          </p>
          <p className="text-sm text-foreground/60">
            Enter your email and password below
          </p>
        </div>
      }
      footer={
        <div className="mt-6 text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link className="text-primary" to="/sign-up">
              Sign Up
            </Link>
          </p>
        </div>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <Input
          placeholder="Please enter your email"
          type="email"
          label="Email"
          labelPlacement="outside"
          {...register("email")}
          errorMessage={errors.email?.message || ""}
        />
        <PasswordInputProps
          placeholder="Password"
          label="Password"
          labelPlacement="outside"
          {...register("password")}
          errorMessage={errors.password?.message || ""}
        />

        <div>
          {errors.root && (
            <p className="text-sm text-center text-red-500">
              {errors.root.message}
            </p>
          )}
        </div>
        <Button
          isLoading={!isLoaded || isSigningIn}
          type="submit"
          color="primary"
        >
          Sign In
        </Button>
      </form>
    </BaseForm>
  );
};

export default SignIn;
