import { useEffect } from "react";
import { CodeBlock, Tooltip } from "../../components";

const TooltipCode = `import { useState, ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
  className?: string;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip = ({
  text,
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

      <div
        className={\`absolute z-10 rounded-lg px-4 py-2 text-left text-sm \${visible ? "opacity-100" : "opacity-0"} dark:bg-darkbg bg-white shadow-lg transition-all duration-300 \${className} \${positionStyles[position]}\`}
      >
        {text}
      </div>
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

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
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

      <h3 className="py-2 pl-1 italic">Tooltip.tsx</h3>
      <CodeBlock code={TooltipCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default TooltipComponent;
