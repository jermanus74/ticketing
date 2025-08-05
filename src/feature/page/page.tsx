"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignupFormWrapper from "../auth/components/SignUpFormWrapper";
import LoginForm from "../auth/components/LoginForm"; // You should have this created

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-muted">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
        <Tabs defaultValue="signup" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>

          <TabsContent value="signup">
            <SignupFormWrapper />
          </TabsContent>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
