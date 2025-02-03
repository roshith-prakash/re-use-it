import { useState } from "react";

// Needs Work
const Carousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="relative mx-auto w-full max-w-3xl overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="h-64 w-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="bg-opacity-50 hover:bg-opacity-75 absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black p-2 text-white"
      >
        ◀
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="bg-opacity-50 hover:bg-opacity-75 absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black p-2 text-white"
      >
        ▶
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
