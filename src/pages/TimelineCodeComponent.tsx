import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";

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
      <h1 className="py-2 pl-1 italic">Timeline.tsx</h1>
      <CopyBlock
        text={TimelineCode}
        language="typescript"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />
    </div>
  );
};

export default TimelineCodeComponent;
