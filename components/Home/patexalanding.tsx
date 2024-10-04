"use client";
import { useState } from "react";
import { Sparkles, Zap, PenTool, Globe, FileText, Star } from "lucide-react";
import Link from "next/link";
import Hero from "./Hero";
import { howitworks, pricingData, testimonials } from "@/constant";
import PricingCard from "../shared/PricingCard";
import TestimonialCard from "../shared/TestimonialCard";
import HTWCard from "../shared/HTWCard";
import { Waitlist } from "./Waitlist";

export default function PatexaLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <Zap className="w-12 h-12 text-sky-600" />
                <h3 className="text-xl font-bold">AI-Powered Creation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Generate content and designs in seconds with advanced AI
                  technology.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <PenTool className="w-12 h-12 text-sky-600" />
                <h3 className="text-xl font-bold">No Design Skills Needed</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Create professional-looking content without any design
                  experience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Globe className="w-12 h-12 text-sky-600" />
                <h3 className="text-xl font-bold">Website Builder</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Build stunning websites with our intuitive AI-assisted tools.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <FileText className="w-12 h-12 text-sky-600" />
                <h3 className="text-xl font-bold">Document Creation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Craft compelling documents, from resumes to reports, with
                  ease.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Star className="w-12 h-12 text-sky-600" />
                <h3 className="text-xl font-bold">Premium Templates</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Access a wide range of professionally designed templates.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Sparkles className="w-12 h-12 text-sky-600" />
                <h3 className="text-xl font-bold">Customization</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Tailor every aspect of your creations to match your vision.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {howitworks.map((item, i) => {
                const j = i + 1;
                return <HTWCard key={i} data={item} index={j} />;
              })}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Users Say
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={i} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Simple, Transparent Pricing
            </h2>
            <div className="grid  gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pricingData.monthly.map((item, i) => {
                return <PricingCard key={i} item={item} />;
              })}
            </div>
          </div>
        </section>
        <Waitlist />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-gray-500 dark:text-gray-400">
          &copy; 2024 Patexa. All rights reserved.
        </p>
        <nav className="text-sm md:text-lg sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
