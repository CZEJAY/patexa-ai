"use client"
import { useSearchParams } from "next/navigation";
import { CardWrapper } from "./CardWrapper";
import { AlertTriangleIcon } from "lucide-react";
import clsx from "clsx";

export const ErrorCard = () => {
  const netWorkError = useSearchParams().get("error") === "Configuration"
  return (
    <div className="w-full flex justify-center">
      <CardWrapper
        headerLabel="Oops! Something went wrong!"
        backButtonHref="/auth/login"
        backButtonLabel="Back to login"
      >
        <div className={clsx(
          "w-full flex flex-col gap-1 justify-center items-center  p-1 rounded",
          // netWorkError && "bg-destructive/20"
        )}>
          {
            netWorkError && (
              <p className="text-sm">Please check your internet connection</p>
            )
          }
          <AlertTriangleIcon className="text-destructive animate-pulse" />
        </div>
      </CardWrapper>
    </div>
  );
};
