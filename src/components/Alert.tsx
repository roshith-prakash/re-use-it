import { ReactNode } from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineCheckCircle,
  AiOutlineWarning,
  AiOutlineCloseCircle,
} from "react-icons/ai";

const alertTypes = {
  info: {
    icon: <AiOutlineInfoCircle />,
    color: "bg-blue-50 text-blue-800 dark:bg-blue-800/75 dark:text-blue-50",
  },
  success: {
    icon: <AiOutlineCheckCircle />,
    color: "bg-green-50 text-green-800 dark:bg-green-800/75 dark:text-green-50",
  },
  warning: {
    icon: <AiOutlineWarning />,
    color: "bg-amber-50 text-amber-800 dark:bg-amber-800/75 dark:text-amber-50",
  },
  error: {
    icon: <AiOutlineCloseCircle />,
    color: "bg-red-50 text-red-800 dark:bg-red-800/75 dark:text-red-50",
  },
};

const Alert = ({
  type = "info",
  title = "Default title",
  message = "Add a message to notify the user!",
  children,
  className,
}: {
  type: "info" | "success" | "warning" | "error" | "custom";
  title?: string;
  message?: string;
  children?: ReactNode;
  className?: string;
}) => {
  if (type == "custom") return children;

  const alert = alertTypes[type];

  return (
    <div
      className={`flex w-full items-center gap-4 rounded-lg p-4 shadow-lg ${alert.color} ${className}`}
    >
      <span className="text-2xl">{alert.icon}</span>
      <div className="space-y-1">
        <p className="text-md font-medium">{title}</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default Alert;
