import { useEffect } from "react";
import { CodeBlock } from "../components";

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

const usingCode = `import { DarkModeProvider } from "./DarkModeContext";

const App = () =>{
  return (
    <DarkModeProvider>
        // Wrap all components with DarkModeProvider.
    </DarkModeProvider>
  )
}
`;

const usingDarkMode = `import { useDarkMode, ContextValue } from "./DarkModeContext";

const Home = () =>{
  const { isDarkMode, toggleDarkMode } = useDarkMode() as ContextValue;
  return (
  <>
    <p>
        {isDarkMode ? "Dark Mode" : "Light Mode"}
    </p>
    <button onClick={toggleDarkMode}>Toggle Theme</button>
  </>
  )
}
`;

const DarkModeFile = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Dark Mode Context | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Dark Mode Context</h1>
      <h2 className="py-5">
        Context to manage the dark mode state of the application.
      </h2>

      <h3 className="py-10 pl-1 italic">DarkModeContext.tsx</h3>
      <CodeBlock code={DarkModeContextCode} language="tsx" />

      <h3 className="py-10 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />

      <h3 className="py-10 pl-1 italic">Home.tsx</h3>
      <CodeBlock code={usingDarkMode} language="tsx" />
    </div>
  );
};

export default DarkModeFile;
