import { Lora, Poppins } from "next/font/google";

export const lora = Lora({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
  variable: "--font-lora",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-poppins",
});
