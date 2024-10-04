"use client";
import React, { useCallback, useEffect, useState, useTransition } from "react";
import { CardWrapper } from "./CardWrapper";

import BeatLoader from "react-spinners/BeatLoader";
import { useTheme } from "next-themes";
import { FormSuccess } from "../FormSuccess";
import { useSearchParams } from "next/navigation";
import { FormError } from "../FormError";
import { newVerification } from "@/actions/newverification";

const VerificationForm = () => {
  const { theme } = useTheme();
  const token = useSearchParams().get("token");
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition()


  const onSubmit = useCallback(() => {
    if(!token) return setError("Missing token")

    startTransition(() => {
      newVerification(token)
      .then((data) => {
        if(data?.error) setError(data.error)
        if(data?.success) setSuccess(data.success)
      })
    })
  }, [token, error, success])

  useEffect(() => {
    onSubmit()
  }, [])

  return (
    <div className="w-full flex justify-center">
      <CardWrapper
        headerLabel="Just a sec, we are verifying your email!"
        backButtonHref="/auth/login"
        backButtonLabel="Login"
      >
        <div className="w-full flex flex-col gap-4 justify-center  p-4 rounded-lg ">
          <div className="flex flex-col gap-2 w-full justify-center items-center">
            {!success && !error && (
              <BeatLoader
                className=""
                size={20}
                color={theme === "dark" ? "#fff" : "#000"}
              />
            )}
            <FormSuccess message={success} />
            {!success && <FormError message={error} />}
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default VerificationForm;
