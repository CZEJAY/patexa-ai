"use client";

import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/auth/register";
import { cn } from "@/lib/utils";

import React, { Suspense } from "react";
import ResetForm from "@/components/auth/ResetForm";

const page = () => {
  return (
    <Suspense>
      <div className="">
        <ResetForm />
      </div>
    </Suspense>
  );
};

export default page;
