import { useEffect } from "react";
import { CodeBlock, Carousel } from "../../components";

const CarouselCode = `import { useState, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const itemWidth = carouselRef.current.offsetWidth;
    const newIndex = Math.round(scrollLeft / itemWidth); // Determine the closest index
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    if (!carouselRef.current) return;
    const itemWidth = carouselRef.current.offsetWidth;
    carouselRef.current.scrollTo({
      left: (currentIndex + 1) * itemWidth,
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    if (!carouselRef.current) return;
    const itemWidth = carouselRef.current.offsetWidth;
    carouselRef.current.scrollTo({
      left: (currentIndex - 1) * itemWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className={\`relative mx-auto w-full overflow-hidden \${className}\`}>
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth transition-transform duration-500 ease-in-out [&::-webkit-scrollbar]:h-0"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={\`Slide \${index + 1}\`}
            className="min-h-80 w-full flex-shrink-0 snap-start object-cover"
          />
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        disabled={currentIndex == 0}
        className="absolute top-1/2 left-0 hidden h-full -translate-y-1/2 bg-black/25 p-2 text-white transition-all duration-300 hover:bg-black/50 md:block"
      >
        <IoIosArrowBack className="text-xl" />
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        disabled={currentIndex == images?.length - 1}
        className="absolute top-1/2 right-0 hidden h-full -translate-y-1/2 bg-black/25 p-2 text-white transition-all duration-300 hover:bg-black/50 md:block"
      >
        <IoIosArrowForward className="text-xl" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (carouselRef.current) {
                const itemWidth = carouselRef.current.offsetWidth;
                carouselRef.current.scrollTo({
                  left: index * itemWidth,
                  behavior: "smooth",
                });
              }
              setCurrentIndex(index);
            }}
            className={\`h-2 w-2 cursor-pointer rounded-full \${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }\`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;`;

const usingCode = `import  Carousel  from "./Carousel";


const App = () => {

  return (
  <>
   <Carousel
          className="max-w-3xl"
          images={[
            "https://picsum.photos/id/0/5000/3333",
            "https://picsum.photos/id/1/5000/3333",
            "https://picsum.photos/id/2/5000/3333",
            "https://picsum.photos/id/3/5000/3333",
            "https://picsum.photos/id/4/5000/3333",
          ]}
        />
  </> );
}`;

const CarouselComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Carousel | Re-Use-it!";
  }, []);

  return (
    <div className="dark:bg-darkbg min-h-screen p-10 dark:text-white">
      <h1 className="text-center text-2xl font-medium">Image Carousel</h1>
      <h2 className="mt-8 py-5 text-center">
        A Carousel component to display images.
      </h2>
      <div className="flex flex-col items-center gap-8 py-10">
        <Carousel
          className="max-w-3xl"
          images={[
            "https://picsum.photos/id/0/5000/3333",
            "https://picsum.photos/id/1/5000/3333",
            "https://picsum.photos/id/2/5000/3333",
            "https://picsum.photos/id/3/5000/3333",
            "https://picsum.photos/id/4/5000/3333",
          ]}
        />
      </div>

      <div className="py-8">
        <p className="text-lg font-medium underline">Props</p>
        <ul className="list-disc pt-4 pl-8 leading-8">
          <li>
            {" "}
            <b>images (Array(string), required):</b> The links to the images to
            be displayed in the Carousel.
          </li>
          <li>
            {" "}
            <b>className (string, optional):</b> To override default styles.
          </li>
        </ul>
      </div>

      <h3 className="py-2 pl-1 italic">Carousel.tsx</h3>
      <CodeBlock code={CarouselCode} language="tsx" />

      <h3 className="mt-8 py-2 pl-1 italic">App.tsx</h3>
      <CodeBlock code={usingCode} language="tsx" />
    </div>
  );
};

export default CarouselComponent;
