// lib/api/users.ts

import { SignupInput } from "../schemas/SignUpSchema";
import { Page } from "../types/indes";

export async function fetchUsers(
  page = 0,
  size = 10,
  sortBy = "id",
  query = ""
): Promise<Page<SignupInput>> {
  const params = new URLSearchParams({
    page: page.toString(),
    size: size.toString(),
    sortBy,
  });
  if (query) params.append("query", query);

  const res = await fetch(`http://localhost:8080/api/auth/users?${params.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}
