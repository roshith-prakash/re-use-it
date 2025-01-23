import { useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

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
      className={\`placeholder:text-greyText mt-3 min-h-8 w-full border-b-2 bg-transparent py-1.5 focus:outline-none dark:placeholder:text-white/40 \${className}\`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;`;

const InputCodeComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="py-2 pl-1 italic">Input.tsx</h1>
      <CopyBlock
        text={InputCode}
        language="typescript"
        showLineNumbers={true}
        theme={dracula}
        codeBlock
      />
    </div>
  );
};

export default InputCodeComponent;
