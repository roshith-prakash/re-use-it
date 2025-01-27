import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";

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

const usingCode = ``;

const ShuffleArray = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Shuffle Array | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Shuffle Array</h1>
      <h2 className="py-5 text-center">
        Shuffles elements inside of an array.
      </h2>

      <h3 className="py-10 pl-1 italic">shuffleArray.ts</h3>
      <CopyBlock
        text={shuffleCode}
        language="typescript"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />

      <h3 className="mt-8 pl-1 italic">App.tsx</h3>
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

export default ShuffleArray;
