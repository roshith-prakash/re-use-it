import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `dark:bg-secondarydarkbg w-80 overflow-hidden rounded-xl border-[1px] border-white bg-white shadow-2xl transition-all duration-200 hover:scale-105 dark:shadow-white/32 ${className}`,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
