"use client";
import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFound: FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-8xl font-bold text-indigo-600"
      >
        404
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-4 text-xl font-semibold text-center"
      >
        Oops! The page you&apos;re looking for isn&apos;t here.
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-2 text-gray-500 text-center"
      >
        It looks like you took a wrong turn.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-6"
      >
        <Link href="/">
          <span className="px-6 py-3 bg-indigo-600 text-white text-sm font-medium rounded-full shadow hover:bg-indigo-500 transition duration-300 ease-in-out">
            Go Back Home
          </span>
        </Link>
      </motion.div>

      {/* Decorative background animation */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-200 to-purple-300 opacity-20"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default NotFound;
