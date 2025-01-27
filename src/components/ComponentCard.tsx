// THIS IS NOT A COMPONENT. THIS IS USED ON THE WEBSITE TO DISPLAY COMPONENTS.

import { Link } from "react-router-dom";
import SecondaryButton from "./SecondaryButton";
import { ReactNode } from "react";

const ComponentCard = ({
  path,
  title,
  children,
}: {
  path: string;
  title: string;
  children?: ReactNode;
}) => {
  return (
    <div className="dark:bg-secondarydarkbg flex w-80 flex-col gap-y-8 rounded-xl border-[1px] border-white bg-white p-8 shadow-2xl transition-all duration-200 hover:scale-105 dark:shadow-white/32">
      <p className="text-center text-xl font-semibold">{title}</p>

      <div className="flex flex-1 flex-col justify-center gap-y-5">
        {children}
      </div>
      <Link to={path} className="pt-2">
        <SecondaryButton
          text="View Code"
          className="w-full rounded-lg hover:font-medium"
        />
      </Link>
    </div>
  );
};

export default ComponentCard;
