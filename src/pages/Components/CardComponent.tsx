import { useEffect, useState } from "react";
import { CodeBlock } from "@/components";
import { Card } from "@/components";

const CardCode = `import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        \`dark:bg-secondarydarkbg overflow-hidden rounded-xl border-[1px] border-white/25 bg-white p-5 shadow-xl transition-all duration-200 hover:scale-105 \${className}\`,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
`;

const usingCode = `import Card from './Card';

const App = () => {
  return (
      <Card>Lorem Ipsum</Card>
  )
}

`;

const CardComponent = () => {
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Card | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Card</h1>
      <h2 className="py-5">Card component.</h2>
      <div className="flex flex-wrap justify-center gap-8 py-10">
        <Card>
          <div>Lorem Ipsum</div>
        </Card>
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
              Copy and save the component as Card.tsx
            </h3>
            <CodeBlock code={CardCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the components using the Re-use-it! CLI.
            </h3>
            <CodeBlock code={`npx reuseit add Card`} language="bash" />
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

export default CardComponent;
