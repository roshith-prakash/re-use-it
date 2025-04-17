import { useEffect, useState } from "react";
import { CodeBlock, PasswordInput } from "@/components";

const PasswordInputCode = `import { ChangeEventHandler, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

// Styled Password input field.
const PasswordInput = ({
  value,
  placeholder,
  onChange,
  disabled,
  className,
}: {
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  className?: string;
}) => {
  // State to convert field to text or password field
  const [display, setDisplay] = useState(false);
  return (
    // Relative div
    <div className="relative w-full">
      {/* Input field - can be text or password field depending on state */}
      <input
        disabled={disabled}
        type={display ? "text" : "password"}
        className={\`dark:placeholder:text-grey/50 placeholder:text-darkbg/50 text-md border-darkbg/50 mt-3 min-h-8 w-full rounded-lg border-2 bg-transparent px-4 py-2 pr-10 placeholder:text-sm focus:outline-none dark:border-white/50 \${className}\`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {/* Absolutely positioned icon - acts as buttons to change field type */}
      {display ? (
        <FaEye
          className="absolute top-6.5 right-4 cursor-pointer"
          onClick={() => {
            if (!disabled) setDisplay((prev) => !prev);
          }}
        />
      ) : (
        <FaEyeSlash
          className="absolute top-6.5 right-4 cursor-pointer"
          onClick={() => {
            if (!disabled) setDisplay((prev) => !prev);
          }}
        />
      )}
    </div>
  );
};

export default PasswordInput;
`;

const usingCode = `import  PasswordInput  from "./PasswordInput";
import { useState } from "react"

const App = () => {
const [password,setPassword] = useState<string>("")

  return (
  <>
    <PasswordInput value={password} placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
  </> );
}`;

const PasswordInputCodeComponent = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Password Input | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Password Input</h1>
      <h2 className="py-5">A styled Password Input component.</h2>

      {/* Component */}
      <div className="mx-auto my-20 flex flex-col items-center gap-8 rounded-xl px-5 py-10 shadow-lg md:w-fit md:min-w-lg md:px-20 dark:shadow dark:shadow-white">
        <div className="w-72">
          <PasswordInput
            value={inputValue}
            placeholder="Enter your password"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
      </div>

      {/* Installation */}
      <div>
        <p className="mt-10 text-2xl font-semibold">Installation</p>
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
              Copy and save the component as PasswordInput.tsx
            </h3>
            <CodeBlock code={PasswordInputCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock code={`npx reuseit add PasswordInput`} language="bash" />
          </div>
        )}
      </div>

      {/* Props */}
      <div className="py-14">
        <p className="text-2xl font-semibold">Props</p>
        <ul className="mt-8 list-disc py-2 pl-8 leading-8">
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

      {/* Usage */}
      <p className="text-2xl font-semibold">Usage</p>
      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default PasswordInputCodeComponent;
