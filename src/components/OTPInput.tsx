import { ClipboardEvent, KeyboardEvent } from "react";

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
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      const updatedOtp = value.split("");
      if (value[index]) {
        updatedOtp[index] = ""; // Clear the current value
        onChange(updatedOtp.join(""));
      } else if (index > 0) {
        const prevInput = document.getElementById(`otp-input-${index - 1}`);
        prevInput?.focus();
      }
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
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
    <div className={`flex gap-2`}>
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          maxLength={1}
          value={value[index] || ""}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className={`h-8 w-8 rounded-md border-2 border-black/50 text-center text-sm md:h-10 md:w-10 md:text-lg dark:border-white/50 ${className}`}
        />
      ))}
    </div>
  );
};

export default OTPInput;
