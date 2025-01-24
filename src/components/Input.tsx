import { ChangeEventHandler } from "react";

// Styled Text input
const Input = ({
  value,
  placeholder,
  onChange,
  className = "",
}: {
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}) => {
  return (
    <input
      type="text"
      className={`dark:placeholder:text-grey mt-3 min-h-8 w-full border-b-2 bg-transparent py-1.5 focus:outline-none ${className}`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
