import { useEffect, useState } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";
import { Input } from "../components";

const InputCode = `import { ChangeEventHandler } from "react";

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
      className={\`dark:placeholder:text-grey mt-3 min-h-8 w-full border-b-2 bg-transparent py-1.5 focus:outline-none dark:placeholder:text-white/40 \${className}\`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;`;

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

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Input</h1>
      <h2 className="mt-8 py-5 text-center">A styled text input component.</h2>
      <div className="flex flex-col items-center gap-8 py-10">
        <Input
          value={inputValue}
          placeholder="Enter your text"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className="max-w-60"
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
            <b>className (string, optional):</b> To override default styles.
          </li>
        </ul>
      </div>

      <h3 className="py-2 pl-1 italic">Input.tsx</h3>
      <CopyBlock
        text={InputCode}
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

export default InputCodeComponent;
