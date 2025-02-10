import { useEffect, useState } from "react";
import { CodeBlock, Combobox } from "../../components";
import { Link } from "react-router-dom";

const ComboboxCode = `import { useEffect, useMemo, useRef, useState } from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import useDebounce from "/useDebounce";

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
      className={\`relative min-w-3xs cursor-pointer rounded-xl border-2 bg-white px-5 py-2 dark:bg-transparent \${className}\`}
      onClick={toggleDropdown}
    >
      <div className="flex items-center justify-between gap-x-5">
        <p>
          {selected
            ? options.find((opt) => opt.value === selected)?.text || selected
            : placeholder}
        </p>
        <IoIosArrowDown
          className={\`\${isOpen ? "rotate-180" : "rotate-0"} transition-transform\`}
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
              className={\`dark:hover:bg-darkbg px-4 py-2 hover:bg-gray-100 \${optionClassName}\`}
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
`;

const usingCode = `import  Combobox  from "./Combobox";
import { useState } from "react"

const App = () => {
const [selectedOption,setSelectedOption] = useState<string>("")

  return (
  <>
      <Combobox
          options={[
            { text: "Option A", value: "A" },
            { text: "Option B", value: "B" },
            { text: "Option C", value: "C" },
            { text: "Option D", value: "D" },
            { text: "Option E", value: "E" },
            { text: "Option F", value: "F" },
          ]}
          placeholder="Select your option!"
          onChange={(e) => console.log("Select Value : ", e)}
        />
  </> );
}`;

const ComboboxComponent = () => {
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Combobox | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Combobox</h1>
      <h2 className="py-5">
        A styled select component with searching capability.
      </h2>
      <h3 className="border-grey mt-2 w-fit rounded px-4 py-2 shadow dark:shadow-white">
        Note : Uses the useDebounce Hook. Get the code{" "}
        <Link
          className="text-blue-600 dark:text-blue-400"
          to="/code-snippets/use-debounce"
        >
          here!
        </Link>
        .
      </h3>

      <div className="mx-auto my-20 flex flex-wrap items-center justify-center gap-8 rounded-xl px-5 py-10 shadow-lg md:w-fit md:min-w-lg md:px-20 dark:shadow dark:shadow-white">
        <Combobox
          options={[
            { text: "Option A", value: "A" },
            { text: "Option B", value: "B" },
            { text: "Option C", value: "C" },
            { text: "Option D", value: "D" },
            { text: "Option E", value: "E" },
            { text: "Option F", value: "F" },
          ]}
          placeholder="Select your option!"
          onChange={(e) => console.log("Select Value : ", e)}
        />
      </div>

      {/* Installation */}
      <div>
        <p className="text-2xl font-semibold">Installation</p>
        <div className="my-10 flex gap-5">
          <button
            onClick={() => setCodeWindow(false)}
            className={`${!codeWindow ? "bg-grey dark:bg-white/14" : "bg-transparent"} cursor-pointer rounded px-4 py-2 transition-all`}
          >
            CLI
          </button>
          <button
            onClick={() => setCodeWindow(true)}
            className={`${codeWindow ? "bg-grey dark:bg-white/14" : "bg-transparent"} cursor-pointer rounded px-4 py-2 transition-all`}
          >
            Manual
          </button>
        </div>
        {codeWindow ? (
          <div>
            <h3 className="py-2 pl-1 italic">
              Copy and save the component as Combobox.tsx
            </h3>
            <CodeBlock code={ComboboxCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock
              code={`npx reuseit add useDebounce
npx reuseit add Combobox`}
              language="bash"
            />
          </div>
        )}
      </div>

      {/* Props */}
      <div className="py-14">
        <p className="text-2xl font-semibold">Props</p>
        <ul className="mt-8 list-disc py-2 pl-8 leading-8">
          <li>
            {" "}
            <b>
              options (Array {"{value:'SomeValue',text:'SomeText'}"}, required):
            </b>{" "}
            The options to be displayed in the select component.
          </li>

          <li>
            {" "}
            <b>onChange (function, required):</b> The function to be executed
            when the value in the input is selected.
          </li>
          <li>
            {" "}
            <b>placeholder (string, optional):</b> The placeholder text to be
            displayed when an option is not selected.
          </li>
          <li>
            {" "}
            <b>className (string, optional):</b> To override default styles of
            the select component.
          </li>
          <li>
            {" "}
            <b>optionClassName (string, optional):</b> To override default
            styles of the options.
          </li>
        </ul>
      </div>

      {/* Usage */}
      <p className="text-2xl font-semibold">Usage</p>
      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default ComboboxComponent;
