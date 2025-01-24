import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";
import { Card } from "../components";

const CardCode = `import { MouseEventHandler, ReactNode } from "react";
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

const CardComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Card</h1>
      <h2 className="mt-8 py-5 text-center">
        A card component with an image, title, subtitle and two buttons.
      </h2>
      <div className="flex flex-wrap justify-center gap-8 py-10">
        <Card
          primaryButtonText="Read Article"
          secondaryButtonText="Share"
          title="Lewis Hamilton Joins Ferrari."
          subtitle="The seven-time world champion has signed a 3-year contract with Ferrari."
        />
      </div>

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
            <b>primaryButtonText (string or element, required):</b> Text to be
            displayed on the Primary Button.{" "}
          </li>
          <li>
            {" "}
            <b>primaryButtonClickHandler (function, optional):</b> Function to
            be executed when the Primary button is clicked.
          </li>
          <li>
            {" "}
            <b>secondaryButtonText (string or element, required):</b> Text to be
            displayed on the Secondary Button.{" "}
          </li>
          <li>
            {" "}
            <b>secondaryButtonClickHandler (function, optional):</b> Function to
            be executed when the Secondary button is clicked.
          </li>
          <li>
            {" "}
            <b>title (string, required):</b> The title text to be displayed on
            the Card.
          </li>
          <li>
            {" "}
            <b>subtitle (string, optional):</b> The subtitle text to be
            displayed on the Card.
          </li>
          <li>
            {" "}
            <b>imageSrc (string, optional):</b> The image to be displayed on the
            card.
          </li>
          <li>
            {" "}
            <b>imageAlt (string, optional):</b> The alternate text to be
            displayed if image can't be loaded.{" "}
          </li>
          <li>
            {" "}
            <b>className (string, optional):</b> To override default styles.
          </li>

          <li>
            {" "}
            <b>disabledText (string, optional):</b> The text to be displayed
            when button is disabled.{" "}
          </li>
        </ul>
      </div>

      <h3>Card.tsx</h3>
      <CopyBlock
        text={CardCode}
        language="tsx"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />
    </div>
  );
};

export default CardComponent;
