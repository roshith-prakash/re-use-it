import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";

// v3
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
        'title': ['Playwrite IN', 'sans-serif'],
        'sans': ['Open Sans', 'serif']
      },
    },

  },
  plugins: [],
}`;

// v3 index.css
const v3Index = `@tailwind base;
@tailwind components;
@tailwind utilities;`;

// PostCSS config
const postCSS = `module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    }
}
`;

// v4
const TailwindCssCode = `@import "tailwindcss";

@variant dark (&:where(.dark, .dark *));

@theme {
  /* Custom Colors */
  --color-cta: #9b0ced;
  --color-darkbg: #181818;
  --color-secondarydarkbg: #1e1e1e;
  --color-darkmodetext: #e4e4e4;
  --color-hovercta: #7123b0;
  --color-grey: #f5f5f5;
  --color-error: #f23f3f;
  --color-darkmodeCTA: #b458ff;

  /* Custom Fonts */
  --font-title: "Playwrite IN", sans-serif;
  --font-sans: "Open Sans", serif;
}

input::placeholder {
  transition: color 0.2s;
}
`;

const TailwindConfigComponent = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Title
  useEffect(() => {
    document.title = "Tailwind Configuration | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <>
        {/* Tailwind CSS - v4 */}
        <h1 className="text-center text-2xl font-medium">
          Tailwind v4 CSS file (index.css)
        </h1>
        <h2 className="py-5 text-center">
          Tailwind configuration for Tailwind v4. This file contains the custom
          CSS variables and the dark mode variant.
        </h2>
        <h3 className="py-10 pl-1 italic">index.css</h3>
        <CopyBlock
          text={TailwindCssCode}
          language="css"
          showLineNumbers={true}
          theme={xt256}
          codeBlock
        />
      </>

      {/* Divider */}
      {/* --------------------------------------------------------------------------------------------- */}
      <hr className="border-b-2 pt-20" />
      {/* --------------------------------------------------------------------------------------------- */}

      <>
        {/* Tailwind Config - v3 */}
        <h1 className="pt-20 text-center text-2xl font-medium">
          Tailwind v3 Config file (tailwind.config.js)
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
        <h3 className="py-10 pl-1 italic">postcss.config.js</h3>
        <CopyBlock
          text={postCSS}
          language="json"
          showLineNumbers={true}
          theme={xt256}
          codeBlock
        />
        <h3 className="py-10 pl-1 italic">index.css</h3>
        <CopyBlock
          text={v3Index}
          language="css"
          showLineNumbers={true}
          theme={xt256}
          codeBlock
        />
      </>
    </div>
  );
};

export default TailwindConfigComponent;
