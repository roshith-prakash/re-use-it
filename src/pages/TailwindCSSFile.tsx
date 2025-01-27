import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";

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

const TailwindCSSComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Tailwind CSS (v4) | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">
        Tailwind CSS file (index.css)
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
    </div>
  );
};

export default TailwindCSSComponent;
