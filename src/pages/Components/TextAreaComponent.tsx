import { useEffect, useState } from "react";
import { CodeBlock, TextArea } from "../../components";

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "TextArea | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">TextArea</h1>
      <h2 className="mt-8 py-5 text-center">A styled text area component.</h2>
      <div className="flex flex-col items-center gap-8 py-10">
        <TextArea
          value={inputValue}
          placeholder="Enter your text"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className="max-w-lg"
        />
      </div>

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
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

      <h3 className="py-2 pl-1 italic">TextArea.tsx</h3>
      <CodeBlock code={InputCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default TextAreaComponent;
