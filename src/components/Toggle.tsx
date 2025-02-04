const Toggle = ({
  isToggled,
  toggle,
  disabled,
  text,
  className,
}: {
  isToggled: boolean;
  toggle: () => void;
  text: string;
  className?: string;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={toggle}
      disabled={disabled}
      className={`${isToggled ? "bg-grey dark:bg-white/14" : "bg-transparent"} cursor-pointer rounded px-3 py-2 text-lg transition-colors ${className}`}
    >
      {text}
    </button>
  );
};

export default Toggle;
