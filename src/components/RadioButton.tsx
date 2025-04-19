import { ChangeEventHandler, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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
        className={cn(
          `border-cta dark:border-darkmodeCTA text-white" mx-2 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 transition-all ${!checked && "bg-transparent"} ${className}`,
        )}
      >
        {checked && (
          <div
            className={cn(
              `bg-cta dark:bg-darkmodeCTA rounded-xl p-1.5 transition-all ${
                className
              }`,
            )}
          />
        )}
      </button>
    </div>
  );
};

export default RadioButton;
