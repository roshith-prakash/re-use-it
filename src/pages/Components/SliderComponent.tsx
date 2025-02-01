import { useEffect, useState } from "react";
import { CodeBlock, Slider } from "../../components";

const SliderCode = `import { ChangeEventHandler } from "react";

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
  className?:string;
}) => {
  return (
    <input
      value={value}
      min={min}
      onChange={changeValueBySlider}
      max={max}
      type="range"
      className={\`accent-cta dark:accent-white \${className}\`}
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

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Slider</h1>
      <h2 className="mt-8 py-5 text-center">
        A sleek, customizable slider/range component with smooth transitions,
        responsive design, and modern styling for precise value selection.
      </h2>

      <div className="mx-auto max-w-lg py-10">
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

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
            <b>value ( number , required ):</b> The current value of the slider.{" "}
          </li>
          <li>
            {" "}
            <b>min ( number , required ):</b> The minimum value of the slider.{" "}
          </li>
          <li>
            {" "}
            <b>max ( number , required ):</b> The maximum value of the slider.{" "}
          </li>
          <li>
            {" "}
            <b>changeValueBySlider ( function , required ):</b> The function to
            be executed when the slider is interacted with.{" "}
          </li>
          <li>
            {" "}
            <b>className (string, optional):</b> To override the styles for the
            slider.
          </li>
        </ul>
      </div>

      <h3>Slider.tsx</h3>
      <CodeBlock code={SliderCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default SliderComponent;
