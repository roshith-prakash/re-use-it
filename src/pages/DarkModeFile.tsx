import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";

const DarkModeContextCode = `import { createContext, useContext, useEffect, useState } from "react";

export type ContextValue = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

// Create the context
const DarkModeContext = createContext<null | ContextValue>(null);

// Provide the context
export const DarkModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Load initial theme from localStorage or default to light mode
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to use the context
// eslint-disable-next-line react-refresh/only-export-components
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};`;

const DarkModeFile = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Dark Mode Context</h1>
      <h2 className="py-5 text-center">
        Context to manage the dark mode state of the application.
      </h2>

      <h3 className="py-10 pl-1 italic">DarkModeContext.tsx</h3>
      <CopyBlock
        text={DarkModeContextCode}
        language="tsx"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />
    </div>
  );
};

export default DarkModeFile;
