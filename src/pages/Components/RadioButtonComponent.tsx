import { useEffect, useState } from "react";
import { CodeBlock, RadioButton } from "../../components";

const RadioButtonCode = `import { ChangeEventHandler, useState, useEffect } from "react";

const RadioButton = ({
  value,
  id,
  onChange,
  checked: controlledChecked = false, // Receive checked prop for controlled state
  className = "",
}: {
  value: string;
  id?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean; // External controlled state for checked status
  className?: string;
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
        type="radio"
        className="hidden"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <button
        role="radio"
        onClick={handleChange}
        className={\`mx-2 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 transition-all \${checked ? "border-cta dark:border-darkmodeCTA text-white" : "bg-transparent"} \${className}\`}
      >
        {checked && (
          <div className="bg-cta dark:bg-darkmodeCTA rounded-xl p-1.5 transition-all" />
        )}
      </button>
    </div>
  );
};

export default RadioButton;
`;

const usingCode = `import RadioButton from './RadioButton';
import {useState} from "react"

const App = () => {

    const [selectedOption, setSelectedOption] = useState<string>("option1");

    return (
      <>
          <div className="flex flex-col items-center justify-center gap-5 py-8">
        <div className="flex items-center justify-center">
          <RadioButton
            value="option1"
            checked={selectedOption == "option1"}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
          />
          <label>Option 1</label>
        </div>
        <div className="flex items-center justify-center">
          <RadioButton
            value="option2"
            checked={selectedOption == "option2"}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
          />
          <label>Option 2</label>
        </div>
        <div className="flex items-center justify-center">
          <RadioButton
            value="option3"
            checked={selectedOption == "option3"}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
          />
          <label>Option 3</label>
        </div>
      </div>
      </>
  )
}

`;

const RadioButtonComponent = () => {
  const [selectedOption, setSelectedOption] = useState<string>("option1");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Checkbox | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Radio Button</h1>
      <h2 className="mt-8 py-5 text-center">
        A customizable, styled Radio Button component with Tailwind CSS.
      </h2>

      <div className="flex flex-col items-center justify-center gap-5 py-8">
        <div className="flex items-center justify-center">
          <RadioButton
            value="option1"
            checked={selectedOption == "option1"}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
          />
          <label>Option 1</label>
        </div>
        <div className="flex items-center justify-center">
          <RadioButton
            value="option2"
            checked={selectedOption == "option2"}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
          />
          <label>Option 2</label>
        </div>
        <div className="flex items-center justify-center">
          <RadioButton
            value="option3"
            checked={selectedOption == "option3"}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
          />
          <label>Option 3</label>
        </div>
      </div>

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
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
            <b>classname (string, optional):</b> To override the styles for the
            checkbox.
          </li>
        </ul>
      </div>

      <h3>RadioButton.tsx</h3>
      <CodeBlock code={RadioButtonCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default RadioButtonComponent;
