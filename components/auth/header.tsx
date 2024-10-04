import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1
        className={cn(
          "text-3xl font-semibold flex items-center gap-1",
          font.className
        )}
      >
        <Sparkles className="h-6 w-6 text-sky-600" />
        <span className="ml-2 text-2xl font-bold text-sky-600">Patexa.</span>
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
