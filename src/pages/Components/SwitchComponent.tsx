import { useEffect, useState } from "react";
import { CodeBlock, Switch } from "../../components";

const SwitchCode = `import { MouseEventHandler } from "react";

const Switch = ({
  checked,
  onChange,
  className,
}: {
  checked: boolean;
  onChange: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}) => {
  return (
    <button
      onClick={onChange}
      className={\`mx-2 h-7 w-12 cursor-pointer rounded-full border-3 p-1 \${checked ? "bg-cta" : "bg-gray-500"} transition-all \${className}\`}
    >
      <div
        className={\`bg-grey h-full w-4 rounded-full transition-all \${checked && "translate-x-[125%]"}\`}
      ></div>
    </button>
  );
};

export default Switch;
`;

const usingCode = `import Switch from './Switch';
import {useState} from "react"

const App = () => {

    const [switchState,setSwitchState]=useState<boolean>(false)

    return (
      <>
       <div className="flex items-center justify-center">
            <Switch
                checked={switchState}
                onChange={() => {
                  setSwitchState((prev) => !prev);
                }}
            />
            <label>Switch state</label>
        </div>
      </>
  )
}

`;

const SwitchComponent = () => {
  const [switchState, setSwitchState] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Switch | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Switch</h1>
      <h2 className="py-5">A customizable, styled Switch component.</h2>
      <div className="mx-auto my-20 flex flex-wrap items-center justify-center rounded-xl px-5 py-10 shadow-lg md:w-fit md:min-w-lg md:px-20 dark:shadow dark:shadow-white">
        <Switch
          checked={switchState}
          onChange={() => {
            setSwitchState((prev) => !prev);
          }}
        />
        <label>Switch state</label>
      </div>

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
            <b>checked (boolean, required):</b> To specify if the checkbox is
            already checked.
          </li>
          <li>
            {" "}
            <b>onChange (function, required):</b> Function to be executed when
            the checkbox is clicked.
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

export default SwitchComponent;
