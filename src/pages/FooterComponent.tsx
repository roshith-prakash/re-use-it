import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";

const FooterCode = `import { ContextValue, useDarkMode } from "../context/DarkModeContext";

const Footer = () => {
  const { isDarkMode } = useDarkMode() as ContextValue;
  return (
    <footer
      className={\`\${
        isDarkMode
          ? "bg-secondarydarkbg border-darkmodetext border-t-2"
          : "from-cta to-hovercta bg-gradient-to-b"
      } font-inter min-h-50vh relative pb-20 text-white\`}
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

export default Footer;`;

const usingCode = `import Footer from './Footer';

const App = () => {
  return (
      <Footer />
  )
}
`;

const FooterComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Footer</h1>
      <h2 className="mt-8 py-5 text-center">
        A Footer Component with a Floating Div.
      </h2>

      <h3 className="py-2 pl-1 italic">Footer.tsx</h3>
      <CopyBlock
        text={FooterCode}
        language="tsx"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CopyBlock
        text={usingCode}
        language="tsx"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />
    </div>
  );
};

export default FooterComponent;
