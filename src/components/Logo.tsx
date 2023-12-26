import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({ className, spanClassName }: any) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "text-zinc-950 text-xl underline underline-offset-4 decoration-[1px] group",
        className
      )}
    >
      <span>A</span>mazonpro
    </Link>
  );
};

export default Logo;
