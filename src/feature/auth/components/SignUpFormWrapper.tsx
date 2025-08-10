"use client";

import { toast } from "sonner";
import { useRef } from "react";
import { useSignupMutation } from "../hooks/use-signUp";
import { SignupForm } from "./SignUpForm";
import { SignupInput } from "../schemas/SignUpSchema";
import { useRouter } from "next/navigation";

export default function SignupFormWrapper() {
  const mutation = useSignupMutation();
  const resetRef = useRef<(() => void) | null>(null);
  const router = useRouter();

  const handleSubmit = (data: SignupInput) => {
    mutation.mutate(data, {
      onSuccess: () => {
        router.push("/verifyEmail"); // ✅ App Router way

        toast.success("Signup successful!");
        resetRef.current?.();
      },
      onError: (err: Error) => {
        toast.error(err.message || "Signup failed");
      },
    });
  };

  return (
    <SignupForm
      onSubmit={handleSubmit}
      isLoading={mutation.isPending}
      resetOnSuccess={(resetFn) => {
        resetRef.current = resetFn;
      }}
    />
  );
}
