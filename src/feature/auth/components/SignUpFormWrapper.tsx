"use client";

import { toast } from "sonner";
import { useSignupMutation } from "../hooks/use-signUp";
import { SignupForm } from "./SignUpForm";
import { SignupInput } from "../schemas/SignUpSchema";

export default function SignupFormWrapper() {
  const mutation = useSignupMutation();

  const handleSubmit = (data: SignupInput) => {
    console.log("Sending signup data:", data);

    mutation.mutate(data, {
      onSuccess: () => {
        toast.success("Signup successful!");
      },
      onError: (err: Error) => {
        toast.error(err.message || "Signup failed");
      },
    });
  };

  return <SignupForm onSubmit={handleSubmit} isLoading={mutation.isPending} />;
}
