import { ContextValue, useDarkMode } from "../context/DarkModeContext";
import notfound from "../assets/notfound.svg";
import { Link } from "react-router-dom";
import { SecondaryButton } from "../components";

const NotFound = () => {
  const { isDarkMode } = useDarkMode() as ContextValue;
  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-[url('/src/assets/animatedWaveDark.svg')]" : "bg-[url('/src/assets/animatedWave.svg')]"} flex flex-col items-center justify-center gap-y-10 bg-cover pb-10 dark:text-white`}
    >
      <img src={notfound} alt="Not Found Page" className="w-96 max-w-[90%]" />
      <p className="px-4 text-center text-xl font-medium text-white drop-shadow-md md:text-3xl">
        Oops! We're Lost. Let's Go Back Home?
      </p>
      <Link to="/" className="rounded-full bg-white">
        <SecondaryButton text="Go Home!" className="w-full hover:font-medium" />
      </Link>
    </div>
  );
};

export default NotFound;
