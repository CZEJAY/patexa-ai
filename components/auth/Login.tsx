"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import React, { useState } from "react";
import { CardWrapper } from "./CardWrapper";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { loginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";
import { FormError } from "../FormError";
import { FormSuccess } from "../FormSuccess";
import Link from "next/link";

const Login = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const urlError =
    useSearchParams().get("error") === "OAuthAccountNotLinked"
      ? "To confirm your identity, sign in with the same account you used originally."
      : "";

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    console.log(values);
  };
  return (
    <div className="w-full flex justify-center">
      <CardWrapper
        headerLabel="Enter your email below to access your account"
        backButtonHref="/auth/sign-up"
        backButtonLabel="Need an account?"
        showSocial
        showfooter
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(() => {})}>
            <div className="grid gap-6">
              <div className="grid gap-1">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input className="focus:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-2" placeholder="name@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-1">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input className="focus:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-2" placeholder="******" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Link
                href="/auth/reset"
                className="text-sm text-gray-400 hover:text-gray-500"
              >
                Forgot password?
              </Link>
              <FormError message={error || urlError} />
              <FormSuccess message={success} />
              <Button className="gradient text-gray-50">Login</Button>
            </div>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
};

export default Login;
