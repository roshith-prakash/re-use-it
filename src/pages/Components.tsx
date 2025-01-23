import { useState } from "react";
import { ErrorAccordion, PrimaryButton, SecondaryButton } from "../components";
import { ContextValue, useDarkMode } from "../context/DarkModeContext";

function Components() {
  const { isDarkMode, toggleDarkMode } = useDarkMode() as ContextValue;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen w-screen dark:bg-black/90">
      <h1 className="py-10 text-center text-3xl dark:text-white">
        Roshith's Component Library {isDarkMode ? "(Dark Mode)" : ""}
      </h1>
      <button
        onClick={toggleDarkMode}
        className="w-fit cursor-pointer rounded border-2 p-2 dark:text-white"
      >
        Toggle Dark Mode
      </button>

      {/* Components */}
      <div className="grid grid-cols-2 gap-y-10 p-10 dark:text-white">
        <span>Primary Button : </span>
        <PrimaryButton text="Primary Button" />

        <span>Secondary Button : </span>
        <SecondaryButton text="Secondary Button" />

        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          className="w-fit cursor-pointer rounded border-2 p-2 dark:text-white"
        >
          {isOpen ? "Close" : "Open"} Error Accordion
        </button>
        <ErrorAccordion text="This is an error message." isOpen={isOpen} />
      </div>
    </div>
  );
}

export default Components;
