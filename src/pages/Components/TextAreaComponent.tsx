import { useEffect, useState } from "react";
import { CodeBlock, TextArea } from "@/components";

const InputCode = `import { ChangeEventHandler } from "react";

const TextArea = ({
  value,
  onChange,
  placeholder = "Enter your text",
  className,
}: {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  className?: string;
}) => {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      className={\`h-36 w-full rounded-lg border-2 bg-transparent p-4 focus:outline-none \${className}\`}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;`;

const usingCode = `import  TextArea  from "./TextArea";
import { useState } from "react"

const App = () => {
const [textInput,setTextInput] = useState<string>("")

  return (
  <>
    <TextArea value={textInput} placeholder="Enter your text" onChange={(e)=>setTextInput(e.target.value)}/>
  </> );
}`;

const TextAreaComponent = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "TextArea | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">TextArea</h1>
      <h2 className="py-5">A styled Textarea component.</h2>

      {/* Component */}
      <div className="mx-auto my-20 flex flex-wrap items-center justify-center rounded-xl px-5 py-10 shadow-lg md:w-fit md:min-w-lg md:px-20 dark:shadow dark:shadow-white">
        <TextArea
          value={inputValue}
          placeholder="Enter your text"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className="max-w-lg"
        />
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
              Copy and save the component as TextArea.tsx
            </h3>
            <CodeBlock code={InputCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock code={`npx reuseit add TextArea`} language="bash" />
          </div>
        )}
      </div>

      {/* Props */}
      <div className="py-14">
        <p className="text-2xl font-semibold">Props</p>
        <ul className="mt-8 list-disc py-2 pl-8 leading-8">
          <li>
            {" "}
            <b>value (string, required):</b> The value in the textarea element.
          </li>
          <li>
            {" "}
            <b>onChange (function, required):</b> The function to be executed
            when the value in the textarea is changed.
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

      {/* Usage */}
      <p className="text-2xl font-semibold">Usage</p>
      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default TextAreaComponent;
