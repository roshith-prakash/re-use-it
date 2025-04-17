import { useEffect, useState } from "react";
import { CodeBlock, ProgressBar } from "@/components";

const ProgressCode = `const ProgressBar = ({
  currentProgress,
  className,
}: {
  currentProgress: number;
  className?: string;
}) => {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-400">
      <div
        className={\`bg-cta h-full rounded-full transition-all \${className}\`}
        style={{ width: \`\${currentProgress}%\` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
`;

const usingCode = `import ProgressBar from './ProgressBar';

const App = () => {
  
    return (
        <>
           <ProgressBar currentProgress={35} />
      </>
  )
}

`;

const ProgressComponent = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

  useEffect(() => {
    if (currentValue < 100) {
      setTimeout(() => setCurrentValue((prev) => prev + 5), 1000);
    } else {
      setCurrentValue(0);
    }
  }, [currentValue]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Progress Bar | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Progress Bar</h1>
      <h2 className="py-5">
        A sleek, customizable progress bar with smooth animations and modern
        styling.
      </h2>
      <div className="mx-auto my-20 flex flex-wrap items-center justify-center gap-8 rounded-xl px-5 py-10 shadow-lg md:w-fit md:min-w-lg md:px-20 dark:shadow dark:shadow-white">
        <ProgressBar currentProgress={currentValue} />
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
              Copy and save the component as ProgressBar.tsx
            </h3>
            <CodeBlock code={ProgressCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock code={`npx reuseit add ProgressBar`} language="bash" />
          </div>
        )}
      </div>

      {/* Props */}
      <div className="py-14">
        <p className="text-2xl font-semibold">Props</p>
        <ul className="mt-8 list-disc py-2 pl-8 leading-8">
          <li>
            {" "}
            <b>currentProgress ( number , required):</b> The current value of
            the progress bar in percentage.{" "}
          </li>
          <li>
            {" "}
            <b>className (string, optional):</b> To override the styles for the
            Modal.
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

export default ProgressComponent;
