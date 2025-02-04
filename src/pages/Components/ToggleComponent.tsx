import { useEffect, useState } from "react";
import { CodeBlock, Toggle } from "../../components";

const SwitchCode = `const Toggle = ({
  isToggled,
  toggle,
  disabled,
  text,
  className,
}: {
  isToggled: boolean;
  toggle: () => void;
  text: string;
  className?: string;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={toggle}
      disabled={disabled}
      className={\`\${isToggled ? "bg-grey dark:bg-white/14" : "bg-transparent"} cursor-pointer rounded px-3 py-2 text-lg transition-colors \${className}\`}
    >
      {text}
    </button>
  );
};

export default Toggle;
`;

const usingCode = `import Toggle from './Toggle';
import {useState} from "react"

const App = () => {

    const [switchState,setSwitchState]=useState<boolean>(false)

    return (
      <>
       <div className="flex items-center justify-center">
            <Toggle
                isToggled={switchState}
                text="B"
                toggle={() => {
                  setSwitchState((prev) => !prev);
                }}
            />
        </div>
      </>
  )
}

`;

const ToggleComponent = () => {
  const [switchState1, setSwitchState1] = useState<boolean>(false);
  const [switchState2, setSwitchState2] = useState<boolean>(false);
  const [switchState3, setSwitchState3] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Switch | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Toggle</h1>
      <h2 className="py-5">A styled Toggle button.</h2>
      <div className="mx-auto my-20 flex flex-wrap items-center justify-center gap-5 rounded-xl px-5 py-10 shadow-lg md:w-fit md:min-w-lg md:px-20 dark:shadow dark:shadow-white">
        <Toggle
          text="B"
          isToggled={switchState1}
          toggle={() => {
            setSwitchState1((prev) => !prev);
          }}
        />
        <Toggle
          text="I"
          isToggled={switchState2}
          toggle={() => {
            setSwitchState2((prev) => !prev);
          }}
          className="italic"
        />
        <Toggle
          text="U"
          isToggled={switchState3}
          toggle={() => {
            setSwitchState3((prev) => !prev);
          }}
          className="underline"
        />
      </div>

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
            <b>isToggled (boolean, required):</b> To specify if the button is
            toggled.
          </li>
          <li>
            {" "}
            <b>toggle (function, required):</b> Function to toggle the state.
          </li>
          <li>
            {" "}
            <b>text (string, required):</b> Text to be displayed inside the
            Toggle button.
          </li>
          <li>
            {" "}
            <b>disabled (string, boolean):</b> To disable the Toggle button.
          </li>
          <li>
            {" "}
            <b>classname (string, optional):</b> To override the styles for the
            checkbox.
          </li>
        </ul>
      </div>

      <h3>Switch.tsx</h3>
      <CodeBlock code={SwitchCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default ToggleComponent;
