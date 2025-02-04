import { useEffect } from "react";
import { CodeBlock } from "../../components";

const FooterCode = `import { ContextValue, useDarkMode } from "../context/DarkModeContext";

const Footer = () => {
  const { isDarkMode } = useDarkMode() as ContextValue;
  return (
    <footer
      className={\`\${
        isDarkMode
          ? "bg-secondarydarkbg border-darkmodetext border-t-2"
          : "from-cta to-hovercta bg-gradient-to-b"
      } font-inter min-h-50vh px-010 relative mt-20 pt-36 pb-20 text-white\`}
    >
      <div className="dark:border-darkmodetext absolute -top-16 left-1/2 flex h-32 w-[90vw] -translate-x-1/2 items-center justify-around rounded-lg bg-[#1f1e1e] text-white lg:w-[80vw] dark:border-2">
        <p className="text-xl font-medium">Let's Talk!</p>
        <button className="flex cursor-pointer items-center gap-x-2 rounded-full border-2 border-white px-5 py-2 font-medium text-white transition-all hover:bg-white hover:text-black">
          Click Me !
        </button>
      </div>

      <div className="flex flex-col pt-3 lg:flex-row">
        <div className="flex flex-1 flex-col items-center justify-center">
          Add your content here
        </div>

        {/* Image - hidden on smaller screens */}
        <div className="hidden flex-1 items-center justify-center lg:flex">
          <img
            src={
              "https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843158/logodark_gs3pnp.png"
            }
            alt=""
            className="er-events-none h-60"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
`;

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

  useEffect(() => {
    document.title = "Footer | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Footer</h1>
      <h2 className="py-5">A footer component with a floating div.</h2>
      <h3 className="py-10 pl-1 italic">Footer.tsx</h3>
      <CodeBlock code={FooterCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default FooterComponent;
