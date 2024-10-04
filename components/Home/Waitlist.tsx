"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SpringModal } from "../shared/SpringModal";
import { createWaitList } from "@/actions/waitinglist";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const close = () => {
    setOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setLoading(true);
      const { error, message } = await createWaitList(email);
      if (error) {
        setError(error);
        return;
      }
      setOpen(true);
      setEmail("");
      setError("");
    } catch (err) {
      console.error("Error submitting form:", err);
      setOpen(true); // Show modal with error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SpringModal
        title="Thanks for joining the waitlist!"
        message="We'll send you an email shortly with more details about our beta program."
        isOpen={isOpen}
        setIsOpen={() => close()}
      />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-600 text-white">
        <div className="px-4 md:px-6">
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
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 space-x-2"
              >
                <div className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white text-black"
                    placeholder="Enter your email"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-white text-sky-600 hover:bg-sky-100"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <svg
                          className="animate-spin h-5 w-5 text-sky-500"
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
                </div>

                {error && (
                  <div className="text-red-500 bg-red-100 text-center p-1 rounded text-xs">
                    {error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
