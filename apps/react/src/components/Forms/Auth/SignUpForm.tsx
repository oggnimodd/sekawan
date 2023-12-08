import { useSignUp } from "@clerk/clerk-react";
import { FC, useState } from "react";
import BaseForm from "./BaseForm";
import { Input, Button } from "@nextui-org/react";
import PasswordInputProps from "./PasswordInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "./models";
import type { SignUpData } from "./models";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SignUp: FC = () => {
  const { signUp, isLoaded, setActive } = useSignUp();
  const navigate = useNavigate();
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [pendingVerification, setPendingVerification] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm<SignUpData>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = async (data: SignUpData) => {
    if (!isLoaded) {
      return;
    }

    setIsSigningUp(true);
    try {
      await signUp.create({
        emailAddress: data.email,
        password: data.password,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (error: any) {
      const ERROR_MESSAGE =
        error.errors[0].longMessage || "Something went wrong";
      setError("root", { type: "manual", message: ERROR_MESSAGE });
      toast.error(ERROR_MESSAGE);
    } finally {
      setIsSigningUp(false);
    }
  };

  const onPressVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    setIsVerifying(true);
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: getValues().code || "",
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        navigate("/");
      }
    } catch (error: any) {
      const ERROR_MESSAGE =
        error.errors[0].longMessage || "Something went wrong";
      setError("root", { type: "manual", message: ERROR_MESSAGE });
      toast.error(ERROR_MESSAGE);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <BaseForm
      header={
        <div className="flex flex-col items-center mb-8 gap-y-1">
          <p className="text-foreground font-medium text-xl">
            Sign up to Dashboard Kit
          </p>
          <p className="text-sm text-foreground/60">
            Enter your email and password below
          </p>
        </div>
      }
      footer={
        <div className="mt-6 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link className="text-primary" to="/sign-in">
              Sign In
            </Link>
          </p>
        </div>
      }
    >
      {!pendingVerification && (
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
          <PasswordInputProps
            placeholder="Confirm Password"
            label="Confirm Password"
            labelPlacement="outside"
            {...register("confirmPassword")}
            errorMessage={errors.confirmPassword?.message || ""}
          />
          <div>
            {errors.root && (
              <p className="text-sm text-center text-red-500">
                {errors.root.message}
              </p>
            )}
          </div>

          <Button
            isLoading={!isLoaded || isSigningUp}
            type="submit"
            color="primary"
          >
            Sign Up
          </Button>
        </form>
      )}

      {pendingVerification && (
        <div className="flex flex-col gap-3">
          <p className="text-foreground font-semibold">
            Please enter the code sent to your email
          </p>
          <form onSubmit={onPressVerify} className="flex flex-col gap-6">
            <Input
              placeholder="Code..."
              type="text"
              label="Code"
              labelPlacement="outside"
              {...register("code")}
              errorMessage={errors.code?.message || ""}
            />
            <Button
              isLoading={!isLoaded || isVerifying}
              type="submit"
              color="primary"
            >
              Verify Email
            </Button>
          </form>
        </div>
      )}
    </BaseForm>
  );
};

export default SignUp;
