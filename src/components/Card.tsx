import { MouseEventHandler, ReactNode } from "react";
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
      className={`dark:bg-secondarydarkbg w-80 overflow-hidden rounded-xl border-[1px] border-white bg-white shadow-2xl transition-all duration-200 hover:scale-105 dark:shadow-white/32 ${className}`}
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

export default Card;
