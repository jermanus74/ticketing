import TimeTable from "@/feature/timetable/TimeTable";
import React from "react";

const page = () => {
  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <TimeTable />
    </div>
  );
};

export default page;
