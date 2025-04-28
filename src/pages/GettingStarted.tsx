import { CodeBlock } from "@/components";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const GettingStarted = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Getting Started | Re-Use-it!";
  }, []);
  return (
    <div className="min-h-screen">
      {/* Title */}
      <h1 className="px-8 pt-10 text-4xl font-medium">
        Welcome to{" "}
        <span className="font-exo font-semibold text-nowrap italic">
          Re-use-it!
        </span>
      </h1>

      <p className="px-8 pt-14 leading-8">
        Welcome to{" "}
        <span className="font-exo mr-1 text-justify text-lg font-medium italic">
          Re-use-it!
        </span>{" "}
        Your one-stop destination for reusable and customizable React
        components, along with handy code snippets to speed up your development
        process. Built with TypeScript for reliability and TailwindCSS for
        seamless styling, Re-use-it empowers you to craft dynamic, efficient,
        and stunning web applications with ease. Get started now and make your
        development process faster, simpler, and more fun!
      </p>

      <h2 className="mt-20 px-8 text-2xl">
        Get Started with{" "}
        <span className="font-exo font-semibold italic">Re-use-it!</span> in a
        few simple steps!
      </h2>

      <ol className="mt-10 ml-10 list-outside list-decimal px-5 pb-10 text-justify leading-10">
        <div className="pr-10">
          <li>Start by creating a new React project.</li>
          <li>
            Install the required packages. Check{" "}
            <Link
              to="/components/packages"
              className="text-blue-600 dark:text-blue-400"
            >
              Packages
            </Link>{" "}
            for detailed instructions.
          </li>
          <li>
            In the <code>src</code> folder, create a <code>lib</code> folder.
            Inside the <code>lib</code> folder, create a <code>utils.ts</code>{" "}
            file and add the following code:
            <CodeBlock
              code={`import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}
              language="tsx"
            />
          </li>
          <li>
            Set up TailwindCSS with custom styles. Visit{" "}
            <Link
              to="/components/tailwind-configuration"
              className="text-blue-600 dark:text-blue-400"
            >
              Tailwind Configuration
            </Link>{" "}
            for guidance.
          </li>
          <li>
            Copy the DarkModeContext file and wrap your root (App) component
            with the DarkModeProvider. For detailed instructions, check{" "}
            <Link
              to="/components/darkmode"
              className="text-blue-600 dark:text-blue-400"
            >
              Dark Mode Context
            </Link>
            .
          </li>
          <li>
            <ol>
              <li>
                {" "}
                Use the re-use-it CLI to download the required component.
              </li>
              <p className="py-5 text-lg font-semibold">OR</p>

              <li>Choose the component you need and copy its code.</li>
              <li>
                Create a new file and paste the code to include the component.
              </li>
              <li>
                That's it! You're ready to use the component in your project.
              </li>
            </ol>
          </li>
        </div>
      </ol>
    </div>
  );
};

export default GettingStarted;
