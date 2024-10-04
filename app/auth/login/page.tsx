import React, { Suspense } from "react";
import Login from "@/components/auth/Login";

const page = () => {
  return (
    <Suspense>
      <div className="">
        <Login />
      </div>
    </Suspense>
  );
};

export default page;
