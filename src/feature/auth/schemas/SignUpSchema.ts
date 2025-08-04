import { z } from "zod";

export const SignupSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["STUDENT", "INSTRUCTOR"]), // 👈 Only allowed roles
});

export type SignupInput = z.infer<typeof SignupSchema>;
