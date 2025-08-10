"use client";
import LoginForm from "@/feature/auth/components/LoginForm";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-muted">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
