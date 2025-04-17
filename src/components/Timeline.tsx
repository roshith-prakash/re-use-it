import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { FaCaretDown } from "react-icons/fa6";

const Timeline = ({
  isLast,
  isFilled,
  children,
  className,
}: {
  isLast: boolean;
  isFilled: boolean;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex gap-x-5">
      {/* Timeline element */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            `border-hovercta bg-hovercta/90 ${!isFilled && "bg-transparent"} rounded-full border-4 p-4 ${className}`,
          )}
        />
        {!isLast && (
          <>
            <div
              className={cn(
                `border-hovercta h-full w-[1px] border-2 ${className}`,
              )}
            />
            <FaCaretDown className="h-10" />
          </>
        )}
      </div>
      {/* Content Div */}
      <div>{children}</div>
    </div>
  );
};

export default Timeline;
