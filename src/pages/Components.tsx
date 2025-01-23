import { useState } from "react";
import { ErrorAccordion, PrimaryButton, SecondaryButton } from "../components";
import { ContextValue, useDarkMode } from "../context/DarkModeContext";
import { Link } from "react-router-dom";

function Components() {
  const { isDarkMode, toggleDarkMode } = useDarkMode() as ContextValue;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dark:bg-darkbg min-h-screen dark:text-white">
      <h1 className="py-10 text-center text-3xl dark:text-white">
        Roshith's Component Library {isDarkMode ? "(Dark Mode)" : ""}
      </h1>

      <div className="flex justify-center">
        <button
          onClick={toggleDarkMode}
          className="e w-fit cursor-pointer rounded border-2 p-2 dark:text-white"
        >
          Toggle Dark Mode
        </button>
      </div>

      {/* Components */}
      <div className="flex flex-wrap gap-10 p-10">
        <div className="grid grid-cols-1 gap-y-5 rounded-xl border-2 p-8">
          <p>Primary Button : </p>
          <PrimaryButton text="Primary Button" />
          <PrimaryButton disabled text="Disabled Primary Button" />

          <Link to="/primary-button" className="mt-5">
            <button
              className="e w-full cursor-pointer rounded border-2 p-2 dark:text-white"
            >
              View Code
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-y-5 rounded-xl border-2 p-8">
          <p>Secondary Button : </p>
          <SecondaryButton text="Secondary Button" />
          <SecondaryButton disabled text="Disabled Secondary Button" />

          <Link to="/secondary-button" className="mt-5">
            <button
              className="e w-full cursor-pointer rounded border-2 p-2 dark:text-white"
            >
              View Code
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-y-5 rounded-xl border-2 p-8">
          <button
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className="w-full cursor-pointer rounded border-2 p-2 dark:text-white"
          >
            {isOpen ? "Close" : "Open"} Error Accordion
          </button>
          <ErrorAccordion text="This is an error message." isOpen={isOpen} />

          <Link to="/error-accordion" className="mt-5">
            <button
              className="e w-full cursor-pointer rounded border-2 p-2 dark:text-white"
            >
              View Code
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Components;
