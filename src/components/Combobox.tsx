import { useEffect, useMemo, useRef, useState } from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
// Please check import paths
import useDebounce from "../utils/useDebounce";

const Combobox = ({
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
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const [selected, setSelected] = useState<string | null>(null);

  const ref = useRef<HTMLDivElement>(null); // To detect clicks outside the component

  // Memoize the filtered options for better performance
  const displayOptions = useMemo(() => {
    return options.filter((item) =>
      item?.text?.toLowerCase()?.includes(debouncedSearch.toLowerCase()),
    );
  }, [debouncedSearch, options]);

  const handleSelect = (value: string) => {
    if (value !== selected) {
      setSelected(value);
      onChange(value);
    }
    setSearch("");
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
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
      role="combobox"
      className={`relative min-w-3xs cursor-pointer rounded-xl border-2 bg-white px-5 py-2 dark:bg-transparent ${className}`}
      onClick={toggleDropdown}
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
          <div className="border-darkbg/25 relative flex rounded-t-xl border-b-2 py-1">
            <IoIosSearch className="absolute top-1/2 left-2 -translate-y-1/2 text-xl" />
            <input
              value={search}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full py-1 pl-10 outline-none"
            />
          </div>
          {displayOptions.map((option) => (
            <div
              role="option"
              key={option.value}
              className={`dark:hover:bg-darkbg px-4 py-2 hover:bg-gray-100 ${optionClassName}`}
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

export default Combobox;
