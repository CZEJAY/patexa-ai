import type { Metadata } from "next";
import { lora } from "../fonts/fonts";
import Navbar from "@/components/shared/Header";

export const metadata: Metadata = {
  title: "Patexa",
  icons: "/images/logo.webp",
  description:
    "Create beautiful presentations, pitch decks, resumes, websites, and documents. No design, writing, or coding skills needed. Bring your ideas to life like never before.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${lora.variable}`}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
