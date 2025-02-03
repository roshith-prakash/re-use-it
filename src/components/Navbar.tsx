import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ContextValue, useDarkMode } from "../context/DarkModeContext";
import { IoMoon } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import Accordion from "./Accordion";

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
        className={`dark:bg-darkbg dark:border-grey/25 border-grey/50 sticky top-0 z-2 flex w-full items-center justify-between border-b-3 bg-white px-10 py-4 font-sans dark:text-white`}
      >
        {/* Logo */}
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
          className={`dark:bg-darkbg fixed top-0 right-0 z-50 flex h-screen w-full flex-col bg-white pb-6 text-center text-xl shadow-md md:text-lg ${
            open ? "translate-x-0" : "translate-x-[100%]"
          } transition-all duration-500`}
          role="dialog"
          aria-modal="true"
          aria-label="Drawer Menu"
        >
          {/* Top Section - Title + X button */}
          <div className="mb-5 flex items-center justify-between px-10 pt-4 lg:px-10">
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

          <div className="scroller mt-14 flex flex-1 flex-col items-center gap-y-10 overflow-y-auto px-8 pb-20 text-lg font-medium">
            {/* Home */}
            <button
              onClick={() => handleSearch("/")}
              className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
              aria-label="Go to Home"
            >
              Home
            </button>

            {/* Getting Started */}
            <button
              onClick={() => handleSearch("/getting-started")}
              className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
              aria-label="Getting Started"
            >
              Getting Started
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

            {/* Components */}
            <Accordion
              text="Components"
              className="w-full border-none text-xl font-semibold"
            >
              <div className="flex flex-col items-center gap-y-8 py-10 text-lg font-medium">
                {/* Accordion */}
                <button
                  onClick={() => handleSearch("/components/accordion")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Single Accordion"
                >
                  Accordion
                </button>

                {/* Accordion Group */}
                <button
                  onClick={() => handleSearch("/components/accordion-group")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Accordion Group"
                >
                  Accordion Group
                </button>

                {/* Avatar */}
                <button
                  onClick={() => handleSearch("/components/avatar")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Avatar"
                >
                  Avatar
                </button>

                {/* Accordion */}
                <button
                  onClick={() => handleSearch("/components/badge")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Badge"
                >
                  Badge
                </button>

                {/* Card */}
                <button
                  onClick={() => handleSearch("/components/security-headers")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Card Component"
                >
                  Card
                </button>

                {/* Checkbox */}
                <button
                  onClick={() => handleSearch("/components/checkbox")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Checkbox Input"
                >
                  Checkbox
                </button>

                {/* Footer */}
                <button
                  onClick={() => handleSearch("/components/footer")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Footer"
                >
                  Footer
                </button>

                {/* Loader */}
                <button
                  onClick={() => handleSearch("/components/loader")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Skeleton Loader"
                >
                  Loading Placeholder
                </button>

                {/* Modal */}
                <button
                  onClick={() => handleSearch("/components/modal")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Modal"
                >
                  Modal
                </button>

                {/* Navbar */}
                <button
                  onClick={() => handleSearch("/components/navbar")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Navigation Bar"
                >
                  Navbar
                </button>

                {/* Password Input */}
                <button
                  onClick={() => handleSearch("/components/password-input")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Password Input"
                >
                  Password Input
                </button>

                {/* Primary Button */}
                <button
                  onClick={() => handleSearch("/components/primary-button")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Primary Button"
                >
                  Primary Button
                </button>

                {/* Progress Bar */}
                <button
                  onClick={() => handleSearch("/components/progress")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Progress Bar"
                >
                  Progress Bar
                </button>

                {/* Radio Button */}
                <button
                  onClick={() => handleSearch("/components/radio")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Radio Button"
                >
                  Radio Button
                </button>

                {/* Secondary Button */}
                <button
                  onClick={() => handleSearch("/components/secondary-button")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Secondary Button"
                >
                  Secondary Button
                </button>

                {/* Security Headers */}
                <button
                  onClick={() => handleSearch("/components/security-headers")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Security Headers"
                >
                  Security Headers
                </button>

                {/* Select */}
                <button
                  onClick={() => handleSearch("/components/select")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Select Input"
                >
                  Select
                </button>

                {/* Slider */}
                <button
                  onClick={() => handleSearch("/components/slider")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Slider"
                >
                  Slider
                </button>

                {/* Switch */}
                <button
                  onClick={() => handleSearch("/components/switch")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Switch"
                >
                  Switch (Toggle)
                </button>

                {/* Table */}
                <button
                  onClick={() => handleSearch("/components/table")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Table"
                >
                  Table
                </button>

                {/* Text Input */}
                <button
                  onClick={() => handleSearch("/components/input")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Text Input"
                >
                  Text Input
                </button>

                {/* Timeline */}
                <button
                  onClick={() => handleSearch("/components/timeline")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Timeline"
                >
                  Timeline
                </button>
              </div>
            </Accordion>

            {/* Code Snippets */}
            <Accordion
              text="Code Snippets"
              className="w-full border-none text-xl font-semibold"
            >
              <div className="flex flex-col items-center gap-y-8 py-10 text-lg font-medium">
                {/* Use Debounce */}
                <button
                  onClick={() => handleSearch("/code-snippets/use-debounce")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Use Debounce"
                >
                  Use Debounce Hook
                </button>

                {/* Regex Functions */}
                <button
                  onClick={() => handleSearch("/code-snippets/regex")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Regex Functions"
                >
                  Regex Functions
                </button>

                {/* Shuffle Array */}
                <button
                  onClick={() => handleSearch("/code-snippets/shuffle-array")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Shuffle Array"
                >
                  Shuffle Array
                </button>

                {/* Minutes to Read */}
                <button
                  onClick={() => handleSearch("/code-snippets/minutes-to-read")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Minutes to Read"
                >
                  Minutes to Read
                </button>

                {/* Format Number */}
                <button
                  onClick={() => handleSearch("/code-snippets/format-number")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Format Number"
                >
                  Format Number
                </button>

                {/* Axios */}
                <button
                  onClick={() => handleSearch("/code-snippets/axios")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Custom Axios Instance"
                >
                  Axios Instance
                </button>

                {/* Multer */}
                <button
                  onClick={() => handleSearch("/code-snippets/multer")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Multer Configuration"
                >
                  Multer Configuration
                </button>

                {/* Cloudinary */}
                <button
                  onClick={() => handleSearch("/code-snippets/cloudinary")}
                  className="hover:text-cta dark:hover:text-darkmodeCTA w-fit cursor-pointer transition-all"
                  aria-label="Multer Configuration"
                >
                  Cloudinary SDK Configuration
                </button>
              </div>
            </Accordion>

            {/* Narcissism */}
            {/* <p className="absolute bottom-10 text-xs">
              Developed by Roshith Prakash.
            </p> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
