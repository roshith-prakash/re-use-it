import { cn } from "@/lib/utils";
import { ChangeEventHandler } from "react";

const TextArea = ({
  value,
  onChange,
  placeholder = "Enter your text",
  className,
}: {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  className?: string;
}) => {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      className={cn(
        `h-36 w-full rounded-lg border-2 bg-transparent p-4 focus:outline-none ${className}`,
      )}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
