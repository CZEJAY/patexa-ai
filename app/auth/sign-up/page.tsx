import { UserAuthForm } from "@/components/auth/register";
import { Suspense } from "react";

export default function AuthenticationPage() {
  return (
    <Suspense>
      <div className="lg:p-8">
        <UserAuthForm
          label="Enter your email below to create your account"
          showfooter="true"
          showsocial="true"
        />
      </div>
    </Suspense>
  );
}
