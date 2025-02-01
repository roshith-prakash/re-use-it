import { NavLink, Outlet } from "react-router-dom";

// Sidebar Component
const ComponentsSidebar = () => {
  return (
    <div className="dark:bg-darkbg bg-grey dark:border-darkmodetext border-r-2 border-white">
      <h2 className="mb-4 pt-5 text-center text-2xl font-bold">Components</h2>
      <div className="scroller h-screen overflow-y-auto p-4 px-10">
        <ul className="space-y-4">
          <li>
            <NavLink to="accordion" className="hover:text-cta block">
              Accordion
            </NavLink>
          </li>
          <li>
            <NavLink to="accordion-group" className="hover:text-cta block">
              Accordion Group
            </NavLink>
          </li>
          <li>
            <NavLink to="primary-button" className="hover:text-cta block">
              Primary Button
            </NavLink>
          </li>
          <li>
            <NavLink to="secondary-button" className="hover:text-cta block">
              Secondary Button
            </NavLink>
          </li>
          <li>
            <NavLink to="input" className="hover:text-cta block">
              Text Input
            </NavLink>
          </li>
          <li>
            <NavLink to="password-input" className="hover:text-cta block">
              Password Input
            </NavLink>
          </li>
          <li>
            <NavLink to="select" className="hover:text-cta block">
              Select
            </NavLink>
          </li>
          <li>
            <NavLink to="checkbox" className="hover:text-cta block">
              Checkbox
            </NavLink>
          </li>
          <li>
            <NavLink to="radio" className="hover:text-cta block">
              Radio Button
            </NavLink>
          </li>
          <li>
            <NavLink to="switch" className="hover:text-cta block">
              Switch (Toggle)
            </NavLink>
          </li>
          <li>
            <NavLink to="loader" className="hover:text-cta block">
              Loading Placeholder
            </NavLink>
          </li>
          <li>
            <NavLink to="timeline" className="hover:text-cta block">
              Timeline
            </NavLink>
          </li>
          <li>
            <NavLink to="security-headers" className="hover:text-cta block">
              Security Headers
            </NavLink>
          </li>

          <li>
            <NavLink to="card" className="hover:text-cta block">
              Card
            </NavLink>
          </li>
          <li>
            <NavLink to="navbar" className="hover:text-cta block">
              Navbar
            </NavLink>
          </li>
          <li>
            <NavLink to="footer" className="hover:text-cta block">
              Footer
            </NavLink>
          </li>
          <li>
            <NavLink to="table" className="hover:text-cta block">
              Table
            </NavLink>
          </li>
          <li>
            <NavLink to="modal" className="hover:text-cta block">
              Modal
            </NavLink>
          </li>
          <li>
            <NavLink to="avatar" className="hover:text-cta block">
              Avatar
            </NavLink>
          </li>

          <li>
            <NavLink to="progress" className="hover:text-cta block">
              Progress
            </NavLink>
          </li>
          <li>
            <NavLink to="slider" className="hover:text-cta block">
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
        <div className="scroller dark:bg-darkbg bg-grey flex-1 overflow-y-auto pb-20">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Components;
