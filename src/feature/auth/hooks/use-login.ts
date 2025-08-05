import { useMutation } from "@tanstack/react-query";
import { LoginInput } from "../schemas/SignUpSchema";

export function useLoginMutation() {
  return useMutation({
    mutationFn: async (formData: LoginInput) => {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Login response:", data);
      if (!res.ok) throw new Error(data.message || "Login failed");
      return data; // { token, role, userId, expiresAt }
    },
  });
}
