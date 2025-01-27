import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";
import { Loader } from "../../components";

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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Loader | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Loading Placeholder</h1>
      <h2 className="mt-8 py-5 text-center">
        A skeleton-like placeholder for loading states.
      </h2>
      <div className="flex flex-wrap justify-center gap-8 py-10">
        <Loader className="w-52 max-w-[90%]" />
      </div>

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
            <b>className (string, optional):</b> To override default styles.
          </li>
        </ul>
      </div>

      <h1 className="py-2 pl-1 italic">Loader.tsx</h1>
      <CopyBlock
        text={LoaderCode}
        language="tsx"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CopyBlock
        text={usingCode}
        language="tsx"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />
    </div>
  );
};

export default LoaderCodeComponent;
