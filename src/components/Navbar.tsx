import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ContextValue, useDarkMode } from "../context/DarkModeContext";
import { IoMoon } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode() as ContextValue;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (link: string) => {
    navigate(link);
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`bg-grey dark:bg-darkbg relative z-2 flex items-center justify-between px-10 py-4 font-sans shadow-xl dark:text-white dark:shadow-md dark:shadow-white/30`}
      >
        {/* Home */}
        <Link
          to="/"
          className={`font-pacifico hover:text-cta dark:hover:text-darkmodeCTA text-2xl transition-all`}
        >
          Re-Use-it!
        </Link>

        {/* LG screen Links */}
        <div className="hidden items-center gap-x-8 text-sm font-medium lg:flex">
          {/* Components */}
          <NavLink
            to="/components"
            className={({ isActive }) =>
              `hover:text-cta dark:hover:text-darkmodeCTA transition-all ${isActive && "text-cta dark:text-darkmodeCTA"}`
            }
          >
            Components
          </NavLink>

          {/* Code Snippets */}
          <NavLink
            to="/code-snippets"
            className={({ isActive }) =>
              `hover:text-cta dark:hover:text-darkmodeCTA transition-all ${isActive && "text-cta dark:text-darkmodeCTA"}`
            }
          >
            Code Snippets
          </NavLink>

          {/* Package JSON */}
          <NavLink
            to="/package-json"
            className={({ isActive }) =>
              `hover:text-cta dark:hover:text-darkmodeCTA transition-all ${isActive && "text-cta dark:text-darkmodeCTA"}`
            }
          >
            Package.json
          </NavLink>

          {/* Tailwind Config */}
          <NavLink
            to="/tailwindconfig"
            className={({ isActive }) =>
              `hover:text-cta dark:hover:text-darkmodeCTA transition-all ${isActive && "text-cta dark:text-darkmodeCTA"}`
            }
          >
            Tailwind Configuration (v3 & v4)
          </NavLink>

          {/* Dark Mode Context */}
          <NavLink
            to="/darkmode"
            className={({ isActive }) =>
              `hover:text-cta dark:hover:text-darkmodeCTA transition-all ${isActive && "text-cta dark:text-darkmodeCTA"}`
            }
          >
            Dark Mode Context
          </NavLink>
        </div>

        {/* Dark Mode Toggle */}
        <button
          aria-label="Change Theme"
          className="hidden cursor-pointer lg:flex"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <IoSunnySharp className="hover:text-darkmodeCTA text-2xl transition-all" />
          ) : (
            <IoMoon className="hover:text-cta text-2xl transition-all" />
          )}
        </button>

        {/* Dark Mode Toggle +  Hamburger Button to open the drawer */}
        <div className="flex items-center gap-x-10 font-medium lg:hidden">
          <button
            className="cursor-pointer"
            aria-label="Change Theme"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <IoSunnySharp className="hover:text-cta text-xl transition-all" />
            ) : (
              <IoMoon className="hover:text-cta text-xl transition-all" />
            )}
          </button>

          <button onClick={() => setOpen(true)} className="cursor-pointer">
            <RxHamburgerMenu className="text-xl" aria-label="Open menu" />
          </button>
        </div>

        {/* Drawer Menu - XS - MD screen */}
        <div
          className={`dark:bg-darkbg fixed top-0 right-0 z-50 h-screen w-full bg-white pb-6 text-center text-xl shadow-md md:text-lg ${
            open ? "translate-x-0" : "translate-x-[100%]"
          } transition-all duration-500`}
          role="dialog"
          aria-modal="true"
          aria-label="Drawer Menu"
        >
          {/* Top Section - Title + X button */}
          <div className="mb-14 flex items-center justify-between px-10 pt-4 lg:px-10">
            <button
              onClick={() => handleSearch("/")}
              className="font-pacifico hover:text-cta dark:hover:text-darkmodeCTA cursor-pointer text-2xl transition-all"
              aria-label="Home"
            >
              Re-Use-it!
            </button>
            <RxCross2
              onClick={() => setOpen(false)}
              className="hover:text-cta dark:hover:text-darkmodeCTA cursor-pointer text-2xl transition-all"
              aria-label="Close menu"
            />
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-y-10 px-8 text-lg font-medium">
            {/* Home */}
            <button
              onClick={() => handleSearch("/")}
              className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
              aria-label="Go to Home"
            >
              Home
            </button>

            {/* Components */}
            <button
              onClick={() => handleSearch("/components")}
              className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
              aria-label="Go to Components"
            >
              Components
            </button>

            {/* Code Snippets */}
            <button
              onClick={() => handleSearch("/code-snippets")}
              className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
              aria-label="Go to Code Snippets"
            >
              Code Snippets
            </button>

            {/* Package JSON */}
            <button
              onClick={() => handleSearch("/package-json")}
              className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
              aria-label="Go to Home"
            >
              Package JSON
            </button>

            {/* Tailwind Config */}
            <button
              onClick={() => handleSearch("/tailwindconfig")}
              className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
              aria-label="View Tailwind CSS file"
            >
              Tailwind Configuration (v3 & v4)
            </button>

            {/* Dark Mode */}
            <button
              onClick={() => handleSearch("/darkmode")}
              className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
              aria-label="View Dark mode Context"
            >
              Dark Mode Context
            </button>

            {/* Narcissism */}
            <p className="absolute bottom-10 text-xs">
              Developed by Roshith Prakash.
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
