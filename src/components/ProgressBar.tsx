import { cn } from "@/lib/utils";

const ProgressBar = ({
  currentProgress,
  className,
}: {
  currentProgress: number;
  className?: string;
}) => {
  return (
    <div className="w-full overflow-hidden rounded-full bg-gray-400">
      <div
        className={cn(`bg-cta h-2 rounded-full transition-all ${className}`)}
        style={{ width: `${currentProgress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
