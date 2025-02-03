const Badge = ({ text, className }: { text: string; className?: string }) => {
  return (
    <p
      className={`bg-cta w-fit rounded-full px-4 py-2 text-white ${className}`}
    >
      {text}
    </p>
  );
};

export default Badge;
