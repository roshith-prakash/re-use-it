import { useEffect, useState } from "react";
import { Timeline, CodeBlock } from "../../components";

const TimelineCode = `import { ReactNode } from "react";
import { FaCaretDown } from "react-icons/fa6";

const Timeline = ({
  isLast,
  isFilled,
  children,
}: {
  isLast: boolean;
  isFilled: boolean;
  children: ReactNode;
}) => {
  return (
    <div className="flex gap-x-5">
      {/* Timeline element */}
      <div className="flex flex-col items-center">
        <div
          className={\`border-hovercta \${isFilled && "bg-hovercta/90"} rounded-full border-4 p-4\`}
        />
        {!isLast && (
          <>
            <div className="border-hovercta h-full w-[1px] border-2" />
            <FaCaretDown className="h-10" />
          </>
        )}
      </div>
      {/* Content Div */}
      <div>{children}</div>
    </div>
  );
};

export default Timeline;
`;

const usingCode = `import Timeline  from "./Timeline";

const App = () => {
  return (
        <div>
          {["Event A", "Event B", "Event C"].map((item, index) => {
            return (
              <Timeline isFilled={index != 2} isLast={index == 2} key={item}>
                <p className="pt-1.5">{item}</p>
              </Timeline>
            );
          })}
        </div>
  )

}`;

const TimelineCodeComponent = () => {
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Timeline | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Timeline</h1>
      <h2 className="py-5">
        A vertical timeline component for displaying chronological events or
        steps.
      </h2>
      <div className="mx-auto my-20 flex flex-wrap items-center justify-center rounded-xl px-5 py-10 shadow-lg md:w-fit md:min-w-lg md:px-20 dark:shadow dark:shadow-white">
        <div>
          {["Event A", "Event B", "Event C"].map((item, index) => {
            return (
              <Timeline isFilled={index != 2} isLast={index == 2} key={item}>
                <p className="pt-1.5">{item}</p>
              </Timeline>
            );
          })}
        </div>
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
              Copy and save the component as Timeline.tsx
            </h3>
            <CodeBlock code={TimelineCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock code={`npx reuseit add Timeline`} language="bash" />
          </div>
        )}
      </div>

      {/* Props */}
      <div className="py-14">
        <p className="text-2xl font-semibold">Props</p>
        <ul className="mt-8 list-disc py-2 pl-8 leading-8">
          <li>
            {" "}
            <b>isFilled (boolean, required ):</b> If the timeline element should
            be filled (to depict events that have already occured.)
          </li>
          <li>
            {" "}
            <b>isLast (boolean, required):</b> If the element is the last
            element in the timeline.
          </li>
          <li>
            {" "}
            <b>children (element, required):</b> The content to be shown for
            each timeline element.
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

export default TimelineCodeComponent;
