// features/auth/types/index.ts
export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number; // current page (zero-based)
  size: number;
}
export const UserDto = {
    id: String,
    name: String,
    email: String,
    role: String,
    createdAt: String,
    updatedAt: String
}

export type LoginInput = {
  email: string;
  password: string;
};
