"use client";

import { useState } from "react";
import UserTable from "../auth/components/Usertable";
import { useUsers } from "../auth/hooks/get-user-list";
const UserList = () => {
  const [page, setPage] = useState(0);
  const [size] = useState(10); // You can make this adjustable
  const [sortBy] = useState("id");
  const [query] = useState(""); // Add a search box later if needed

  const {
    data: userPage,
    isLoading,
    error,
    isFetching,
  } = useUsers(page, size, sortBy, query);

  const handleNext = () => {
    if (!userPage || page + 1 >= userPage.totalPages) return;
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (page === 0) return;
    setPage((prev) => prev - 1);
  };

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    
    <div className="p-6 bg-muted rounded-lg shadow-md w-full min-h-full">
      <div className="flex flex-col items-center p-2 gap-2">
        <h3 className="text-lg font-semibold text-primary">User List</h3>
        <p className="text-primary text-sm">Paginated list of users.</p>

        {userPage && (
          <>
            <UserTable users={userPage.content} />

            <div className="flex items-center justify-between mt-4 w-full px-4">
              <button
                onClick={handlePrev}
                disabled={page === 0}
                className="bg-blue-600 text-white px-4 py-1 rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span className="text-sm">
                Page {page + 1} of {userPage.totalPages}
              </span>
              <button
                onClick={handleNext}
                disabled={page + 1 >= userPage.totalPages}
                className="bg-blue-600 text-white px-4 py-1 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}

        {isFetching && <p className="text-xs mt-2">Updating...</p>}
      </div>
    </div>
  );
};

export default UserList;
