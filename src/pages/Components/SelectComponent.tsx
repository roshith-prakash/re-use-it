import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";
import { Option, Select } from "../../components";

const SelectCode = `import { ChangeEventHandler, ReactNode } from "react";

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
      className={\`flex-1 rounded-xl border-2 px-5 py-2 md:flex-none \${className}\`}
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
`;

const usingCode = `import  PasswordInput  from "./PasswordInput";
import { useState } from "react"

const App = () => {
const [selectedOption,setSelectedOption] = useState<string>("")

  return (
  <>
    <Select
        onChange={(e) => setSelectedOption(e.target.value)}
    >
        <Option value={"A"} text="Option A" />
        <Option value={"B"} text="Option B" />
        <Option value={"C"} text="Option C" />
    </Select>
  </> );
}`;

const SelectComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Select</h1>
      <h2 className="mt-8 py-5 text-center">
        A styled select input component.
      </h2>
      <div className="flex flex-col items-center gap-8 py-10">
        <Select
          onChange={(e) => console.log("Select Value : ", e.target.value)}
        >
          <Option value={"A"} text="Option A" />
          <Option value={"B"} text="Option B" />
          <Option value={"C"} text="Option C" />
        </Select>
      </div>

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
            <b>onChange (function, required):</b> The function to be executed
            when the value in the input is selected.
          </li>
          <li>
            {" "}
            <b>className (function, optional):</b> To override default styles.
          </li>
        </ul>
      </div>

      <h3 className="py-2 pl-1 italic">Select.tsx</h3>
      <CopyBlock
        text={SelectCode}
        language="tsx"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CopyBlock
        text={usingCode}
        language="tsx"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />
    </div>
  );
};

export default SelectComponent;
