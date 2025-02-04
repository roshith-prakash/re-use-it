import { ReactNode, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({
  text,
  children,
  className,
}: {
  text: string;
  children: ReactNode;
  className?: string;
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={`border-secondarydarkbg/50 dark:border-grey/50 max-w-xl border-b-2 ${className}`}
    >
      <button
        className="flex w-full cursor-pointer items-center justify-between py-3"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {text}
        <IoIosArrowDown
          className={`${isOpen && "rotate-180"} transition-all duration-300`}
        />
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
