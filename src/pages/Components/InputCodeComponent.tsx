import { useEffect, useState } from "react";
import { CodeBlock, Input } from "../../components";

const InputCode = `import { ChangeEventHandler } from "react";

// Styled Text input
const Input = ({
  value,
  placeholder,
  onChange,
  className = "",
  disabled,
}: {
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  disabled?: boolean;
}) => {
  return (
    <input
      type="text"
      disabled={disabled}
      className={\`dark:placeholder:text-grey/50 placeholder:text-darkbg/50 text-md border-darkbg/50 mt-3 min-h-8 w-full rounded-lg border-2 bg-transparent px-4 py-2 placeholder:text-sm focus:outline-none dark:border-white/50 \${className}\`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
`;

const usingCode = `import  Input  from "./Input";
import { useState } from "react"

const App = () => {
const [textInput,setTextInput] = useState<string>("")

  return (
  <>
    <Input value={textInput} placeholder="Enter your text" onChange={(e)=>setTextInput(e.target.value)}/>
  </> );
}`;

const InputCodeComponent = () => {
  const [inputValue, setInputValue] = useState<string>("");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Input | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Text Input</h1>
      <h2 className="py-5">A styled Text Input component.</h2>
      <div className="mx-auto my-20 flex flex-col items-center gap-8 rounded-xl px-5 py-10 shadow-lg md:w-fit md:min-w-lg md:px-20 dark:shadow dark:shadow-white">
        <Input
          value={inputValue}
          placeholder="Enter your text"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
            <b>value (string, required):</b> The value in the input element.
          </li>
          <li>
            {" "}
            <b>onChange (function, required):</b> The function to be executed
            when the value in the input is changed.
          </li>
          <li>
            {" "}
            <b>placeholder (function, optional):</b> The placeholder value shown
            when no value is present.
          </li>
          <li>
            {" "}
            <b>disabled (boolean, optional):</b> To specify if the input is
            disabled.
          </li>
          <li>
            {" "}
            <b>className (string, optional):</b> To override default styles.
          </li>
        </ul>
      </div>

      <h3 className="py-2 pl-1 italic">Input.tsx</h3>
      <CodeBlock code={InputCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default InputCodeComponent;
