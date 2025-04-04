import { useState, useRef, ReactNode } from "react";
import { IoIosArrowDown } from "react-icons/io";

// Single Accordion Item Component
const AccordionItem = ({
  id,
  title,
  children,
  isOpen,
  toggle,
}: {
  id: number;
  title: string;
  children: ReactNode;
  isOpen: boolean;
  toggle: (id: number) => void;
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="border-secondarydarkbg/50 dark:border-grey/50 overflow-hidden border-b-2">
      <button
        onClick={() => toggle(id)}
        className="flex w-full cursor-pointer items-center justify-between py-3 text-left"
      >
        {title}
        <IoIosArrowDown
          className={`transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-[99999px]" : "max-h-0"
        }`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="py-4">{children}</div>
      </div>
    </div>
  );
};

// Accordion Group Component
const AccordionGroup = ({
  items,
}: {
  items: { id: number; title: string; content: string }[];
}) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenAccordion((prev) => (prev === id ? null : id)); // Close if already open, otherwise open the clicked accordion
  };

  return (
    <div className="w-full space-y-4">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          isOpen={openAccordion === item.id}
          toggle={toggle}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default AccordionGroup;
