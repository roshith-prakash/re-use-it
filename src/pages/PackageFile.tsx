import { useEffect, useState } from "react";
import { Checkbox, CodeBlock } from "@/components";

const installCommandsv4Vite = `npm install clsx tailwind-merge tailwindcss @tailwindcss/vite`;

const viteConfig = `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
`;

const installCommandsv4 = `npm install clsx tailwind-merge tailwindcss @tailwindcss/postcss postcss`;

const postCssv4 = `export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}`;

const installCommandsv3 = `npm install clsx tailwind-merge
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init`;

// PostCSS config
const postCSSv3 = `module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    }
}
`;

const PackageFile = () => {
  const [reactIcons, setReactIcons] = useState<boolean>(true);
  const [reactHelmet, setReactHelmet] = useState<boolean>(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Packages | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Packages</h1>
      <h2 className="py-5">
        The dependencies & packages used for all components.
      </h2>

      {/* Packages */}
      <div className="py-8">
        <p className="text-lg font-medium">Packages :</p>
        <ul className="list-disc pt-4 pl-8 leading-10">
          <li>
            <Checkbox
              checked={true}
              className="translate-y-0.5"
              onChange={() => {}}
              disabled
            />
            <b>tailwind (required):</b> Every component is styled using Tailwind
            CSS—no exceptions here! The v4 package.json is tailored for Vite
            projects, while the v3 package.json works seamlessly with other
            React-based libraries. Check out{" "}
            <a
              href="http://tailwindcss.com/"
              rel="noreferrer"
              target="_blank"
              className="text-nowrap text-blue-600 dark:text-blue-400"
            >
              Tailwind CSS
            </a>{" "}
            for installation directions based on your project.
          </li>
          <li>
            <Checkbox
              checked={true}
              className="translate-y-0.5"
              onChange={() => {}}
              disabled
            />
            <b>clsx (required):</b> Allows conditional `className` composition
            to make components more dynamic. Perfect for tailoring components to
            match your own design system or theme logic.
          </li>
          <li>
            <Checkbox
              checked={true}
              className="translate-y-0.5"
              onChange={() => {}}
              disabled
            />
            <b>tailwind-merge (required):</b> Prevents conflicting Tailwind
            classes by intelligently merging them—especially useful when
            applying conditional styles based on your design system.
          </li>
          <li>
            <Checkbox
              checked={reactIcons}
              className="translate-y-0.5"
              onChange={(e) => {
                setReactIcons(e.target.checked);
              }}
            />
            <b>react-icons (optional):</b> React Icons is the iconography option
            used but can be easily swapped out for any similar package or SVGs.
          </li>
          <li>
            <Checkbox
              checked={reactHelmet}
              className="translate-y-0.5"
              onChange={(e) => {
                setReactHelmet(e.target.checked);
              }}
            />
            <b>react-helmet-async (optional):</b> Required for the{" "}
            <strong>Security Headers Component</strong>.{" "}
            <span className="rounded-lg bg-black/5 px-2 py-1.5 dark:bg-white/15">
              (Does not work for React 19 and higher.)
            </span>
          </li>
        </ul>
      </div>

      {/* Tailwind v4 Vite */}
      <>
        {/* --------------------------------------------------------------------------------------------- */}
        <hr className="border-darkbg/50 my-14 border-t-2 dark:border-white/50" />
        {/* --------------------------------------------------------------------------------------------- */}

        <h3 className="mt-14 text-2xl font-semibold">
          Installation for Tailwind v4 - Vite
        </h3>
        <h4 className="py-5 text-sm">
          Installs and configures Tailwind v4, React-Icons & React Helmet in
          Vite projects.
        </h4>

        <h3 className="mt-10 py-5 pl-1 italic">
          Package installation Command for Vite.
        </h3>
        <CodeBlock
          code={`${installCommandsv4Vite} ${reactIcons ? "react-icons" : ""} ${reactHelmet ? "react-helmet-async" : ""}`}
          language="bash"
        />

        <h3 className="mt-10 py-5 pl-1 italic">vite.config.ts</h3>
        <CodeBlock code={viteConfig} language="css" />
      </>

      {/* Tailwind v4 POSTCSS */}
      <>
        {/* --------------------------------------------------------------------------------------------- */}
        <hr className="border-darkbg/50 my-14 border-t-2 dark:border-white/50" />
        {/* --------------------------------------------------------------------------------------------- */}

        <h3 className="mt-14 text-2xl font-semibold">
          Installation for Tailwind v4 - PostCSS
        </h3>
        <h4 className="py-5 text-sm">
          Installs and configures Tailwind v4, React-Icons & React Helmet in
          Non-Vite projects using PostCSS.
        </h4>

        <h3 className="mt-10 py-5 pl-1 italic">
          Package installation Command.
        </h3>
        <CodeBlock
          code={`${installCommandsv4} ${reactIcons ? "react-icons" : ""} ${reactHelmet ? "react-helmet-async" : ""} `}
          language="bash"
        />

        <h3 className="mt-10 py-5 pl-1 italic">postcss.config.cts</h3>
        <CodeBlock code={postCssv4} language="json" />
      </>

      {/* Tailwind v3 */}
      <>
        {/* --------------------------------------------------------------------------------------------- */}
        <hr className="border-darkbg/50 my-14 border-t-2 dark:border-white/50" />
        {/* --------------------------------------------------------------------------------------------- */}

        <h3 className="mt-14 text-2xl font-semibold">
          Installation for Tailwind v3
        </h3>
        <h4 className="py-5 text-sm">
          Installs and configures Tailwind v3, React-Icons & React Helmet.
        </h4>

        <h3 className="mt-10 py-5 pl-1 italic">
          Package installation Command for Tailwind v3.
        </h3>
        <CodeBlock
          code={`${installCommandsv3} ${reactIcons ? "react-icons" : ""} ${reactHelmet ? "react-helmet-async" : ""}`}
          language="json"
        />
        <h3 className="mt-10 py-5 pl-1 italic">postcss.config.cts</h3>
        <CodeBlock code={postCSSv3} language="json" />
      </>
    </div>
  );
};

export default PackageFile;
