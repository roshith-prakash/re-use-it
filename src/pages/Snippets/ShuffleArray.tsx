import { useEffect } from "react";
import { CodeBlock } from "@/components";

const shuffleCode = `// Function to swap position of elements inside the array
export function shuffleArray(array: any[]) {
  // Traversing array in reverse order
  for (let i = array.length - 1; i >= 0; i--) {
    // Generating a random index
    const j = Math.floor(Math.random() * (i + 1));
    // Swapping values at the indexes
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
`;

const usingCode = `import { shuffleArray } from "./shuffleArray";

let arr = ["A","B","C","D"];

shuffleArray(arr);

console.log(arr);`;

const ShuffleArray = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Shuffle Array | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Shuffle Array</h1>
      <h2 className="py-5">Shuffles elements inside an array.</h2>

      <div className="mt-10">
        <h3 className="py-2 pl-1 italic">
          Add the snippet using the Re-use-it! CLI.
        </h3>
        <CodeBlock
          code={`npx reuseit add-snippet shuffleArray`}
          language="bash"
        />
      </div>

      <p className="py-10 text-lg font-semibold">OR</p>

      <h3 className="mt-10 py-5 pl-1 italic">shuffleArray.ts</h3>
      <CodeBlock code={shuffleCode} language="typescript" />

      <h3 className="mt-10 py-5 pl-1 italic">route.ts</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default ShuffleArray;
