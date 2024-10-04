import React from "react";
import "../globals.css";
import AuthContext from "@/context/AuthContext";
import Welcome from "@/components/Welcome";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Patexa | Authentication",
  description:
    "Create beautiful presentations, pitch decks, resumes, websites, and documents. No design, writing, or coding skills needed. Bring your ideas to life like never before.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="layout-bg">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthContext>
            <div className="container relative flex h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
              <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="absolute inset-0 bg-black" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                  Patexa.AI
                </div>
                <Welcome />
                <div className="relative z-20 mt-auto">
                  <blockquote className="space-y-2">
                    <p className="text-lg">
                      Create beautiful presentations, pitch decks, resumes,
                      websites, and documents. No design, writing, or coding
                      skills needed. Bring your ideas to life like never before.
                    </p>
                    <footer className="text-sm">
                      &copy; {new Date().getFullYear()} Patexa. All rights
                      reserved.
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="lg:p-8 relative ">
                {/* <div className="bg-sky-100 hidden md:block absolute top-[-6rem] -z-10 left-0 h-[20rem]   w-[30rem] blur-[5rem] rounded-full dark:bg-[#71299256]"></div> */}
                {/* <div className="bg-blue-200 hidden md:block absolute bottom-2 md:bottom-0 -z-10 -right-16 md:right-0 h-[15rem] w-[30rem] rounded-full blur-[5rem] dark:bg-[#31091a93]"></div> */}
                {children}
              </div>
            </div>
          </AuthContext>
        </ThemeProvider>
      </body>
    </html>
  );
}
