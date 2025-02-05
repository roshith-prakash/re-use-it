const Badge = ({ text, className }: { text: string; className?: string }) => {
  return (
    <p className={`bg-cta w-fit rounded-lg px-4 py-1 text-white ${className}`}>
      {text}
    </p>
  );
};

export default Badge;
