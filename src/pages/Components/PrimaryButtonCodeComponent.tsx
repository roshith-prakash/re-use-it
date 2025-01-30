import { useEffect } from "react";
import { CodeBlock, PrimaryButton } from "../../components";

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

const usingCode = `
import PrimaryButton  from "./PrimaryButton";

const App = () => {
  return(
    <PrimaryButton text="Primary Button" onClick={()=>{console.log("Button Clicked")}}/>
    )
}`;

const PrimaryButtonCodeComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Primary Button | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Primary Button</h1>
      <h2 className="mt-8 py-5 text-center">
        A button styled for primary actions, meant to grab the user's attention.
      </h2>
      <div className="flex flex-wrap justify-center gap-8 py-10">
        <PrimaryButton text="Primary Button" />
        <PrimaryButton
          text="Primary Button"
          disabled
          disabledText="Disabled Primary Button"
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

      <h3 className="py-2 pl-1 italic">PrimaryButton.tsx</h3>
      <CodeBlock code={PrimaryButtonCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default PrimaryButtonCodeComponent;
