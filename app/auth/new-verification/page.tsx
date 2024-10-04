import React, { Suspense } from "react";
import VerificationForm from "@/components/auth/verificationForm";

const page = () => {
  return (
    <Suspense>
      <div className="">
        <VerificationForm />
      </div>
    </Suspense>
  );
};

export default page;
