const Loader = ({ className }: { className?: string }) => {
  return (
    <div
      className={`h-8 animate-pulse rounded-lg bg-gray-300 dark:bg-gray-500 ${className}`}
    ></div>
  );
};

export default Loader;
