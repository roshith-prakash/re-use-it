const ErrorAccordion = ({
  text,
  isOpen,
}: {
  text: string;
  isOpen: boolean;
}) => {
  return (
    <div
      className={`flex items-center overflow-hidden px-5 font-medium ${isOpen ? "text-error h-10" : "text-error/0 h-0"} transition-all duration-300`}
    >
      {text}
    </div>
  );
};

export default ErrorAccordion;
