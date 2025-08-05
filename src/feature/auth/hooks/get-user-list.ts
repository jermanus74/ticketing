import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { Page } from "../types/indes"; // Make sure this file is named 'index.ts', not 'indes'
import { SignupInput } from "../schemas/SignUpSchema";
import { fetchUsers } from "./fetch-user";

export function useUsers(
  page: number,
  size: number,
  sortBy: string,
  query: string
) {
  return useQuery<Page<SignupInput>, Error>({
    queryKey: ["users", page, size, sortBy, query],
    queryFn: () => fetchUsers(page, size, sortBy, query),
    placeholderData: keepPreviousData, // ✅ TanStack Query v5 syntax
  });
}
