import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";

const PasswordInputCode = `import { ChangeEventHandler, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

// Styled Password input field.
const PasswordInput = ({
  value,
  placeholder,
  onChange,
}: {
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  // State to convert field to text or password field
  const [display, setDisplay] = useState(false);
  return (
    // Relative div
    <div className="relative w-full">
      {/* Input field - can be text or password field depending on state */}
      <input
        type={display ? "text" : "password"}
        className="placeholder:text-greyText mt-3 min-h-8 w-full border-b-2 bg-transparent py-2 focus:outline-none dark:placeholder:text-white/40"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {/* Absolutely positioned icon - acts as buttons to change field type */}
      {display ? (
        <FaEye
          className="absolute top-6 right-2 cursor-pointer"
          onClick={() => setDisplay((prev) => !prev)}
        />
      ) : (
        <FaEyeSlash
          className="absolute top-6 right-2 cursor-pointer"
          onClick={() => setDisplay((prev) => !prev)}
        />
      )}
    </div>
  );
};

export default PasswordInput;`;

const PasswordInputCodeComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="py-2 pl-1 italic">PasswordInput.tsx</h1>
      <CopyBlock
        text={PasswordInputCode}
        language="typescript"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />
    </div>
  );
};

export default PasswordInputCodeComponent;
