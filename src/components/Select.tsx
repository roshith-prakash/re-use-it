import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Select = ({
  options,
  onChange,
  className,
  optionClassName,
  placeholder = "Select an option",
}: {
  options: { value: string; text?: string }[];
  onChange: (value: string) => void;
  className?: string;
  optionClassName?: string;
  placeholder?: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null); // To detect clicks outside the component

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange(value);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  // Close the dropdown if clicked outside the component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref} // Attach ref to the wrapper div
      role="select"
      className={cn(
        `relative min-w-3xs cursor-pointer rounded-xl border-2 bg-white px-5 py-2 dark:bg-transparent ${className}`,
      )}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex items-center justify-between gap-x-5">
        <p>
          {selected
            ? options.find((opt) => opt.value === selected)?.text || selected
            : placeholder}
        </p>
        <IoIosArrowDown
          className={`${isOpen ? "rotate-180" : "rotate-0"} transition-transform`}
        />
      </div>

      {isOpen && (
        <div
          className="dark:bg-secondarydarkbg absolute top-full left-0 mt-2 w-full overflow-hidden rounded-xl border-2 bg-white shadow-lg"
          onClick={(e) => e.stopPropagation()} // Prevent toggling when clicking inside the dropdown
        >
          {options.map((option) => (
            <div
              role="option"
              key={option.value}
              className={cn(
                `dark:hover:bg-darkbg px-4 py-2 hover:bg-gray-100 ${optionClassName}`,
              )}
              onClick={() => handleSelect(option.value)}
            >
              {option.text || option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
