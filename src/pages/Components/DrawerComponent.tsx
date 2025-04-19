import { useEffect, useState } from "react";
import { CodeBlock, Drawer, SecondaryButton } from "@/components";

const DrawerCode = `import { cn } from "@/lib/utils";
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

  const drawerClasses = \`fixed bg-white dark:bg-darkbg shadow-lg overflow-y-auto p-4 transform transition-transform duration-300 ease-in-out z-50 \${
    direction === "left"
      ? "h-full left-0 top-0"
      : direction === "right"
        ? "h-full right-0 top-0"
        : direction === "top"
          ? "top-0 left-0 w-full"
          : direction === "bottom"
            ? "bottom-0 left-0 w-full"
            : "right-0 top-0"
  } \${
    isOpen
      ? "translate-y-0"
      : direction === "top"
        ? "-translate-y-full"
        : direction === "bottom"
          ? "translate-y-full"
          : direction === "left"
            ? "-translate-x-full"
            : "translate-x-full"
  }\`;

  return (
    <>
      <div className={overlayClasses} />
      <div className={cn(\`\${drawerClasses} \${className}\`)}>
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
`;

const usingCode = `import Drawer from './Drawer';
import { useState } from "react"

const App = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);
  
    return (
        <>
            <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <h2 className="mb-2 text-xl font-bold">Drawer Content</h2>
                <p>This content is inside the drawer.</p>
            </Drawer>
            <button onClick={()=>setDrawerOpen(true)}>Open Drawer</button>
      </>
  )
}

`;

const DrawerComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Drawer | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <h2 className="mb-2 text-xl font-bold">Drawer Content</h2>
        <p>This content is inside the drawer.</p>
      </Drawer>

      <h1 className="text-4xl font-medium">Drawer</h1>
      <h2 className="py-5">
        A drawer component which pops out from the specified direction.
      </h2>

      {/* Element */}
      <div className="flex justify-center py-8">
        <SecondaryButton
          text="Open Drawer"
          onClick={() => setDrawerOpen(true)}
        />
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
              Copy and save the component as Drawer.tsx
            </h3>
            <CodeBlock code={DrawerCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock code={`npx reuseit add Drawer`} language="bash" />
          </div>
        )}
      </div>

      {/* Props */}
      <div className="py-14">
        <p className="text-2xl font-semibold">Props</p>
        <ul className="mt-8 list-disc py-2 pl-8 leading-8">
          <li>
            {" "}
            <b>isOpen ( boolean , required):</b> Boolean state which specifies
            whether the drawer should be opened.{" "}
          </li>
          <li>
            {" "}
            <b> onClose (function, required):</b> Function to be executed when
            the drawer is closed.
          </li>
          <li>
            {" "}
            <b>children (string or element, required):</b> Content to be
            displayed inside the Drawer.{" "}
          </li>
          <li>
            {" "}
            <b>direction (string, optional):</b> Specify the direction from
            which the drawer should open. Default value set to "right".
          </li>
          <li>
            {" "}
            <b>className (string, optional):</b> To override the styles for the
            Drawer.
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

export default DrawerComponent;
