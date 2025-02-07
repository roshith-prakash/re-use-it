import { useEffect } from "react";
import { CodeBlock, Select } from "../../components";

const SelectCode = `import { useState } from "react";
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

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange(value);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div
      role="select"
      className={\`bg-white relative min-w-3xs cursor-pointer rounded-xl border-2 px-5 py-2 dark:bg-transparent \${className}\`}
      onClick={() => setIsOpen((prev) => !prev)}
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
          className="dark:bg-secondarydarkbg bg-white absolute top-full left-0 mt-2 w-full overflow-hidden rounded-xl border-2 shadow-lg"
          onClick={(e) => e.stopPropagation()} // Prevent toggling when clicking inside the dropdown
        >
          {options.map((option) => (
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

export default Select;
`;

const usingCode = `import  Select  from "./Select";
import { useState } from "react"

const App = () => {
const [selectedOption,setSelectedOption] = useState<string>("")

  return (
  <>
     <Select
          options={[
            { text: "Option A", value: "A" },
            { text: "Option B", value: "B" },
            { text: "Option C", value: "C" },
            { text: "Option D", value: "D" },
            { text: "Option E", value: "E" },
            { text: "Option F", value: "F" },
          ]}
          placeholder="Select your option!"
          onChange={(value) => setSelectedOption(value)}
        />
  </> );
}`;

const SelectComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Select | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Select</h1>
      <h2 className="py-5">A styled select component.</h2>
      <div className="mx-auto my-20 flex flex-wrap items-center justify-center gap-8 rounded-xl px-5 py-10 shadow-lg md:w-fit md:min-w-lg md:px-20 dark:shadow dark:shadow-white">
        <Select
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

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
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

      <h3 className="py-2 pl-1 italic">Select.tsx</h3>
      <CodeBlock code={SelectCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default SelectComponent;
