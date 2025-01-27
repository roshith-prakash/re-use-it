import { useEffect } from "react";
import { CopyBlock, xt256 } from "react-code-blocks";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/Table";

const TableCode = `import { ReactNode } from "react";

const Table = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <table className={\`w-full overflow-hidden rounded-lg \${className}\`}>
      {children}
    </table>
  );
};

export const TableHead = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <thead className={\`\${className}\`}>{children}</thead>;
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
      className={\`bg-secondarydarkbg/10 px-4 py-4 text-center text-lg font-bold transition-all dark:bg-white/10 \${className}\`}
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
      className={\`text-md hover:[&>*]:bg-secondarydarkbg/5 border-b-[1px] border-black/10 text-center last:border-none dark:border-white/20 dark:hover:[&>*]:bg-white/5 \${className}\`}
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
    <td className={\`px-3 py-2 transition-all \${className}\`}>{children}</td>
  );
};

export default Table;`;

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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Table</h1>
      <h2 className="mt-8 py-5 text-center">A styled table component.</h2>
      <div className="flex flex-col items-center gap-8 py-10">
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
      </div>

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
            <b>className (function, optional):</b> To override default styles.
          </li>
        </ul>
      </div>

      <h3 className="py-2 pl-1 italic">Table.tsx</h3>
      <CopyBlock
        text={TableCode}
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

export default TableComponent;
