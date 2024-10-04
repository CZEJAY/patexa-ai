"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AutoText from "../shared/AutoText";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Hero: FC = () => {
  return (
    <motion.section
      className="relative bg-black text-white h-screen flex flex-col justify-center items-center"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Background grid pattern */}
      <motion.div
        className="absolute inset-0 bg-[url('/grid.webp')] bg-cover opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* Announcement badge */}
      <motion.div
        className="flex items-center px-4 py-2 mb-4 bg-gray-900 rounded-full text-sm"
        variants={fadeInUp}
      >
        <span className="mr-2">🎉</span> Coming soon
      </motion.div>

      {/* Main Heading */}
      <motion.div className="relative z-10 text-center" variants={fadeInUp}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-sky-500">Create</span> Beautiful <br />
          <div className="h-14">
            <AutoText
              className="text-sky-500"
              startOnView
              delay={100}
              speed={200}
              textArray={[
                "Presentations",
                "Websites",
                "Documents",
                "Ideas and More",
              ]}
            />
          </div>
        </h1>
        <p className="text-xl font-medium mb-8">
          Patexa brings your ideas to life with no design, writing, or coding
          skills needed.
        </p>

        {/* Call to Action buttons */}
        <motion.div className="flex space-x-4 justify-center">
          <motion.div variants={buttonVariants}>
            <Link href="/auth/sign-up">
              <span className="bg-sky-600 hover:bg-sky-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
                Try it free →
              </span>
            </Link>
          </motion.div>
          <motion.div variants={buttonVariants}>
            <Link href="/learn-more">
              <span className="text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-full border border-gray-500 transition duration-300">
                Learn more
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
