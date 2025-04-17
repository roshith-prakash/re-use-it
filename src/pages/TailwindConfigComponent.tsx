import { useEffect } from "react";
import { CodeBlock } from "@/components";

// v3
const TailwindConfigCode = `module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary color of your project
        "cta": "#9b0ced",
        // Darker variation of your primary color
        "hovercta": "#7123b0",
        // Background color for dark mode
        "darkbg": "#181818",
        // Lighter variation of your dark mode bg color
        "secondarydarkbg": "#1E1E1E",
        //Text color for dark mode
        "darkmodetext": "#E4E4E4",
        // Custom Light grey color
        "grey": "#f5f5f5",
        // Red tint for errors
        "error": "#f23f3f",
        //  Lighter variation of Primary color for viewability in Dark mode 
        "darkmodeCTA": "#b458ff"
      },
      fontFamily: {
        'title': ['Playwrite IN', 'sans-serif'],
        'sans': ['Open Sans', 'serif'],
        'pacifico' : ['Pacifico','serif']
      },
      animation: {
        // For the modal component
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeOut: "fadeOut 0.3s ease-in-out"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0.3" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0.3" },
        },
      },
    },
  },
  plugins: [],
}`;

// v3 index.css
const v3Index = `@tailwind base;
@tailwind components;
@tailwind utilities;

input::placeholder {
  transition: color 0.2s;
}

/* Custom scrollbar */
.scroller::-webkit-scrollbar {
  height: 5px; 
  width : 5px;
}

/* Track */
.scroller::-webkit-scrollbar-track {
  background: #f1f1f1; /* Background for the scrollbar track */
}

/* Handle */
.scroller::-webkit-scrollbar-thumb {
  background: #888; /* Color for the scrollbar handle */
  border-radius: 5px; /* Optional: Add rounding for a smoother look */
}

/* Handle on hover */
.scroller::-webkit-scrollbar-thumb:hover {
  background: #555; /* Darker color on hover */
};`;

// v4
const TailwindCssCode = `@import "tailwindcss";

@variant dark (&:where(.dark, .dark *));

@theme {
  /* Custom Colors */

  /* Primary color of your project */
  --color-cta: #9b0ced;
  /* Darker variation of your primary color */
  --color-hovercta: #7123b0;
  /* Background color for dark mode */
  --color-darkbg: #181818;
  /* Lighter variation of your dark mode bg color */
  --color-secondarydarkbg: #1e1e1e;
  /* Text color for dark mode */
  --color-darkmodetext: #e4e4e4;
  /* Custom Light grey color */
  --color-grey: #f5f5f5;
  /* Red tint for errors */
  --color-error: #f23f3f;
  /* Lighter variation of Primary color for viewability in Dark mode */
  --color-darkmodeCTA: #b458ff;

  /* Custom Fonts */
  --font-title: "Playwrite IN", sans-serif;
  --font-sans: "Open Sans", serif;
  --font-pacifico: "Pacifico", serif;

  /* Custom Animations for the Modal */

  --animate-fadeIn: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0.3;
    }
    ,
    100% {
      opacity: 1;
    }
  }

  --animate-fadeOut: fadeOut 0.3s ease-in-out;

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    ,
    100% {
      opacity: 0.3;
    }
  }
}

input::placeholder {
  transition: color 0.2s;
}

.scroller::-webkit-scrollbar {
  height: 5px;
  width: 5px;
}

/* Track */
.scroller::-webkit-scrollbar-track {
  background: #f1f1f1; /* Background for the scrollbar track */
}

/* Handle */
.scroller::-webkit-scrollbar-thumb {
  background: #888; /* Color for the scrollbar handle */
  border-radius: 5px; /* Optional: Add rounding for a smoother look */
}

/* Handle on hover */
.scroller::-webkit-scrollbar-thumb:hover {
  background: #555; /* Darker color on hover */
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
        <h1 className="text-4xl font-medium">Tailwind Configuration</h1>
        <h2 className="py-5">
          Custom colors, animations, fonts used for the components.
        </h2>

        <hr className="border-darkbg/50 my-10 mb-10 border-t-2 dark:border-white/50" />

        {/* Tailwind CSS - v4 */}
        <h3 className="mt-14 text-2xl font-semibold">
          Tailwind v4 CSS file (index.css)
        </h3>
        <h4 className="py-5 text-sm">
          Tailwind configuration for Tailwind v4. This file contains the custom
          CSS variables and the dark mode variant.
        </h4>
        <h3 className="mt-10 py-5 pl-1 italic">index.css</h3>
        <CodeBlock code={TailwindCssCode} language="css" />
      </>

      {/* Divider */}
      {/* --------------------------------------------------------------------------------------------- */}
      <hr className="border-darkbg/50 border-b-2 pt-20 dark:border-white/50" />
      {/* --------------------------------------------------------------------------------------------- */}

      <>
        {/* Tailwind CSS - v3 */}
        <h3 className="mt-14 text-2xl font-semibold">
          Tailwind v3 Configuration file (tailwind.config.js)
        </h3>
        <h4 className="py-5 text-sm">
          Tailwind configuration for Tailwind v3. This file contains the
          configuration for Tailwind, including the custom colors and fonts.
        </h4>
        <h3 className="mt-10 py-5 pl-1 italic">tailwind.config.js</h3>
        <CodeBlock code={TailwindConfigCode} language="json" />
        {/* <h3 className="mt-10 py-5 pl-1 italic">postcss.config.js</h3>
        <CodeBlock code={postCSS} language="json" /> */}
        <h3 className="mt-10 py-5 pl-1 italic">index.css</h3>
        <CodeBlock code={v3Index} language="css" />
      </>
    </div>
  );
};

export default TailwindConfigComponent;
