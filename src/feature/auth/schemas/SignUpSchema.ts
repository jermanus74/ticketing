import { z } from "zod";

export const SignupSchema = z.object({
  id: z.string().optional(),
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["STUDENT", "INSTRUCTOR"]),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
}).strict().transform((data) => {
  return {
    ...data,
    createdAt: data.createdAt ? new Date(data.createdAt).toISOString() : undefined,
    updatedAt: data.updatedAt ? new Date(data.updatedAt).toISOString() : undefined,
  };
});


export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginInput = z.infer<typeof LoginSchema>;
export type SignupInput = z.infer<typeof SignupSchema>;
