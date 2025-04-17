import { useEffect, useState } from "react";
import { CodeBlock } from "@/components";

const SecurityHeaderCode = `import { Helmet } from "react-helmet-async";

const SecurityHeaders = () => {
  return (
    <Helmet>
      {/* Content Security Policy (CSP) */}
      <meta
        http-equiv="Content-Security-Policy"
        content="style-src 'self' 'unsafe-inline';"
      />

      {/* X-Content-Type-Options */}
      <meta http-equiv="X-Content-Type-Options" content="nosniff" />

      {/* X-Frame-Options */}
      <meta http-equiv="X-Frame-Options" content="DENY" />

      {/* X-XSS-Protection */}
      <meta http-equiv="X-XSS-Protection" content="1; mode=block" />

      {/* Referrer Policy */}
      <meta name="referrer" content="no-referrer" />

      {/* Feature Policy */}
      <meta
        http-equiv="Permissions-Policy"
        content="geolocation=(self), microphone=()"
      />

      {/* Strict-Transport-Security */}
      <meta
        http-equiv="Strict-Transport-Security"
        content="max-age=31536000; includeSubDomains"
      />
    </Helmet>
  );
};

export default SecurityHeaders;`;

const usingCode = `import SecurityHeaders  from "./SecurityHeaders";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
        <HelmetProvider>
          <SecurityHeaders />
          <div></div>
        </HelmetProvider>
  )

}`;

const SecurityHeadersCodeComponent = () => {
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Security Headers | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Security Headers</h1>
      <h2 className="py-5">Adds basic security measures using React Helmet.</h2>
      <h3 className="border-grey mt-2 w-fit rounded px-4 py-2 shadow dark:shadow-white">
        Note : Must wrap App with HelmetProvider Component of React Helmet.
      </h3>

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
              Copy and save the component as Input.tsx
            </h3>
            <CodeBlock code={SecurityHeaderCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock
              code={`npx reuseit add SecurityHeaders`}
              language="bash"
            />
          </div>
        )}
      </div>

      {/* Usage */}
      <p className="mt-14 text-2xl font-semibold">Usage</p>
      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default SecurityHeadersCodeComponent;
