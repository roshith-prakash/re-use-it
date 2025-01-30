const ProgressBar = ({
  currentProgress,
  className,
}: {
  currentProgress: number;
  className?: string;
}) => {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-400">
      <div
        className={`bg-cta h-full rounded-full transition-all ${className}`}
        style={{ width: `${currentProgress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
