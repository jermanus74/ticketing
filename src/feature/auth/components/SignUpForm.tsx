"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupInput, SignupSchema } from "../schemas/SignUpSchema";
import { useSignupMutation } from "../hooks/use-signUp";

type Props = {
  onSubmit: (data: SignupInput) => void;
  isLoading: boolean;
  resetOnSuccess?: (reset: () => void) => void;
};

export const SignupForm = ({ onSubmit, isLoading, resetOnSuccess }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupInput>({
    resolver: zodResolver(SignupSchema),
  });

  const signupMutation = useSignupMutation();
  if (resetOnSuccess) {
    resetOnSuccess(reset);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="block w-full max-w-md mx-auto  p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg space-y-6"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Create an Account
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Join us to start learning and sharing
        </p>
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          Name
        </label>
        <input
          {...register("username")}
          placeholder="Name"
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
        />
        {errors.username && (
          <p className="text-sm text-red-500 mt-1">{errors.username.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          Email
        </label>
        <input
          {...register("email")}
          placeholder="Email"
          type="email"
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          Password
        </label>
        <input
          {...register("password")}
          placeholder="Password"
          type="password"
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
        />
        {errors.password && (
          <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          Role
        </label>
        <select
          {...register("role")}
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
        >
          <option value="STUDENT">Student</option>
          <option value="INSTRUCTOR">Instructor</option>
        </select>
        {errors.role && (
          <p className="text-sm text-red-500 mt-1">{errors.role.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow hover:bg-primary-dark disabled:opacity-50 transition-all"
      >
        {isLoading ? "Signing up..." : "Signup"}
      </button>

      {signupMutation.isError && (
        <p className="text-sm text-red-600 text-center mt-2">
          {signupMutation.error?.message}
        </p>
      )}
    </form>
  );
};
