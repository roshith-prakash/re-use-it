import { useEffect, useState } from "react";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table";
import { CodeBlock } from "@/components";

const TableCode = `import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Table = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="scroller max-w-[99%] overflow-hidden overflow-x-auto">
      <table className={cn(\`overflow-hidden rounded-lg \${className}\`)}>
        {children}
      </table>
    </div>
  );
};

export const TableHead = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <thead className={cn(\`rounded-t-lg \${className}\`)}>{children}</thead>;
};

export const TableHeader = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <th
      className={cn(
        \`bg-secondarydarkbg/10 px-4 py-3 text-center font-semibold transition-all dark:bg-white/10 \${className}\`,
      )}
    >
      {children}
    </th>
  );
};

export const TableBody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <tbody className={\`\${className}\`}>{children}</tbody>;
};

export const TableRow = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <tr
      className={cn(
        \`text-md hover:[&>*]:bg-secondarydarkbg/5 border-b-[1px] border-black/10 text-center last:border-none dark:border-white/20 dark:hover:[&>*]:bg-white/5 \${className}\`,
      )}
    >
      {children}
    </tr>
  );
};

export const TableCell = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <td className={cn(\`px-8 py-3 transition-all \${className}\`)}>{children}</td>
  );
};

export default Table;
`;

const usingCode = `import  Table, {TableHead,TableHeader,TableBody,TableRow} from "./Table";

const App = () => {

  return (
  <>
        <Table className="max-w-lg">
          <TableHead>
            <TableRow>
              <TableHeader>Sr No</TableHeader>
              <TableHeader>Name</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Alonso</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Vettel</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Hamilton</TableCell>
            </TableRow>
          </TableBody>
        </Table>
  </> );
}`;

const TableComponent = () => {
  const [codeWindow, setCodeWindow] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Table | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Table</h1>
      <h2 className="py-5">A styled Table component.</h2>

      {/* Component */}
      <div className="mx-auto my-20 flex flex-wrap items-center justify-center rounded-xl px-5 py-10 shadow-lg md:w-fit md:min-w-lg md:px-20 dark:shadow dark:shadow-white">
        <Table className="w-md max-w-lg">
          <TableHead>
            <TableRow>
              <TableHeader>Sr No</TableHeader>
              <TableHeader>Name</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Alonso</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Vettel</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Hamilton</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Installation Section */}
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
              Copy and save the component as Table.tsx
            </h3>
            <CodeBlock code={TableCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock code={`npx reuseit add Table`} language="bash" />
          </div>
        )}
      </div>

      {/* Components */}
      <div className="py-8">
        <p className="text-2xl font-semibold">Components</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
            <b>Table :</b> Stylized {String("<table>")} component.
          </li>

          <li>
            {" "}
            <b>TableHead :</b> Stylized {String("<thead>")} component.
          </li>

          <li>
            {" "}
            <b>TableHeader :</b> Stylized {String("<th>")} component.
          </li>

          <li>
            {" "}
            <b>TableBody :</b> Stylized {String("<tbody>")} component.
          </li>

          <li>
            {" "}
            <b>TableRow :</b> Stylized {String("<tr>")} component.
          </li>

          <li>
            {" "}
            <b>TableCell :</b> Stylized {String("<td>")} component.
          </li>
        </ul>
      </div>

      {/* Props Documentation */}
      <div className="py-14">
        <p className="text-2xl font-semibold">Props</p>
        <ul className="mt-8 list-disc py-2 pl-8 leading-8">
          <li>
            {" "}
            <b>className (function, optional):</b> To override default styles.
          </li>
        </ul>
      </div>

      {/* Usage Section */}
      <p className="text-2xl font-semibold">Usage</p>
      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default TableComponent;
