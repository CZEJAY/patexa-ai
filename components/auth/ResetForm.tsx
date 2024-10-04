"use client";

import React from "react";
import { CardWrapper } from "./CardWrapper";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetSchema } from "@/schemas";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const ResetForm = () => {
  const form = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof resetSchema>) => {
    console.log(values);
    form.reset(); // Reset the form after submitting.
    form.clearErrors(); // Clear any errors after submitting.
    // ✅ This will be type-safe and validated.
  };
  return (
    <div className="w-full flex justify-center">
      <CardWrapper
        headerLabel="Enter your email for a reset link"
        backButtonHref="/auth/login"
        backButtonLabel="Login"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <div className="grid gap-1">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" placeholder="Email" className="focus:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-2" />
                      </FormControl>
                      <FormDescription className="text-sm">
                        Email linked to your account.
                      </FormDescription>
                    </FormItem>
                  )}
                />
              </div>
              <Button className="gradient text-gray-50">Send reset email</Button>
            </div>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
};

export default ResetForm;
