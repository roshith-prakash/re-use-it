import { ContextValue, useDarkMode } from "../context/DarkModeContext";
import notfound from "../assets/notfound.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const { isDarkMode } = useDarkMode() as ContextValue;

  useEffect(() => {
    document.title = "Not Found | Re-Use-it!";
  }, []);
  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-[url('/src/assets/animatedWaveDark.svg')]" : "bg-[url('/src/assets/animatedWave.svg')]"} flex flex-col items-center justify-center gap-y-10 bg-cover pb-10 dark:text-white`}
    >
      <div className="dark:bg-secondarydarkbg flex flex-col items-center gap-10 rounded-xl bg-white p-10 shadow-xl dark:border-[1px] dark:shadow-white/20">
        <img src={notfound} alt="Not Found Page" className="w-96 max-w-[90%]" />
        <p className="px-4 text-center text-xl font-medium drop-shadow-md md:text-3xl">
          Oops! We're Lost. Let's Go Back Home?
        </p>
        <Link to="/" className="w-fit rounded-full bg-white">
          <button className="border-cta bg-cta w-fit cursor-pointer rounded-full border-2 p-2 px-5 text-white transition-all hover:scale-105">
            Go Home!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
