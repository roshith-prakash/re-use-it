const snippetCode = `export const breakUrlIntoPaths = (url: string) => {
  // Remove the protocol (e.g., 'http://') and domain (e.g., 'localhost:3000')
  const path = url.replace(/^https?:\\/\\/[^/]+/, "");

  // Split the remaining string into parts based on '/'
  const paths = path.split("/").filter(Boolean); // filter(Boolean) removes empty strings

  // Create an array of paths, starting with "/components", etc.
  const fullPaths: string[] = [];

  // Build each path progressively
  paths.reduce((accumulatedPath, part) => {
    const currentPath = accumulatedPath + "/" + part;
    fullPaths.push(currentPath);
    return currentPath;
  }, "");

  return fullPaths;
};
`;

import { useEffect } from "react";
import { CodeBlock } from "../../components";

const usingCode = `import { breakUrlIntoPaths } from "./breakUrlIntoPaths"
  
  const App = () => {

    console.log(breakUrlIntoPaths("/components/accordion"))
    return <p></p>
  }
  `;

const BreakURLIntoPaths = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Break URL Into Paths | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Break URL Into Paths</h1>
      <h2 className="py-5">
        Splits a URL into its path components, progressively constructing and
        returning an array of full paths.
      </h2>

      <div className="mt-10">
        <h3 className="py-2 pl-1 italic">
          Add the snippet using the Re-use-it! CLI.
        </h3>
        <CodeBlock
          code={`npx reuseit add-snippet breakUrlIntoPaths`}
          language="bash"
        />
      </div>

      <p className="py-10 text-lg font-semibold">OR</p>

      <h3 className="mt-10 py-5 pl-1 italic">breakUrlIntoPaths.ts</h3>
      <CodeBlock code={snippetCode} language="typescript" />

      <h3 className="mt-10 py-5 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default BreakURLIntoPaths;
