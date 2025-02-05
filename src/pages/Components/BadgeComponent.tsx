import { useEffect } from "react";
import { CodeBlock, Badge } from "../../components";

const BadgeCode = `const Badge = ({ text, className }: { text: string; className?: string }) => {
  return (
    <p className={\`bg-cta w-fit rounded-lg px-4 py-1 text-white \${className}\`}>
      {text}
    </p>
  );
};

export default Badge;

`;

const usingCode = `import  Badge  from "./Badge";


const App = () => {

  return (
  <>
   <Badge text={"ReUseIt"} />
  </> );
}`;

const BadgeComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Badge | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Badge</h1>
      <h2 className="py-5">Badge component to display data.</h2>
      <div className="mx-auto my-20 flex flex-wrap items-center justify-center gap-8 rounded-xl px-5 py-10 shadow-lg md:w-fit md:px-20 dark:shadow dark:shadow-white">
        <Badge text={"ReUseIt"} />
      </div>

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
            <b>text (string, required):</b> The text to be displayed in the
            Badge.
          </li>

          <li>
            {" "}
            <b>className (string, optional):</b> To override default styles.
          </li>
        </ul>
      </div>

      <h3 className="py-2 pl-1 italic">Badge.tsx</h3>
      <CodeBlock code={BadgeCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default BadgeComponent;
