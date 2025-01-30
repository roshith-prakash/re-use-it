import { ChangeEventHandler } from "react";

const Slider = ({
  value,
  changeValueBySlider,
  min,
  max,
  className,
}: {
  min: number;
  max: number;
  value: number;
  changeValueBySlider: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}) => {
  return (
    <input
      value={value}
      min={min}
      onChange={changeValueBySlider}
      max={max}
      type="range"
      className={`accent-cta dark:accent-white ${className}`}
    />
  );
};

export default Slider;
