import { atomOneDark, atomOneLight, CopyBlock } from "react-code-blocks";
import { useDarkMode, ContextValue } from "@/context/DarkModeContext";

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const { isDarkMode } = useDarkMode() as ContextValue;
  return (
    <CopyBlock
      text={code}
      language={language}
      showLineNumbers={true}
      theme={isDarkMode ? atomOneDark : atomOneLight}
      codeBlock
    />
  );
};

export default CodeBlock;
