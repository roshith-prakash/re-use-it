import { useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const PrimaryButtonCode = `import { MouseEventHandler, ReactNode } from "react";

const PrimaryButton = ({
  text,
  onClick,
  className,
  disabled,
  disabledText = "",
}: {
  text: string | ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  disabledText?: string;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={\`border-cta bg-cta hover:bg-hovercta hover:border-hovercta disable w-fit min-w-14 rounded-full border-2 px-5 py-2 text-white transition-all disabled:border-gray-500 disabled:bg-gray-500 \${!disabled && "cursor-pointer hover:scale-105"} \${className}\`}
    >
      {disabled ? (disabledText.length > 0 ? disabledText : text) : text}
    </button>
  );
};

export default PrimaryButton;`;

const PrimaryButtonCodeComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="py-2 pl-1 italic">PrimaryButton.tsx</h1>
      <CopyBlock
        text={PrimaryButtonCode}
        language="typescript"
        showLineNumbers={true}
        theme={dracula}
        codeBlock
      />
    </div>
  );
};

export default PrimaryButtonCodeComponent;
