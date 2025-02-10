import { useEffect, useState } from "react";
import { CodeBlock, SecondaryButton } from "../../components";

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
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Secondary Button | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Secondary Button</h1>
      <h2 className="py-5">
        A button styled for secondary actions or less prominent use cases.
      </h2>
      <div className="mx-auto my-20 flex flex-wrap items-center justify-center gap-8 rounded-xl px-5 py-10 shadow-lg md:w-fit md:min-w-lg md:px-20 dark:shadow dark:shadow-white">
        <SecondaryButton text="Secondary Button" />
        <SecondaryButton
          text="Secondary Button"
          disabled
          disabledText="Disabled Secondary Button"
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
              Copy and save the component as SecondaryButton.tsx
            </h3>
            <CodeBlock code={SecondaryButtonCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock
              code={`npx reuseit add SecondaryButton`}
              language="bash"
            />
          </div>
        )}
      </div>

      {/* Props */}
      <div className="py-14">
        <p className="text-2xl font-semibold">Props</p>
        <ul className="mt-8 list-disc py-2 pl-8 leading-8">
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
      <CodeBlock code={SecondaryButtonCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default SecondaryButtonCodeComponent;
