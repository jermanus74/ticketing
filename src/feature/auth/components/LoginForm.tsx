"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { LoginInput, LoginSchema } from "../schemas/SignUpSchema";
import { useLoginMutation } from "../hooks/use-login";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
  });

  const loginMutation = useLoginMutation();

  const onSubmit = (data: LoginInput) => {
    loginMutation.mutate(data, {
      onSuccess: (res: { token: string }) => {
        toast.success("Login successful");

        console.log("Token:", res.token); // Store token in localStorage if needed
        reset();
        localStorage.setItem("token", res.token);
      },
      onError: (err: Error) => {
        toast.error(err.message || "Login failed");
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow"
    >
      <h2 className="text-xl font-bold mb-4">Login</h2>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          {...register("email")}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Password</label>
        <input
          {...register("password")}
          type="password"
          className="w-full border rounded px-3 py-2"
          placeholder="Enter password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loginMutation.isPending}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        {loginMutation.isPending ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
