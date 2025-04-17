import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Avatar = ({
  imageSrc = "",
  fallBackText,
  className,
  border = false,
  borderClassName = "border-4 border-cta",
}: {
  imageSrc?: string;
  fallBackText?: string;
  className?: string;
  border?: boolean;
  borderClassName?: string;
}) => {
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);

  const checkImage = (imageUrl: string) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsValid(true);
    img.onerror = () => setIsValid(false);
  };

  // Run the check when the component mounts or the URL changes
  useEffect(() => {
    checkImage(imageSrc);
  }, [imageSrc]);

  // Extract first letters of fallBack text
  const extractFirstLetters = (str: string) => {
    const words = str.split(" ");
    return words.length === 1
      ? words[0][0]
      : words[0][0] + words[words.length - 1][0];
  };

  return (
    <div
      className={cn(
        `${
          border &&
          `flex items-center justify-center rounded-full ${borderClassName}`
        } 5 w-fit p-1`,
      )}
    >
      {isValid ? (
        <img
          src={imageSrc}
          alt={fallBackText}
          className={cn(`h-10 w-10 rounded-full ${className}`)}
        />
      ) : fallBackText ? (
        <p
          className={cn(
            `from-darkmodeCTA via-cta to-hovercta flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-lg font-semibold text-white ${className}`,
          )}
        >
          {extractFirstLetters(fallBackText)}
        </p>
      ) : (
        <img
          src={"https://randomuser.me/api/portraits/lego/2.jpg"}
          className={cn(
            `bg-darkbg h-10 w-10 rounded-full object-contain dark:bg-white ${className}`,
          )}
        />
      )}
    </div>
  );
};

export default Avatar;
