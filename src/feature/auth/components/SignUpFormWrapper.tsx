// components/SignupFormWrapper.tsx
"use client";

import { toast } from "sonner";
import { useRef } from "react";
import { useSignupMutation } from "../hooks/use-signUp";
import { SignupForm } from "./SignUpForm";
import { SignupInput } from "../schemas/SignUpSchema";
import Router from "next/router";

export default function SignupFormWrapper() {
  const mutation = useSignupMutation();
  const resetRef = useRef<(() => void) | null>(null);

  const handleSubmit = (data: SignupInput) => {
    mutation.mutate(data, {
      onSuccess: () => {
        Router.push("/auth/verify-email-message");
        toast.success("Signup successful!");
        resetRef.current?.(); // ✅ Clear form fields
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
