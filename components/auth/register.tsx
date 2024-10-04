"use client";

import * as React from "react";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon, GithubIcon, Loader2 } from "lucide-react";
import * as z from "zod";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { FormError } from "../FormError";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { formSchema } from "@/schemas";
import { CardWrapper } from "./CardWrapper";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  modal?: "true" | "false";
  showsocial?: "true" | "false";
  showforgotpassword?: "true" | "false";
  label?: string;
  description?: string;
  optiobuttonlabel?: string;
  optionbuttonhref?: string;
  showfooter?: "true" | "false";
  islogin?: "true" | "false";
}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [passwordId, setPasswordId] = useState("password");
  const errMessage =
    useSearchParams().get("error") === "OAuthAccountNotLinked"
      ? "To confirm your identity, sign in with the same account you used originally."
      : "";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  function onSubmit(values: Partial<z.infer<typeof formSchema>>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log({ values });
  }

  const togglePassWordType = () => {
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;
    if (passwordInput.type === "password") {
      setPasswordId("text");
    } else {
      setPasswordId("password");
    }
  };

  return (
    <div className="flex justify-center w-full">
      <CardWrapper
        headerLabel={props.label as string}
        backButtonLabel="Already have an account?"
        backButtonHref="/auth/login"
        showfooter
        showSocial
      >
        <div className={cn("grid gap-6", className)} {...props}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormControl>
                          <Input
                            id="email"
                            className="focus:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-2"
                            placeholder="name@gmail.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-1">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <FormControl>
                          <Input
                            id="username"
                            className="focus:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-2"
                            placeholder="username123"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-1 mb-2">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="relative">
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <FormControl className="relative">
                          <Input
                            className="focus:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-2"
                            id="password"
                            type={passwordId}
                            placeholder="******"
                            {...field}
                          />
                        </FormControl>
                        {isShowPassword ? (
                          <EyeIcon
                            className="absolute right-0 top-6  flex items-center cursor-pointer justify-center px-2"
                            size={37}
                            onClick={() => {
                              setIsShowPassword(false);
                              togglePassWordType();
                            }}
                          />
                        ) : (
                          <EyeOffIcon
                            className="absolute right-0 top-6  flex items-center  cursor-pointer justify-center px-2"
                            size={37}
                            onClick={() => {
                              setIsShowPassword(true);
                              togglePassWordType();
                            }}
                          />
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormError message={errMessage} />
                <Button disabled={isLoading} className="gradient text-gray-50">
                  {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Create account
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </CardWrapper>
    </div>
  );
}
