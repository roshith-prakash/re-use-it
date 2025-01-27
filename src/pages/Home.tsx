import { useEffect } from "react";
import { ContextValue, useDarkMode } from "../context/DarkModeContext";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const { isDarkMode } = useDarkMode() as ContextValue;

  useEffect(() => {
    document.title = "Re-Use-it!";
  }, []);
  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-[url('/src/assets/animatedWaveDark.svg')]" : "bg-[url('/src/assets/animatedWave.svg')]"} flex flex-col bg-cover dark:text-white`}
    >
      <div className="flex flex-1 flex-col items-center justify-center gap-10">
        <h1 className="font-pacifico text-6xl">Re-Use-it!</h1>
        <h2 className="font-title text-2xl">
          Components that are{" "}
          <Typewriter
            typeSpeed={75}
            deleteSpeed={75}
            loop
            words={["Reusable.", "Customizable.", "Yours."]}
          />
        </h2>
      </div>
    </div>
  );
};

export default Home;
