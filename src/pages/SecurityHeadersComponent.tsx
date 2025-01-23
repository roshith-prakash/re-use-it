import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";

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

const SecurityHeadersCodeComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="py-2 pl-1 italic">SecurityHeaders.tsx</h1>
      <CopyBlock
        text={SecurityHeaderCode}
        language="typescript"
        showLineNumbers={true}
        theme={xt256}
        codeBlock
      />
    </div>
  );
};

export default SecurityHeadersCodeComponent;
