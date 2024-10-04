import React, { Suspense } from "react";
import { ErrorCard } from "@/components/auth/error-card";

const page = () => {
  return (
    <Suspense>
      <div className="">
        <ErrorCard />
      </div>
    </Suspense>
  );
};

export default page;
