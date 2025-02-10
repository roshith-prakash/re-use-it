import { useEffect, useState } from "react";
import { Checkbox, CodeBlock } from "../../components";

const CheckboxCode = `import { ChangeEventHandler, useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";

const Checkbox = ({
  value,
  name,
  id,
  onChange,
  checked: controlledChecked = false,
  className = "",
  disabled,
}: {
  value?: string;
  name?: string;
  id?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  className?: string;
  disabled?: boolean;
}) => {
  const [checked, setChecked] = useState<boolean>(controlledChecked);

  // Sync with controlled checked prop
  useEffect(() => {
    setChecked(controlledChecked);
  }, [controlledChecked]);

  const handleChange = () => {
    const newCheckedState = !checked;
    setChecked(newCheckedState);
    // Trigger the onChange function and pass the checkbox value and new checked state
    onChange({
      target: { value, checked: newCheckedState },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="inline-block">
      <input
        id={id}
        disabled={disabled}
        type="checkbox"
        className="hidden"
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <button
        disabled={disabled}
        role="checkbox"
        onClick={handleChange}
        className={\`border-darkbg disabled:text-darkbg disabled:bg-grey dark:border-darkmodetext mx-2 h-5 w-5 cursor-pointer rounded border-2 disabled:cursor-default \${checked ? "bg-cta text-white" : "bg-transparent"} \${className}\`}
      >
        {checked && <TiTick />}
      </button>
    </div>
  );
};

export default Checkbox;`;

const usingCode = `import Checkbox from './Checkbox';

const App = () => {

    return (
      <>
        <div className="flex items-center justify-center">
            <Checkbox
                onChange={(e) => {
                  console.log(e.target.checked);
                }}
                checked
            />
            <label>Check this</label>
        </div>
      </>
  )
}

`;

const CheckboxComponent = () => {
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Checkbox | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Checkbox</h1>
      <h2 className="py-5">A customized, styled Checkbox component.</h2>
      <div className="mx-auto my-20 flex flex-wrap items-center justify-center rounded-xl px-5 py-10 shadow-lg md:w-fit md:px-20 dark:shadow dark:shadow-white">
        <Checkbox
          onChange={(e) => {
            console.log(e.target.checked);
          }}
          checked
        />
        <label>Check this!</label>
      </div>

      {/* Installation */}
      <div>
        <p className="text-2xl font-semibold">Installation</p>
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
              Copy and save the component as Checkbox.tsx
            </h3>
            <CodeBlock code={CheckboxCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock code={`npx reuseit add Checkbox`} language="bash" />
          </div>
        )}
      </div>

      {/* Props */}
      <div className="py-14">
        <p className="text-2xl font-semibold">Props</p>
        <ul className="mt-8 list-disc py-2 pl-8 leading-8">
          <li>
            {" "}
            <b>value (string , optional):</b> Value for the checkbox.{" "}
          </li>
          <li>
            {" "}
            <b> name (string, optional):</b> Name for the checkbox.
          </li>
          <li>
            {" "}
            <b>id (string, optional):</b> Id for the checkbox.{" "}
          </li>
          <li>
            {" "}
            <b>onChange (function, required):</b> Function to be executed when
            the checkbox is clicked.
          </li>
          <li>
            {" "}
            <b>checked (boolean, optional):</b> To specify if the checkbox is
            already checked.
          </li>
          <li>
            {" "}
            <b>disabled (boolean, optional):</b> To specify if the checkbox is
            disabled.
          </li>
          <li>
            {" "}
            <b>classname (string, optional):</b> To override the styles for the
            checkbox.
          </li>
        </ul>
      </div>

      {/* Usage */}
      <p className="text-2xl font-semibold">Usage</p>
      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default CheckboxComponent;
