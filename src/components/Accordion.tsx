import { cn } from "@/lib/utils";
import { ReactNode, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type AccordionProps = {
  text: string | ReactNode;
  children: ReactNode;
  className?: string;
};

const Accordion = ({ text, children, className }: AccordionProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("w-full", className)}>
      <button
        className="flex w-full items-center justify-between py-3"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="accordion-content"
      >
        {text}
        <IoIosArrowDown
          className={cn(
            "mt-2 mr-1 text-2xl transition-transform duration-500",
            isOpen && "rotate-180",
          )}
        />
      </button>
      <div
        ref={contentRef}
        id="accordion-content"
        className={cn(
          "overflow-hidden transition-[max-height] duration-500 ease-in-out",
          isOpen ? "max-h-[9999px]" : "max-h-0",
        )}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
