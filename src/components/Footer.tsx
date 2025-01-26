import { ContextValue, useDarkMode } from "../context/DarkModeContext";

const Footer = () => {
  const { isDarkMode } = useDarkMode() as ContextValue;
  return (
    <footer
      className={` ${
        isDarkMode
          ? "bg-secondarydarkbg border-darkmodetext border-t-2"
          : "from-cta to-hovercta bg-gradient-to-b"
      } font-inter min-h-50vh relative pb-20 text-white`}
    >
      <div className="dark:border-darkmodetext absolute -top-16 left-1/2 flex h-32 w-[90vw] -translate-x-1/2 items-center justify-around rounded-lg bg-[#1f1e1e] text-white lg:w-[80vw] dark:border-2">
        <p className="text-xl font-medium">Let's Talk!</p>
        <button>Click Me</button>
      </div>

      <div className="g:flex-row flex flex-col pt-3">
        <div className="flex-1">{/* Add your content here */}</div>

        {/* Image - hidden on smaller screens */}
        <div className="hidden items-center justify-center lg:flex lg:flex-1">
          <img src={""} alt="" className="er-events-none h-60" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
