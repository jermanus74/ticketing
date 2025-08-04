// app/signup/page.tsx

import SignupFormWrapper from "../auth/components/SignUpFormWrapper";

export default function SignupPage() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <SignupFormWrapper />
    </div>
  );
}
