import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";
import { SecondaryButton } from "../components";

const SecondaryButtonCode = `import { MouseEventHandler, ReactNode } from "react";

const SecondaryButton = ({
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
      className={\`border-cta text-cta hover:bg-cta dark:hover:text-darkbg w-fit min-w-14 rounded-full border-2 px-5 py-2 transition-all hover:scale-105 hover:text-white disabled:border-gray-600 disabled:text-gray-600 disabled:hover:scale-100 disabled:hover:bg-transparent dark:border-white dark:text-white dark:hover:bg-white dark:disabled:border-gray-400 dark:disabled:text-gray-400 \${!disabled && "cursor-pointer"} \${className}\`}
    >
      {disabled ? (disabledText.length > 0 ? disabledText : text) : text}
    </button>
  );
};

export default SecondaryButton;`;

const usingCode = `
import  SecondaryButton  from "./SecondaryButton";

const App = () => {
  return(
    <SecondaryButton text="Secondary Button" onClick={()=>{console.log("Button Clicked")}}/>
    )
}`;

const SecondaryButtonCodeComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Secondary Button | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Secondary Button</h1>
      <h2 className="mt-8 py-5 text-center">
        A button styled for secondary actions or less prominent use cases.
      </h2>
      <div className="flex flex-wrap justify-center gap-8 py-10">
        <SecondaryButton text="Secondary Button" />
        <SecondaryButton
          text="Secondary Button"
          disabled
          disabledText="Disabled Secondary Button"
        />
      </div>

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
            <b>text (string or element, required):</b> The text displayed on the
            button.
          </li>
          <li>
            {" "}
            <b>onClick (function, optional):</b> The function to execute on
            click.{" "}
          </li>
          <li>
            {" "}
            <b>className (string, optional):</b> To override default styles.
          </li>
          <li>
            {" "}
            <b>disabled (boolean, optional):</b> Disables the button when true.{" "}
          </li>
          <li>
            {" "}
            <b>disabledText (string, optional):</b> The text to be displayed
            when button is disabled.{" "}
          </li>
        </ul>
      </div>

      <h3>SecondaryButton.tsx</h3>
      <CopyBlock
        text={SecondaryButtonCode}
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

export default SecondaryButtonCodeComponent;
