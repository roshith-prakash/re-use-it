import { useEffect } from "react";
import { CodeBlock, Accordion } from "../../components";

const AccordionCode = `import { ReactNode, useRef, useState } from "react";
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
  const contentRef = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={\`border-secondarydarkbg/50 dark:border-grey/50 max-w-xl border-b-2 \${className}\`}
    >
      <button
        className="flex w-full items-center justify-between py-3"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {text}
        <IoIosArrowDown
          className={\`\${isOpen && "rotate-180"} transition-all duration-700\`}
        />
      </button>
      <div
        ref={contentRef}
        className={\`overflow-hidden transition-[max-height] duration-700 ease-in-out \${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }\`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
`;

const usingCode = `import  Accordion  from "./Accordion";


const App = () => {

  return (
  <>
    <Accordion text="What is Formula 1?">
      <p className="py-4">
            Formula One, commonly abbreviated as F1, is the highest class of
            international racing for open-wheel single-seater formula racing
            cars sanctioned by the Federation Internationale de l'Automobile
            (FIA). The FIA Formula One World Championship has been one of the
            world's premier forms of motorsport since its inaugural running in
            1950 and is often considered to be the pinnacle of motorsport.
      </p>
    </Accordion>
  </> );
}`;

const AccordionCodeComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Accordion | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Accordion</h1>
      <h2 className="mt-8 py-5 text-center">
        An accordion component that collapses and expands to show data.
      </h2>
      <div className="flex flex-col items-center gap-8 py-10">
        <Accordion text="What is Formula 1?">
          <p className="py-4">
            Formula One, commonly abbreviated as F1, is the highest class of
            international racing for open-wheel single-seater formula racing
            cars sanctioned by the Federation Internationale de l'Automobile
            (FIA). The FIA Formula One World Championship has been one of the
            world's premier forms of motorsport since its inaugural running in
            1950 and is often considered to be the pinnacle of motorsport.
          </p>
        </Accordion>
      </div>

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
            <b>text (string, required):</b> The text to be displayed on the
            Accordion Button.
          </li>
          <li>
            <b>children (element, required):</b> The content to be displayed in
            the Accordion.
          </li>
          <li>
            {" "}
            <b>className (string, optional):</b> To override default styles.
          </li>
        </ul>
      </div>

      <h3 className="py-2 pl-1 italic">Accordion.tsx</h3>
      <CodeBlock code={AccordionCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default AccordionCodeComponent;
