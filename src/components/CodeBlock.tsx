import { vs2015, CopyBlock } from "react-code-blocks";

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  return (
    <CopyBlock
      text={code}
      language={language}
      showLineNumbers={true}
      theme={vs2015}
      codeBlock
    />
  );
};

export default CodeBlock;
