"use client";

import { SignupInput } from "../schemas/SignUpSchema";

interface UserTableProps {
  users: SignupInput[];
}

export default function UserTable({ users }: UserTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-blue-500 rounded-md shadow-md">
        <thead className="bg-green-800 ">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">
              #
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">
              Username
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">
              Email
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">
              Role
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">
              Created At
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-white">
              Updated At
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user.id ?? idx} className="border-t border-blue-500">
              <td className="px-4 py-2 text-sm text-white bg-blue-950">
                {idx + 1}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800 border-blue-500">
                {user.username}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800 border-blue-500">
                {user.email}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800 border-blue-500">
                {user.role}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800 border-blue-500">
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleString()
                  : "N/A"}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800 border-blue-500">
                {user.updatedAt
                  ? new Date(user.updatedAt).toLocaleString()
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
