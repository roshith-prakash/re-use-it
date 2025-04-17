import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { RxCross2 } from "react-icons/rx";

const Drawer = ({
  isOpen,
  children,
  onClose,
  direction = "right",
  className,
}: {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  direction?: "top" | "bottom" | "left" | "right";
  className?: string;
}) => {
  const overlayClasses = isOpen
    ? "fixed inset-0 bg-black opacity-50 z-40"
    : "hidden";

  const drawerClasses = `fixed bg-white dark:bg-darkbg shadow-lg overflow-y-auto p-4 transform transition-transform duration-300 ease-in-out z-50 ${
    direction === "left"
      ? "h-full left-0 top-0"
      : direction === "right"
        ? "h-full right-0 top-0"
        : direction === "top"
          ? "top-0 left-0 w-full"
          : direction === "bottom"
            ? "bottom-0 left-0 w-full"
            : "right-0 top-0"
  } ${
    isOpen
      ? "translate-y-0"
      : direction === "top"
        ? "-translate-y-full"
        : direction === "bottom"
          ? "translate-y-full"
          : direction === "left"
            ? "-translate-x-full"
            : "translate-x-full"
  }`;

  return (
    <>
      <div className={overlayClasses} />
      <div className={cn(`${drawerClasses} ${className}`)}>
        <button
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
        >
          <RxCross2 className="text-lg" />
        </button>
        {children}
      </div>
    </>
  );
};

export default Drawer;
