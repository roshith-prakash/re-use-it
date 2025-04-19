import { useEffect, useState } from "react";
import { CodeBlock, Slider } from "@/components";

const SliderCode = `import { cn } from "@/lib/utils";
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
      className={cn(\`accent-cta dark:accent-white \${className}\`)}
    />
  );
};

export default Slider;
`;

const usingCode = `import Slider from './Slider';
import {useState} from "react"

const App = () => {

    const [sliderValue, setSliderValue] = useState<number>(0);
  
    return (
        <>
            <Slider
              min={0}
              max={100}
              value={sliderValue}
              changeValueBySlider={(e) => {
                setSliderValue(Number(e.target.value));
              }}
            />
        </>
  )
}
`;

const SliderComponent = () => {
  const [currentValue, setSliderValue] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Slider | Re-Use-it!";
  }, []);

  const [codeWindow, setCodeWindow] = useState<boolean>(false);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-4xl font-medium">Slider</h1>
      <h2 className="py-5">
        A sleek, customizable slider/range component with smooth transitions,
        responsive design, and modern styling for precise value selection.
      </h2>
      <div className="mx-auto my-20 flex flex-wrap items-center justify-center gap-8 rounded-xl px-5 py-10 shadow-lg md:w-fit md:min-w-lg md:px-20 dark:shadow dark:shadow-white">
        <Slider
          min={0}
          max={100}
          value={currentValue}
          className="w-full"
          changeValueBySlider={(e) => {
            setSliderValue(Number(e.target.value));
          }}
        />
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
              Copy and save the component as Slider.tsx
            </h3>
            <CodeBlock code={SliderCode} language="tsx" />
          </div>
        ) : (
          <div>
            <h3 className="py-2 pl-1 italic">
              Add the component using the Re-use-it! CLI.
            </h3>
            <CodeBlock code={`npx reuseit add Slider`} language="bash" />
          </div>
        )}
      </div>

      {/* Props Documentation */}
      <div className="py-14">
        <p className="text-2xl font-semibold">Props</p>
        <ul className="mt-8 list-disc py-2 pl-8 leading-8">
          <li>
            <b>value (number, required):</b> The current value of the slider.
          </li>
          <li>
            <b>min (number, required):</b> The minimum value of the slider.
          </li>
          <li>
            <b>max (number, required):</b> The maximum value of the slider.
          </li>
          <li>
            <b>changeValueBySlider (function, required):</b> The function to be
            executed when the slider is interacted with.
          </li>
          <li>
            <b>className (string, optional):</b> To override the styles for the
            slider.
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

export default SliderComponent;
