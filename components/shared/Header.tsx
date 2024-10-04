"use client";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Menu, X, GlobeIcon } from "lucide-react";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-white shadow-lg">
      <header className="px-4 lg:px-16 h-16 w-full flex items-center justify-between">
        {/* Logo */}
        <Link className="flex items-center justify-center" href="#">
          <Sparkles className="h-6 w-6 text-indigo-600" />
          <span className="ml-2 text-2xl font-bold text-indigo-600">
            Patexa
          </span>
        </Link>

        <button
          className="lg:hidden block focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Navigation Links for larger screens */}
        <nav className="hidden lg:flex ml-auto gap-4 sm:gap-6">
          {/* Language toggle */}
          <div className="flex items-center gap-2">
            <GlobeIcon />
          </div>
          <Link
            className=" font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className=" font-medium hover:underline underline-offset-4"
            href="#how-it-works"
          >
            How It Works
          </Link>
          <Link
            className=" font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>
        </nav>

        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-14 left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center gap-4"
          >
            <Link
              className="text-lg font-medium hover:underline underline-offset-4"
              href="#features"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              className="text-lg font-medium hover:underline underline-offset-4"
              href="#how-it-works"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              className="text-lg font-medium hover:underline underline-offset-4"
              href="#pricing"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
          </motion.nav>
        )}
      </header>
    </nav>
  );
};

export default Navbar;
