import { useEffect } from "react";

const GettingStarted = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Getting Started | Re-Use-it!";
  }, []);
  return <div className="min-h-screen">Getting Started</div>;
};

export default GettingStarted;
