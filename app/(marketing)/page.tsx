import { Medal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FullLogo } from "@/components/FullLogo";

const headingFont = localFont({ src: "../../public/fonts/font.woff2" });
const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <FullLogo />
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-200 text-amber-700 rounded-full uppercase mt-4">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task management
        </div>
        <h1 className="text-2xl md:text-4xl text-center text-neutral-800 mb-4">
          topwork helps team move
        </h1>
        <div className="text-2xl md:text-4xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white p-3 rounded-md w-fit">
          work forward
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with topwork.
      </div>
      <div className="space-x-4 flex items-center justify-center w-full mt-6">
        <Button size="sm" variant={"outline"} asChild>
          <Link href="/sign-in">Login</Link>
        </Button>
        <Button size="sm" asChild>
          <Link href="/sign-up">Get topwork for free!</Link>
        </Button>
      </div>
    </div>
  );
};

export default MarketingPage;
