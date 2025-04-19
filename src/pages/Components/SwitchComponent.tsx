import { useEffect, useState } from "react";
import { CodeBlock, Switch } from "@/components";

const SwitchCode = `import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

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
      className={cn(
        \`bg-cta mx-2 h-7 w-12 cursor-pointer rounded-full border-3 p-1 \${!checked && "bg-gray-500"} transition-all \${className}\`,
      )}
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

    const [switchState, setSwitchState] = useState<boolean>(false);

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
    );
}
`;

const SwitchComponent = () => {
  const [switchState, setSwitchState] = useState<boolean>(false);
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

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

      {/* Installation Section */}
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
              Copy and save the component as Switch.tsx
            </h3>
            <CodeBlock code={SwitchCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock code={`npx reuseit add Switch`} language="bash" />
          </div>
        )}
      </div>

      {/* Props Documentation */}
      <div className="py-14">
        <p className="text-2xl font-semibold">Props</p>
        <ul className="mt-8 list-disc py-2 pl-8 leading-8">
          <li>
            <b>checked (boolean, required):</b> To specify if the switch is
            already toggled.
          </li>
          <li>
            <b>onChange (function, required):</b> Function to be executed when
            the switch is clicked.
          </li>
          <li>
            <b>className (string, optional):</b> To override the styles for the
            switch.
          </li>
        </ul>
      </div>

      {/* Usage Section */}
      <p className="text-2xl font-semibold">Usage</p>
      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default SwitchComponent;
