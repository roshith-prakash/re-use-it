import { useEffect, useState } from "react";
import { CodeBlock, Accordion } from "../../components";

const AccordionCode = `import { ReactNode, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({
  text,
  children,
  className,
}: {
  text: string | ReactNode;
  children: ReactNode;
  className?: string;
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={\`border-secondarydarkbg/50 dark:border-grey/50 w-full \${className}\`}
    >
      <button
        className="flex w-full cursor-pointer items-center justify-between py-3"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {text}
        <IoIosArrowDown
          className={\`\${
            isOpen && "rotate-180"
          } mt-2 mr-6 text-2xl transition-all duration-500\`}
        />
      </button>
      <div
        ref={contentRef}
        className={\`overflow-hidden transition-[max-height] duration-500 ease-in-out \${
          isOpen ? "max-h-[99999px]" : "max-h-0"
        }\`}
        style={{
          maxHeight: isOpen ? \`\${contentRef.current?.scrollHeight}px\` : "0px",
        }}
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
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Accordion | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Accordion</h1>
      <h2 className="py-5">
        An accordion component that collapses and expands to show data.
      </h2>
      {/* Component */}
      <div className="mx-auto my-20 flex flex-col items-center gap-8 rounded-xl px-5 py-10 shadow-lg md:w-fit md:px-20 dark:shadow dark:shadow-white">
        <Accordion text="What is Formula 1?" className="w-full">
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
              Copy and save the component as Accordion.tsx
            </h3>
            <CodeBlock code={AccordionCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock code={`npx reuseit add Accordion`} language="bash" />
          </div>
        )}
      </div>

      {/* Props */}
      <div className="py-14">
        <p className="text-2xl font-semibold">Props</p>
        <ul className="mt-8 list-disc py-2 pl-8 leading-8">
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

      <p className="text-2xl font-semibold">Usage</p>
      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default AccordionCodeComponent;
