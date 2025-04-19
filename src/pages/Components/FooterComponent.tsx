import { useEffect, useState } from "react";
import { CodeBlock } from "@/components";

const FooterCode = `const Footer = () => {
  return (
    <footer
      className={\`bg-secondarydarkbg border-darkmodetext relative mt-20 border-t-2 px-10 pt-36 pb-20 text-white\`}
    >
      {/* Floating Div */}
      <div className="dark:border-darkmodetext absolute -top-16 left-1/2 flex h-32 w-[90vw] -translate-x-1/2 items-center justify-around rounded-lg bg-[#1f1e1e] text-white lg:w-[80vw] dark:border-2">
        <p className="text-xl font-medium">Let's Talk!</p>
        <button className="flex cursor-pointer items-center gap-x-2 rounded-full border-2 border-white px-5 py-2 font-medium text-white transition-all hover:bg-white hover:text-black">
          Click Me !
        </button>
      </div>

      {/* Main Footer section */}
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
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

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

      {/* Installation */}
      <div>
        <p className="mt-10 text-2xl font-semibold">Installation</p>
        <div className="my-10 flex gap-5">
          <button
            onClick={() => setCodeWindow(false)}
            className={`${!codeWindow ? "bg-grey dark:bg-white/14" : "bg-transparent"} cursor-pointer rounded px-4 py-2 transition-all`}
          >
            CLI
          </button>
          <button
            onClick={() => setCodeWindow(true)}
            className={`${codeWindow ? "bg-grey dark:bg-white/14" : "bg-transparent"} cursor-pointer rounded px-4 py-2 transition-all`}
          >
            Manual
          </button>
        </div>
        {codeWindow ? (
          <div>
            <h3 className="py-2 pl-1 italic">
              Copy and save the component as Footer.tsx
            </h3>
            <CodeBlock code={FooterCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock code={`npx reuseit add Footer`} language="bash" />
          </div>
        )}
      </div>

      {/* Usage */}
      <p className="mt-10 text-2xl font-semibold">Usage</p>
      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default FooterComponent;
