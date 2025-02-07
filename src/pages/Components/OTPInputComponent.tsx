import { useEffect, useState } from "react";
import { CodeBlock, OTPInput } from "../../components";

const InputCode = `import React from "react";

const OTPInput = ({
  length = 4,
  value = "",
  onChange,
  className,
}: {
  length: 4 | 6; // Supports either 4 or 6 characters
  value: string; // The full OTP value
  onChange: (otp: string) => void; // Callback for changes
  className?: string;
}) => {
  const handleChange = (inputValue: string, index: number) => {
    const updatedOtp = value.split("");
    updatedOtp[index] = inputValue;
    const newOtp = updatedOtp.join("");
    onChange(newOtp);

    // Focus on the next input field
    if (inputValue && index < length - 1) {
      const nextInput = document.getElementById(\`otp-input-\${index + 1}\`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace") {
      const updatedOtp = value.split("");
      if (value[index]) {
        updatedOtp[index] = ""; // Clear the current value
        onChange(updatedOtp.join(""));
      } else if (index > 0) {
        const prevInput = document.getElementById(\`otp-input-\${index - 1}\`);
        prevInput?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData
      .getData("text")
      .slice(0, length)
      .split("");

    const updatedOtp = Array(length)
      .fill("")
      .map((_, i) => pasteData[i] || "");

    onChange(updatedOtp.join(""));
  };

  return (
    <div className={\`flex gap-2\`}>
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          id={\`otp-input-\${index}\`}
          type="text"
          maxLength={1}
          value={value[index] || ""}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className={\`h-8 w-8 rounded-md border-2 border-black/50 text-center text-sm md:h-10 md:w-10 md:text-lg dark:border-white/50 \${className}\`}
        />
      ))}
    </div>
  );
};

export default OTPInput;`;

const usingCode = `import  OTPInput  from "./OTPInput";
import { useState } from "react"

const App = () => {
 const [otp, setOtp] = useState<string>("".padEnd(6, ""));

  return (
  <>
     <OTPInput
          length={6} 
          value={otp} 
          onChange={(value) => setOtp(value)} 
          className="justify-center"
        />
  </> );
}`;

const OTPInputComponent = () => {
  const [otp, setOtp] = useState<string>("".padEnd(6, ""));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "OTP Input | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">OTP Input</h1>
      <h2 className="py-5">A styled OTP Input component.</h2>
      <div className="mx-auto my-20 flex flex-col items-center gap-8 rounded-xl px-5 py-10 shadow-lg md:w-fit md:min-w-lg md:px-20 dark:shadow dark:shadow-white">
        <OTPInput
          length={6}
          value={otp}
          onChange={(value) => setOtp(value)}
          className="justify-center"
        />
      </div>

      {/* Props */}
      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            <b>length (number, required):</b> The length of the OTP (supports 4
            or 6 characters).
          </li>
          <li>
            <b>value (string, required):</b> The full OTP value to be displayed
            in the input fields.
          </li>
          <li>
            <b>onChange (function, required):</b> Callback function to execute
            when the OTP value changes. It receives the updated OTP string as an
            argument.
          </li>
          <li>
            <b>className (string, optional):</b> To override default styles.
          </li>
        </ul>
      </div>

      <h3 className="py-2 pl-1 italic">OTPInput.tsx</h3>
      <CodeBlock code={InputCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default OTPInputComponent;
