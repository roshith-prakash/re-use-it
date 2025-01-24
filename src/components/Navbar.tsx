import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
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
        className={`dark:bg-darkbg relative z-2 flex items-center justify-between bg-white px-10 py-3 font-sans shadow-xl dark:text-white dark:shadow-md dark:shadow-white/30`}
      >
        <Link to="/" aria-label="Home">
          {isDarkMode ? (
            <img
              src={
                "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843158/logodark_gs3pnp.png"
              }
              alt="Logo"
              className="h-12 cursor-pointer"
            />
          ) : (
            <img
              src={
                "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843158/logo_iem9wr.jpg"
              }
              alt="Logo"
              className="h-12 cursor-pointer"
            />
          )}
        </Link>

        <div className="hidden items-center gap-x-8 font-medium lg:flex">
          <Link
            to="/"
            className="hover:text-cta dark:hover:text-darkmodeCTA transition-all"
          >
            Home
          </Link>
          <Link
            to="/tailwindcss"
            className="hover:text-cta dark:hover:text-darkmodeCTA transition-all"
          >
            Tailwind CSS file (v4)
          </Link>
          <Link
            to="/tailwindconfig"
            className="hover:text-cta dark:hover:text-darkmodeCTA transition-all"
          >
            Tailwind config (v3)
          </Link>
          <Link
            to="/darkmode"
            className="hover:text-cta dark:hover:text-darkmodeCTA transition-all"
          >
            DarkModeEnabler
          </Link>
        </div>

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

        {/* Hamburger Button to open the drawer */}
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

        {/* Drawer Menu */}
        <div
          className={`dark:bg-darkbg fixed top-0 right-0 z-50 h-screen w-full bg-white pb-6 text-center text-xl shadow-md md:text-lg ${
            open ? "translate-x-0" : "translate-x-[100%]"
          } transition-all duration-500`}
          role="dialog"
          aria-modal="true"
          aria-label="Drawer Menu"
        >
          <div className="mb-14 flex items-center justify-between px-10 pt-3.5 lg:px-10">
            <button onClick={() => handleSearch("/")} aria-label="Home">
              {isDarkMode ? (
                <img
                  src={
                    "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843158/logodark_gs3pnp.png"
                  }
                  alt="Logo"
                  className="h-12 cursor-pointer"
                />
              ) : (
                <img
                  src={
                    "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843158/logo_iem9wr.jpg"
                  }
                  alt="Logo"
                  className="h-12 cursor-pointer"
                />
              )}
            </button>
            <RxCross2
              onClick={() => setOpen(false)}
              className="hover:text-cta cursor-pointer text-2xl transition-all"
              aria-label="Close menu"
            />
          </div>

          <div className="mt-20 flex flex-col items-center justify-between gap-y-12 px-8 text-xl font-medium">
            <p
              onClick={() => handleSearch("/")}
              className="hover:text-cta w-fit cursor-pointer transition-all"
              role="button"
              tabIndex={0}
              aria-label="Go to Home"
            >
              Home
            </p>
            <p
              onClick={() => handleSearch("/tailwindcss")}
              className="hover:text-cta w-fit cursor-pointer transition-all"
              role="button"
              tabIndex={0}
              aria-label="View Tailwind CSS file"
            >
              Tailwind CSS file (v4)
            </p>
            <p
              onClick={() => handleSearch("/tailwindconfig")}
              className="hover:text-cta w-fit cursor-pointer transition-all"
              role="button"
              tabIndex={0}
              aria-label="View Tailwind Config"
            >
              Tailwind config (v3)
            </p>
            <p
              onClick={() => handleSearch("/darkmode")}
              className="hover:text-cta w-fit cursor-pointer transition-all"
              role="button"
              tabIndex={0}
              aria-label="View Dark mode Context"
            >
              DarkModeEnabler
            </p>
          </div>

          <div className="absolute bottom-24 left-1/2 w-full -translate-x-1/2 pl-1 text-sm lg:bottom-10">
            Developed by Roshith Prakash.
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
