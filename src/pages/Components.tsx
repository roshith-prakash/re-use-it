import { NavLink, Outlet } from "react-router-dom";

// Sidebar Component
const ComponentsSidebar = () => {
  return (
    <div className="dark:bg-darkbg dark:border-grey/25 border-grey/50 border-r-3">
      <h2 className="mb-4 pt-5 text-center text-2xl font-bold">Components</h2>
      <div className="h-screen w-2xs overflow-y-auto p-4 pb-20 [&::-webkit-scrollbar]:w-0">
        <ul className="space-y-4 font-medium">
          <li>
            <NavLink
              to="accordion"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Accordion
            </NavLink>
          </li>
          <li>
            <NavLink
              to="accordion-group"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Accordion Group
            </NavLink>
          </li>
          <li>
            <NavLink
              to="primary-button"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Primary Button
            </NavLink>
          </li>
          <li>
            <NavLink
              to="secondary-button"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Secondary Button
            </NavLink>
          </li>
          <li>
            <NavLink
              to="input"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Text Input
            </NavLink>
          </li>
          <li>
            <NavLink
              to="password-input"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Password Input
            </NavLink>
          </li>
          <li>
            <NavLink
              to="select"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Select
            </NavLink>
          </li>
          <li>
            <NavLink
              to="checkbox"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Checkbox
            </NavLink>
          </li>
          <li>
            <NavLink
              to="radio"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Radio Button
            </NavLink>
          </li>
          <li>
            <NavLink
              to="switch"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Switch (Toggle)
            </NavLink>
          </li>
          <li>
            <NavLink
              to="loader"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Loading Placeholder
            </NavLink>
          </li>
          <li>
            <NavLink
              to="timeline"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Timeline
            </NavLink>
          </li>
          <li>
            <NavLink
              to="security-headers"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Security Headers
            </NavLink>
          </li>

          <li>
            <NavLink
              to="card"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Card
            </NavLink>
          </li>
          <li>
            <NavLink
              to="navbar"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Navbar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="footer"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Footer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="table"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Table
            </NavLink>
          </li>
          <li>
            <NavLink
              to="modal"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Modal
            </NavLink>
          </li>
          <li>
            <NavLink
              to="avatar"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Avatar
            </NavLink>
          </li>

          <li>
            <NavLink
              to="progress"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Progress
            </NavLink>
          </li>
          <li>
            <NavLink
              to="slider"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Slider
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Components = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="hidden lg:block">
          <ComponentsSidebar />
        </div>
        <div className="scroller dark:bg-darkbg flex-1 overflow-y-auto bg-white pb-20">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Components;
