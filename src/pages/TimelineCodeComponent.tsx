import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";
import { Timeline } from "../components";

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

const TimelineCodeComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Timeline</h1>
      <h2 className="mt-8 py-5 text-center">
        A vertical timeline component for displaying chronological events or
        steps.
      </h2>
      <div className="flex flex-col items-center gap-8 py-10">
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

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
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

      <h3 className="py-2 pl-1 italic">Timeline.tsx</h3>
      <CopyBlock
        text={TimelineCode}
        language="tsx"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />
    </div>
  );
};

export default TimelineCodeComponent;
