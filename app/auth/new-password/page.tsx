import React, { Suspense } from "react";
import { NewPasswordForm } from "@/components/auth/new-password-form";

const page = () => {
  return (
    <Suspense>
      <div className="">
        <NewPasswordForm />
      </div>
    </Suspense>
  );
};

export default page;
