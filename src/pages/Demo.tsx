import { CopyBlock, dracula } from "react-code-blocks";

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

const CodeDisplay = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 className="py-2 pl-1 italic">ErrorAccordion.tsx</h1>
      <CopyBlock
        text={ErrorAccordionCode}
        language="typescript"
        showLineNumbers={true}
        theme={dracula}
        codeBlock
      />
    </div>
  );
};

export default CodeDisplay;
