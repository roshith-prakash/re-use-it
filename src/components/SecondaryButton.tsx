import { MouseEventHandler, ReactNode } from "react";

const SecondaryButton = ({
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
      className={`border-cta text-cta hover:bg-cta dark:hover:text-darkbg w-fit min-w-14 cursor-pointer rounded-full border-2 px-5 py-2 transition-all hover:scale-105 hover:text-white dark:border-white dark:text-white dark:hover:bg-white ${className}`}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
