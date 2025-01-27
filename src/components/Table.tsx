import { ReactNode } from "react";

const Table = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <table className={`w-full overflow-hidden rounded-lg ${className}`}>
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
  return <thead className={`${className}`}>{children}</thead>;
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
      className={`bg-secondarydarkbg/10 px-4 py-4 text-center text-lg font-bold transition-all dark:bg-white/10 ${className}`}
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
  return <tbody className={`${className}`}>{children}</tbody>;
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
      className={`text-md hover:[&>*]:bg-secondarydarkbg/5 border-b-[1px] border-black/10 text-center last:border-none dark:border-white/20 dark:hover:[&>*]:bg-white/5 ${className}`}
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
    <td className={`px-3 py-2 transition-all ${className}`}>{children}</td>
  );
};

export default Table;
