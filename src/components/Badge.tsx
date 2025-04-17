import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

const Badge = ({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <p style={style} className={cn(`w-fit rounded-lg px-4 py-1 ${className}`)}>
      {text}
    </p>
  );
};

export default Badge;
