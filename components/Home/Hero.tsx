import { FC } from "react";
import Link from "next/link";
import { RichText, RichTextContent, RichTextItem } from "../shared/RichText";
import AutoText from "../shared/AutoText";

const Hero: FC = () => {
  return (
    <section className="relative bg-black text-white  h-screen flex flex-col justify-center items-center">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.webp')]  bg-cover opacity-20"></div>

      {/* Announcement badge */}
      <div className="flex items-center px-4 py-2 mb-4 bg-gray-900 rounded-full text-sm">
        <span className="mr-2">🎉</span> Coming soon
      </div>

      {/* Main Heading */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Create Beautiful <br />
          <div className="h-14">
            <AutoText
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
        <div className="flex space-x-4 justify-center">
          <Link href="/signup">
            <span className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
              Try it free →
            </span>
          </Link>
          <Link href="/learn-more">
            <span className="text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-full border border-gray-500 transition duration-300">
              Learn more
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
