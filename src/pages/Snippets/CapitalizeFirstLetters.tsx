const snippetCode = `export const capitalizeFirstLetters = (str: string) => {
  return str
    .split(" ") // Split the string into an array of words
    .map(
      (
        word, // Map over each word
      ) => word.charAt(0).toUpperCase() + word.slice(1), // Capitalize the first character
    )
    .join(" "); // Join the words back into a string
};
`;

import { useEffect } from "react";
import { CodeBlock } from "@/components";

const usingCode = `import { capitalizeFirstLetters } from "./capitalizeFirstLetters"

const App = () => {
  return <p>{capitalizeFirstLetters("oh my god")}.</p>
}
`;

const CapitalizeFirstLetters = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Capitalize First Letters | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Capitalize First letters</h1>
      <h2 className="py-5">
        Capitalizes the first letter of every word in the sentence.
      </h2>

      <div className="mt-10">
        <h3 className="py-2 pl-1 italic">
          Add the snippet using the Re-use-it! CLI.
        </h3>
        <CodeBlock
          code={`npx reuseit add-snippet capitalizeFirstLetters`}
          language="bash"
        />
      </div>

      <p className="py-10 text-lg font-semibold">OR</p>

      <h3 className="mt-10 py-5 pl-1 italic">capitalizeFirstLetters.ts</h3>
      <CodeBlock code={snippetCode} language="typescript" />

      <h3 className="mt-10 py-5 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default CapitalizeFirstLetters;
