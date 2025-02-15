import { IoIosArrowForward } from "react-icons/io";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { breakUrlIntoPaths } from "../utils/breakURLintoPaths";
import { capitalizeFirstLetters } from "../utils/capitalizeFirstLetters";

// Sidebar Component
const ComponentsSidebar = () => {
  return (
    <div className="dark:bg-darkbg dark:border-grey/25 border-grey/50 border-r-3">
      <div className="h-[90vh] w-2xs overflow-y-auto p-4 pb-20 [&::-webkit-scrollbar]:w-0">
        <h2 className="mb-4 px-4 pb-5 text-2xl font-bold">Getting Started</h2>
        <ul className="space-y-4 font-medium">
          <li>
            <NavLink
              to="getting-started"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Introduction
            </NavLink>
          </li>

          <li>
            <NavLink
              to="packages"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Packages
            </NavLink>
          </li>

          <li>
            <NavLink
              to="tailwind-configuration"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Tailwind Configuration
            </NavLink>
          </li>

          <li>
            <NavLink
              to="darkmode"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              DarkMode Context
            </NavLink>
          </li>
        </ul>

        <h2 className="mb-4 px-4 pt-10 pb-5 text-2xl font-bold">Components</h2>
        <ul className="space-y-4 font-medium">
          <li>
            <NavLink
              to="accordion"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Accordion
            </NavLink>
          </li>
          <li>
            <NavLink
              to="accordion-group"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Accordion Group
            </NavLink>
          </li>
          <li>
            <NavLink
              to="alert"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Alert
            </NavLink>
          </li>
          <li>
            <NavLink
              to="alert-modal"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Alert Modal
            </NavLink>
          </li>
          <li>
            <NavLink
              to="avatar"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Avatar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="badge"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Badge
            </NavLink>
          </li>
          <li>
            <NavLink
              to="card"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Card
            </NavLink>
          </li>
          <li>
            <NavLink
              to="carousel"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Carousel
            </NavLink>
          </li>
          <li>
            <NavLink
              to="checkbox"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Checkbox
            </NavLink>
          </li>
          <li>
            <NavLink
              to="combobox"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Combobox
            </NavLink>
          </li>
          <li>
            <NavLink
              to="date-picker"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Date Picker
            </NavLink>
          </li>
          <li>
            <NavLink
              to="drawer"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Drawer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="footer"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Footer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="input"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Text Input
            </NavLink>
          </li>
          <li>
            <NavLink
              to="loader"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Loading Placeholder
            </NavLink>
          </li>
          <li>
            <NavLink
              to="modal"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Modal
            </NavLink>
          </li>
          <li>
            <NavLink
              to="navbar"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Navbar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="otp-input"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              OTP Input
            </NavLink>
          </li>
          <li>
            <NavLink
              to="password-input"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Password Input
            </NavLink>
          </li>
          <li>
            <NavLink
              to="primary-button"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Primary Button
            </NavLink>
          </li>
          <li>
            <NavLink
              to="progress"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Progress
            </NavLink>
          </li>
          <li>
            <NavLink
              to="radio"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Radio Button
            </NavLink>
          </li>
          <li>
            <NavLink
              to="secondary-button"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Secondary Button
            </NavLink>
          </li>
          <li>
            <NavLink
              to="security-headers"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Security Headers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="select"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Select
            </NavLink>
          </li>
          <li>
            <NavLink
              to="slider"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Slider
            </NavLink>
          </li>
          <li>
            <NavLink
              to="switch"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Switch (Toggle)
            </NavLink>
          </li>
          <li>
            <NavLink
              to="table"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Table
            </NavLink>
          </li>
          <li>
            <NavLink
              to="textarea"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              TextArea
            </NavLink>
          </li>
          <li>
            <NavLink
              to="timeline"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Timeline
            </NavLink>
          </li>
          <li>
            <NavLink
              to="toggle"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Toggle
            </NavLink>
          </li>
          <li>
            <NavLink
              to="tooltip"
              className={({ isActive }) =>
                `${isActive && "bg-sidebargrey dark:bg-white/10"} hover:bg-sidebargrey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Tooltip
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Components = () => {
  const location = useLocation();

  return (
    <>
      <div className="flex h-screen">
        <div className="hidden lg:block">
          <ComponentsSidebar />
        </div>
        <div className="scroller dark:bg-darkbg flex-1 overflow-y-auto bg-white pb-20">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-4 px-10 py-5">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            {breakUrlIntoPaths(location.pathname).map((item) => {
              return (
                <>
                  <IoIosArrowForward />
                  <Link key={item} to={item} className="hover:underline">
                    {capitalizeFirstLetters(
                      item.split("/").pop()?.replaceAll("-", " ") as string,
                    )}
                  </Link>
                </>
              );
            })}
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Components;
