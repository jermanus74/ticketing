// lib/hooks/useAuthMutation.ts
import { useMutation } from "@tanstack/react-query";
import { SignupInput } from "../schemas/SignUpSchema";


export function useSignupMutation() {
  return useMutation({
    mutationFn: async (formData: SignupInput) => {
      const res = await fetch(" http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json",
             "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Signup failed");
      return data;
    },
  });
}
