import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";

const LoaderCode = `const Loader = ({ className }: { className?: string }) => {
  return (
    <div
      className={\`h-8 w-full animate-pulse rounded-lg bg-gray-300 dark:bg-gray-500 \${className}\`}
    ></div>
  );
};

export default Loader;
`;

const LoaderCodeComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="py-2 pl-1 italic">Loader.tsx</h1>
      <CopyBlock
        text={LoaderCode}
        language="typescript"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />
    </div>
  );
};

export default LoaderCodeComponent;
