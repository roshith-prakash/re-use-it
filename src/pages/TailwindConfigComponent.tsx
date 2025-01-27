import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";

const TailwindConfigCode = `module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "darkbg": "#181818",
        "secondarydarkbg": "#1E1E1E",
        "darkmodetext": "#E4E4E4",
        "cta": "#9b0ced",
        "hovercta": "#7123b0",
        "grey": "#f5f5f5",
        "error": "#f23f3f",
        "darkmodeCTA": "#b458ff"
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui'],
        'dmSans': ['DM Sans', 'system-ui']
      },
    },

  },
  plugins: [],
}`;

const TailwindConfigComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Tailwind Config (v3) | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">
        Tailwind Config file (tailwind.config.js)
      </h1>
      <h2 className="py-5 text-center">
        Tailwind configuration for Tailwind v3. This file contains the
        configuration for Tailwind, including the custom colors and fonts.
      </h2>

      <h3 className="py-10 pl-1 italic">tailwind.config.js</h3>
      <CopyBlock
        text={TailwindConfigCode}
        language="json"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />
    </div>
  );
};

export default TailwindConfigComponent;
