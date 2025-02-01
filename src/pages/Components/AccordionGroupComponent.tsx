import { useEffect } from "react";
import { CodeBlock, AccordionGroup } from "../../components";
import { accordionData } from "../../data/accordionGroupData";

const AccordionGroupCode = `import { useState, useRef, ReactNode } from "react";
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
    <div className="overflow-hidden border-b-2">
      <button
        onClick={() => toggle(id)}
        className="flex w-full items-center justify-between py-3 text-left"
      >
        {title}
        <IoIosArrowDown
          className={\`transition-transform duration-300 ease-out \${
            isOpen ? "rotate-180" : "rotate-0"
          }\`}
        />
      </button>
      <div
        ref={contentRef}
        className={\`overflow-hidden transition-[max-height] duration-300 ease-in-out \${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }\`}
        style={{
          maxHeight: isOpen ? \`\${contentRef.current?.scrollHeight}px\` : "0px",
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
    <div className="space-y-4">
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
`;

const usingCode = `import  AccordionGroup  from "./AccordionGroup";

export const accordionData = [
  {
    id: 1,
    title: "Accordion 1",
    content: "This is the content of Accordion 1.",
  },
  {
    id: 2,
    title: "Accordion 2",
    content: "This is the content of Accordion 2.",
  },
  {
    id: 3,
    title: "Accordion 3",
    content: "This is the content of Accordion 3.",
  },
];


const App = () => {

  return (
  <>
    <AccordionGroup items={accordionData}/>
  </> );
}`;

const AccordionGroupComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Accordion | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Accordion Group</h1>
      <h2 className="mt-8 py-5 text-center">
        An accordion group component that houses multiple accordions.
      </h2>
      <div className="flex flex-col items-center gap-8 py-10">
        <AccordionGroup items={accordionData} />
      </div>

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
            <b>
              items (Array {"{id:number;title:string;content:string}"},
              required):
            </b>{" "}
            The data for the accordions to be displayed.
          </li>
        </ul>
      </div>

      <h3 className="py-2 pl-1 italic">AccordionGroup.tsx</h3>
      <CodeBlock code={AccordionGroupCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default AccordionGroupComponent;
