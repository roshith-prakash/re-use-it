import { useEffect, useState } from "react";
import { CodeBlock } from "@/components";
import { Card } from "@/components";

const CardCode = `import { MouseEventHandler, ReactNode } from "react";
// Please check import paths
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const Card = ({
  imageSrc,
  imageAlt,
  primaryButtonText,
  primaryButtonClickHandler,
  secondaryButtonText,
  secondaryButtonClickHandler,
  title,
  subtitle,
  className,
}: {
  imageSrc?: string;
  imageAlt?: string;
  primaryButtonText: string | ReactNode;
  primaryButtonClickHandler?: MouseEventHandler<HTMLButtonElement>;
  secondaryButtonText: string | ReactNode;
  secondaryButtonClickHandler?: MouseEventHandler<HTMLButtonElement>;
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={\`dark:bg-secondarydarkbg w-80 overflow-hidden rounded-xl border-[1px] border-white bg-white shadow-2xl transition-all duration-200 hover:scale-105 dark:shadow-white/32 \${className}\`}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-auto w-full object-contain"
        />
      )}
      <div className="flex flex-col gap-y-8 px-4 py-8">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-md">{subtitle}</p>
        <div className="flex flex-wrap justify-between gap-4">
          <PrimaryButton
            onClick={primaryButtonClickHandler}
            text={primaryButtonText}
            className="w-full md:flex-1"
          />
          <SecondaryButton
            onClick={secondaryButtonClickHandler}
            text={secondaryButtonText}
            className="w-full md:flex-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;`;

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
