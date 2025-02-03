import { NavLink, Outlet } from "react-router-dom";

// Sidebar Component
const SnippetsSidebar = () => {
  return (
    <div className="dark:bg-darkbg dark:border-grey/25 border-grey/50 border-r-3">
      <h2 className="mb-4 pt-5 text-center text-2xl font-bold">
        Code Snippets
      </h2>
      <div className="h-screen w-2xs overflow-y-auto p-4 pb-20 [&::-webkit-scrollbar]:w-0">
        <ul className="space-y-4 font-medium">
          <li>
            <NavLink
              to="use-debounce"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              useDebounce Hook
            </NavLink>
          </li>
          <li>
            <NavLink
              to="regex"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Regex Functions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="shuffle-array"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Shuffle Array
            </NavLink>
          </li>
          <li>
            <NavLink
              to="minutes-to-read"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Minutes to Read
            </NavLink>
          </li>
          <li>
            <NavLink
              to="format-number"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Format Number
            </NavLink>
          </li>
          <li>
            <NavLink
              to="axios"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Axios Instance
            </NavLink>
          </li>
          <li>
            <NavLink
              to="multer"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Multer Config
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cloudinary"
              className={({ isActive }) =>
                `${isActive && "bg-grey dark:bg-white/10"} hover:bg-grey/75 block rounded-lg px-4 py-2 dark:hover:bg-white/5`
              }
            >
              Cloudinary SDK Config
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
        <div className="scroller dark:bg-darkbg flex-1 overflow-y-auto pb-20">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CodeSnippets;
