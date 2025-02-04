import { useEffect, useState } from "react";
import { CodeBlock, ProgressBar } from "../../components";

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

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
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

      <h3>Progress.tsx</h3>
      <CodeBlock code={ProgressCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default ProgressComponent;
