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
        `dark:bg-secondarydarkbg overflow-hidden rounded-xl border-[1px] border-white/25 bg-white p-5 shadow-xl transition-all duration-200 hover:scale-105 ${className}`,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
