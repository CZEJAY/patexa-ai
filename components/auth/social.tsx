"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaSpinner } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useState, useTransition } from "react";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [isGitLoading, setIsGitLoading] = useState(false)
  const [isGoogleLoading, setGoogleLoading] = useState(false)
  const [isPending, startTransition] = useTransition()
 
  const onClick = async (provider: "google" | "github") => {
    if(provider === "github") setIsGitLoading(true)
    if(provider === "google") setGoogleLoading(true)
     await signIn(provider, {
        callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
      });
    setGoogleLoading(false),
    setIsGitLoading(false)
  }

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full disabled:cursor-not-allowed"
        variant="outline"
        onClick={() => onClick("google")}
        disabled={isGoogleLoading || isGitLoading}
      >
        {isGoogleLoading ? <FaSpinner className="animate-spin mr-1" /> : <FcGoogle className="h-5 w-5 mr-1" />}Google
      </Button>
      <Button
        size="lg"
        className="w-full disabled:cursor-not-allowed"
        variant="outline"
        onClick={() => onClick("github")}
        disabled={isGitLoading || isGoogleLoading}
      >
        {isGitLoading ? <FaSpinner className="animate-spin mr-1" /> : <FaGithub className="h-5 w-5 mr-1" />}{" "} Github
      </Button>
    </div>
  );
};
