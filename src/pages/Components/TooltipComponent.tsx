import { useEffect, useState } from "react";
import { CodeBlock, Tooltip } from "@/components";

const TooltipCode = `import { cn } from "@/lib/utils";
import { useState, ReactNode } from "react";

interface TooltipProps {
  text: string;
  displayed?: boolean;
  children: ReactNode;
  className?: string;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip = ({
  text,
  displayed = true,
  children,
  className,
  position = "bottom",
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  const positionStyles: { [key: string]: string } = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 translate-y-2",
    left: "right-full top-1/2 transform -translate-y-1/2 -translate-x-2",
    right: "left-full top-1/2 transform -translate-y-1/2 translate-x-2",
  };

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      {displayed && (
        <div
          className={cn(
            \`absolute z-10 w-max max-w-3xs rounded-lg px-4 py-2 text-center text-sm \${
              visible ? "opacity-100" : "opacity-0"
            } dark:bg-darkbg bg-white shadow-lg transition-all duration-300 \${className} \${
              positionStyles[position]
            }\`,
          )}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
`;

const usingCode = `import  Tooltip  from "./Tooltip";

const App = () => {

  return (
  <>
    <Tooltip text="This is a tooltip.......obviously">
        <div className="rounded-xl border-2 p-3">Hover over me</div>
    </Tooltip>
  </> );
}`;

const TooltipComponent = () => {
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Tooltip | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Tooltip</h1>
      <h2 className="py-5">
        A tooltip component that displays content when hovered over.
      </h2>
      <div className="mx-auto my-20 flex flex-wrap items-center justify-center rounded-xl px-5 py-10 shadow-lg md:w-fit md:min-w-lg md:px-20 dark:shadow dark:shadow-white">
        <Tooltip text="This is a tooltip.......obviously">
          <div className="rounded-xl border-2 p-3">Hover over me</div>
        </Tooltip>
      </div>

      {/* Installation */}
      <div>
        <p className="mt-10 text-2xl font-semibold">Installation</p>
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
              Copy and save the component as Tooltip.tsx
            </h3>
            <CodeBlock code={TooltipCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock code={`npx reuseit add Tooltip`} language="bash" />
          </div>
        )}
      </div>

      {/* Props */}
      <div className="py-14">
        <p className="text-2xl font-semibold">Props</p>
        <ul className="mt-8 list-disc py-2 pl-8 leading-8">
          <li>
            {" "}
            <b>text (string, required):</b> The text to be displayed in the
            tooltip element.
          </li>
          <li>
            {" "}
            <b>children (element, required):</b> The element which the tooltip
            is wrapped around.
          </li>
          <li>
            {" "}
            <b>position (string, optional):</b> The position of the tooltip.
            Choose either top, bottom, left or right.
          </li>
          <li>
            {" "}
            <b>className (string, optional):</b> To override default styles.
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

export default TooltipComponent;
