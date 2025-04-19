import { useEffect, useState } from "react";
import { CodeBlock, Alert } from "@/components";
import { RxDoubleArrowRight } from "react-icons/rx";

const AlertCode = `import { cn } from "@/lib/utils";
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
  if (type === "custom") return <div className={className}>{children}</div>;

  const alert = alertTypes[type];

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={cn(
        \`flex w-full items-center gap-4 rounded-lg p-4 shadow-lg \${alert.color} \${className}\`,
      )}
    >
      <span className="text-2xl" aria-hidden="true">
        {alert.icon}
      </span>
      <div className="space-y-1">
        <p className="text-md font-medium">{title}</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default Alert;
`;

const usingCode = `import React from 'react';
import Alert from './Alert'
import { RxDoubleArrowRight } from "react-icons/rx";;

const App = () => {
  return (
    <div className="space-y-4 p-10">
      <Alert type="info" title="Heads up!" message="This is an info alert." />
        <Alert
          type="success"
          title="Success!"
          message="This is a success alert."
        />
        <Alert
          type="warning"
          title="Warning!"
          message="This is a warning alert."
        />
        <Alert type="error" title="Error!" message="This is an error alert." />
        <Alert type="custom">
          <div
            className={"dark:border-grey flex w-full items-center gap-4 rounded-lg p-4 shadow-lg dark:border-1"}
          >
            <span className="text-2xl">
              <RxDoubleArrowRight />
            </span>
            <div className="space-y-1">
              <p className="text-md font-medium">Custom Alert!</p>
              <p className="text-sm">This is a custom alert.</p>
            </div>
          </div>
        </Alert>
    </div>
  );
};

export default App;`;

const AlertComponent = () => {
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Alert | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Alert</h1>
      <h2 className="py-5">An inline Alert component to notify the user.</h2>

      {/* Component */}
      <div className="mx-auto my-20 flex flex-col items-center gap-8 rounded-xl px-5 py-10 shadow-lg md:w-fit md:min-w-lg md:px-20 dark:shadow dark:shadow-white">
        <Alert type="info" title="Heads up!" message="This is an info alert." />
        <Alert
          type="success"
          title="Success!"
          message="This is a success alert."
        />
        <Alert
          type="warning"
          title="Warning!"
          message="This is a warning alert."
        />
        <Alert type="error" title="Error!" message="This is an error alert." />
        <Alert type="custom">
          <div
            className={`dark:border-grey flex w-full items-center gap-4 rounded-lg p-4 shadow-lg dark:border-1`}
          >
            <span className="text-2xl">
              <RxDoubleArrowRight />
            </span>
            <div className="space-y-1">
              <p className="text-md font-medium">Custom Alert!</p>
              <p className="text-sm">This is a custom alert.</p>
            </div>
          </div>
        </Alert>
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
              Copy and save the component as Alert.tsx
            </h3>
            <CodeBlock code={AlertCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock code={`npx reuseit add Alert`} language="bash" />
          </div>
        )}
      </div>

      {/* Props */}
      <div className="py-14">
        <p className="text-2xl font-semibold">Props</p>
        <ul className="mt-8 list-disc py-2 pl-8 leading-8">
          <li>
            <b>type (string, required):</b> The type of alert to display.
            Options are <code>info</code>, <code>success</code>,{" "}
            <code>warning</code>, <code>error</code>, or <code>custom</code>. If{" "}
            <code>custom</code> is selected, the <b>children</b> prop will be
            rendered instead.
          </li>
          <li>
            <b>title (string, optional):</b> The title to display inside the
            alert. Defaults to <code>"Default title"</code>.
          </li>
          <li>
            <b>message (string, optional):</b> The message to display inside the
            alert. Defaults to <code>"Add a message to notify the user!"</code>.
          </li>
          <li>
            <b>children (element, optional):</b> Custom content to render inside
            the alert. Only used when <code>type</code> is set to{" "}
            <code>custom</code>.
          </li>
          <li>
            <b>className (string, optional):</b> Additional CSS classes to
            customize the styling of the alert.
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

export default AlertComponent;
