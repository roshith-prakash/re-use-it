import { useEffect, useState } from "react";
import { CodeBlock, Loader } from "@/components";

const LoaderCode = `const Loader = ({ className }: { className?: string }) => {
  return (
    <div
      className={\`h-8 animate-pulse rounded-lg bg-gray-300 dark:bg-gray-500 \${className}\`}
    ></div>
  );
};

export default Loader;
`;

const usingCode = `import  Loader  from "./Loader";

const App = () => {

  return (
  <>
    <Loader />
  </> );
}`;

const LoaderCodeComponent = () => {
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Loader | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Loading Placeholder</h1>
      <h2 className="py-5">A skeleton placeholder for loading states.</h2>
      <div className="mx-auto my-20 flex flex-wrap items-center justify-center rounded-xl px-5 py-10 shadow-lg md:w-fit md:px-20 dark:shadow dark:shadow-white">
        <Loader className="w-52 max-w-[90%]" />
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
              Copy and save the component as Loader.tsx
            </h3>
            <CodeBlock code={LoaderCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock code={`npx reuseit add Loader`} language="bash" />
          </div>
        )}
      </div>

      {/* Props */}
      <div className="py-14">
        <p className="text-2xl font-semibold">Props</p>
        <ul className="mt-8 list-disc py-2 pl-8 leading-8">
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

export default LoaderCodeComponent;
