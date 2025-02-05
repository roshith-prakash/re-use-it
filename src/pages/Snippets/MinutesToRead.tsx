import { useEffect } from "react";
import { CodeBlock } from "../../components";

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

const usingCode = `import { getMinsToRead } from "./getMinsToRead

const App = () =>{
  const testString = "Some Long String"

  return <p>{getMinsToRead(testString)} minute read.</p>
}
`;
const MinutesToRead = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Minutes to Read | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Minutes to Read</h1>
      <h2 className="py-5">
        Gets the number of minutes required to read the content.
      </h2>

      <h3 className="mt-10 py-5 pl-1 italic">getMinsToRead.tsx</h3>
      <CodeBlock code={minutesToReadCode} language="typescript" />

      <h3 className="mt-10 py-5 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default MinutesToRead;
