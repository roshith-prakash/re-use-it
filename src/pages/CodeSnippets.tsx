import { NavLink, Outlet } from "react-router-dom";

// Sidebar Component
const SnippetsSidebar = () => {
  return (
    <div className="dark:bg-darkbg bg-grey dark:border-darkmodetext border-r-2 border-white">
      <h2 className="mb-4 pt-5 text-center text-2xl font-bold">
        Code Snippets
      </h2>
      <div className="scroller h-screen overflow-y-auto p-4 px-10">
        <ul className="space-y-4">
          <li>
            <NavLink to="use-debounce" className="hover:text-cta block">
              useDebounce Hook
            </NavLink>
          </li>
          <li>
            <NavLink to="regex" className="hover:text-cta block">
              Regex Functions
            </NavLink>
          </li>
          <li>
            <NavLink to="shuffle-array" className="hover:text-cta block">
              Shuffle Array
            </NavLink>
          </li>
          <li>
            <NavLink to="minutes-to-read" className="hover:text-cta block">
              Minutes to Read
            </NavLink>
          </li>
          <li>
            <NavLink to="format-number" className="hover:text-cta block">
              Format Number
            </NavLink>
          </li>
          <li>
            <NavLink to="axios" className="hover:text-cta block">
              Axios Instance
            </NavLink>
          </li>
          <li>
            <NavLink to="multer" className="hover:text-cta block">
              Multer
            </NavLink>
          </li>
          <li>
            <NavLink to="cloudinary" className="hover:text-cta block">
              Cloudinary Config
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

const CodeSnippets = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="hidden lg:block">
          <SnippetsSidebar />
        </div>
        <div className="scroller dark:bg-darkbg bg-grey flex-1 overflow-y-auto pb-20">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CodeSnippets;
