import { CopyBlock, xt256 } from "react-code-blocks";
import { useEffect, useState } from "react";
import { ErrorAccordion } from "../../components";

const ErrorAccordionCode = `const ErrorAccordion = ({
  text,
  isOpen,
}: {
  text: string;
  isOpen: boolean;
}) => {
  return (
    <div
      className={\`flex items-center overflow-hidden 
      px-5 font-medium \${isOpen ? "text-error h-10" : "text-error/0 h-0"} 
      transition-all duration-300\`}
    >
      {text}
    </div>
  );
};

export default ErrorAccordion;`;

const usingCode = `import  ErrorAccordion  from "./ErrorAccordion";
import { useState } from "react"

const App = () => {
const [isError,setIsError] = useState(false)

  return (
  <>
    <button onClick={()=>{setIsError((prev)=>!prev)}}>Toggle Error</button>
    <ErrorAccordion text="This is an error." isOpen={isError}/>
  </> );
}`;

const ErrorAccordionCodeComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Error | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Error</h1>
      <h2 className="mt-8 py-5 text-center">
        An accordion component to show error messages.
      </h2>
      <div className="flex flex-col items-center gap-8 py-10">
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          className="w-52 max-w-[90%] cursor-pointer rounded border-2 p-2 dark:text-white"
        >
          {isOpen ? "Hide" : "Show"} Error
        </button>
        <ErrorAccordion text="This is an error." isOpen={isOpen} />
      </div>

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
            <b>text (string, required):</b> The error message to be displayed.
          </li>
          <li>
            {" "}
            <b>isOpen (boolean, required):</b> To show/hide the error message.
          </li>
        </ul>
      </div>

      <h3 className="py-2 pl-1 italic">ErrorAccordion.tsx</h3>
      <CopyBlock
        text={ErrorAccordionCode}
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

export default ErrorAccordionCodeComponent;
