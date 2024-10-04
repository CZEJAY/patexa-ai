"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SpringModal } from "../shared/SpringModal";

export function Waitlist() {
  const [state, handleSubmit] = useForm("xkgwdbqz");
  const [email, setEmail] = useState("");
  const [isOpen, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };
  if (state.succeeded) {
    setOpen(true);
  }

  return (
    <>
      <SpringModal
        title="Thanks for joining the waitlist!"
        message="We'll send you an email shortly with more details about our beta program."
        isOpen={isOpen}
        setIsOpen={() => close()}
      />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Ideas?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Join thousands of creators who are bringing their visions to
                life with Patexa.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1 bg-white text-black"
                  placeholder="Enter your email"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500"
                />
                <Button
                  type="submit"
                  className="bg-white text-indigo-600 hover:bg-gray-100"
                >
                  {state.submitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                      <span>Joining...</span>
                    </div>
                  ) : (
                    "Join our waitlist"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
