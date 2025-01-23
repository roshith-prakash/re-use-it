import { CopyBlock, xt256 } from "react-code-blocks";
import { useEffect } from "react";

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

const ErrorAccordionCodeComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="py-2 pl-1 italic">ErrorAccordion.tsx</h1>
      <CopyBlock
        text={ErrorAccordionCode}
        language="typescript"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />
    </div>
  );
};

export default ErrorAccordionCodeComponent;
