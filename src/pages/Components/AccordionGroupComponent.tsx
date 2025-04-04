import { useEffect, useState } from "react";
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
    <div className="border-secondarydarkbg/50 dark:border-grey/50 overflow-hidden border-b-2">
      <button
        onClick={() => toggle(id)}
        className="flex w-full cursor-pointer items-center justify-between py-3 text-left"
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
          isOpen ? "max-h-[99999px]" : "max-h-0"
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

export default AccordionGroup;`;

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
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Accordion Group | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Accordion Group</h1>
      <h2 className="py-5">
        An accordion group component that houses multiple accordions.
      </h2>
      <div className="mx-auto my-20 flex flex-col items-center gap-8 rounded-xl px-5 py-10 shadow-lg md:w-fit md:min-w-lg md:px-20 dark:shadow dark:shadow-white">
        <AccordionGroup items={accordionData} />
      </div>

      {/* Installation */}
      <div>
        <p className="text-2xl font-semibold">Installation</p>
        <div className="my-10 flex gap-5">
          <button
            onClick={() => setCodeWindow(false)}
            className={`${!codeWindow ? "bg-grey dark:bg-white/14" : "bg-transparent"} cursor-pointer rounded px-4 py-2 transition-all`}
          >
            CLI
          </button>
          <button
            onClick={() => setCodeWindow(true)}
            className={`${codeWindow ? "bg-grey dark:bg-white/14" : "bg-transparent"} cursor-pointer rounded px-4 py-2 transition-all`}
          >
            Manual
          </button>
        </div>
        {codeWindow ? (
          <div>
            <h3 className="py-2 pl-1 italic">
              Copy and save the component as AccordionGroup.tsx
            </h3>
            <CodeBlock code={AccordionGroupCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock
              code={`npx reuseit add AccordionGroup`}
              language="bash"
            />
          </div>
        )}
      </div>

      {/* Props */}
      <div className="py-14">
        <p className="text-2xl font-semibold">Props</p>
        <ul className="mt-8 list-disc py-2 pl-8 leading-8">
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

      {/* Usage */}
      <p className="text-2xl font-semibold">Usage</p>
      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default AccordionGroupComponent;
