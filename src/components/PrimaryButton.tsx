import { MouseEventHandler, ReactNode } from "react";

const PrimaryButton = ({
  text,
  onClick,
  className,
}: {
  text: string | ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`border-cta bg-cta hover:bg-hovercta hover:border-hovercta w-fit min-w-14 cursor-pointer rounded-full border-2 px-5 py-2 text-white transition-all hover:scale-105 ${className}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
