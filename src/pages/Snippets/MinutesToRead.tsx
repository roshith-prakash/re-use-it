import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";

const minutesToReadCode = `// Get the number of words inside the content and divide them to get the number of minutes required to read the post.
export const getMinsToRead = (value: string | undefined) => {
  return Math.ceil(
    String(value)
      .replace(/<(.|\n)*?>/g, "")
      .trim()
      .split(/\\s+/).length / 200
  );
};
`;

const usingCode = ``;

const MinutesToRead = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Minutes to Read | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Minutes To Read</h1>
      <h2 className="py-5 text-center">
        Gets the number of minutes required to read something.
      </h2>

      <h3 className="py-10 pl-1 italic">useDebounce.tsx</h3>
      <CopyBlock
        text={minutesToReadCode}
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

export default MinutesToRead;
