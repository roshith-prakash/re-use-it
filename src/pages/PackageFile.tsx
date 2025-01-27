import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";

const packageJSONv4 = `{
  "name": "component-library",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host --port 3000",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-icons": "^5.4.0",
    "tailwindcss": "^4.0.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.17.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "prettier": "^3.4.2",
    "prettier-plugin-tailwindcss": "^0.6.10",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.18.2",
    "vite": "^6.0.5"
  }
}`;

const packageJSONv3 = `
{
  "name": "component-library",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-helmet-async": "^2.0.5",
    "react-icons": "^5.0.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "dev": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.1"
  }
}
`;

const installCommands = `npm install tailwindcss @tailwindcss/vite react-icons react-helmet-async`;

const PackageFile = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Package.json | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">
        Package file (package.json)
      </h1>
      <h2 className="py-5 text-center">
        The dependencies & packages used for all components.
      </h2>

      <div className="py-8">
        <p className="text-lg font-medium underline">Packages</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
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
            {" "}
            <b>react-icons (optional):</b> React Icons is the preferred
            iconography option but can be easily swapped out for any similar
            package.
          </li>
          <li>
            {" "}
            <b>react-helmet-async (optional):</b> Required only for the Security
            Headers Component.
          </li>
        </ul>
      </div>

      <h3 className="py-10 pl-1 italic">
        Package installation Command for Vite.
      </h3>
      <CopyBlock
        text={installCommands}
        language=""
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />

      <h3 className="py-10 pl-1 italic">package.json (Tailwind V4 + Vite)</h3>
      <CopyBlock
        text={packageJSONv4}
        language="css"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />

      <h3 className="py-10 pl-1 italic">
        package.json (Tailwind V3) - Can be used with other React
        Libraries/Frameworks{" "}
      </h3>
      <CopyBlock
        text={packageJSONv3}
        language="css"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />
    </div>
  );
};

export default PackageFile;
