import { ChangeEventHandler, ReactNode } from "react";

const Select = ({
  children,
  onChange,
  className,
}: {
  children: ReactNode;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  className?: string;
}) => {
  return (
    <select
      onChange={onChange}
      className={`flex-1 rounded-xl border-2 px-5 py-2 md:flex-none ${className}`}
    >
      {children}
    </select>
  );
};

export const Option = ({ value, text }: { value: string; text?: string }) => {
  return (
    <option value={value} className="dark:bg-secondarydarkbg py-2">
      {String(text) ? String(text) : String(value)}
    </option>
  );
};

export default Select;
