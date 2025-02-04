import { useState, useRef } from "react";
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
    <div
      className={`bg-grey/50 dark:bg-secondarydarkbg/50 relative mx-auto w-full overflow-hidden ${className}`}
    >
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth transition-transform duration-500 ease-in-out [&::-webkit-scrollbar]:h-0"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="min-h-80 w-full flex-shrink-0 snap-start object-cover"
          />
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        disabled={currentIndex == 0}
        className="absolute top-1/2 left-0 hidden h-full -translate-y-1/2 cursor-pointer bg-black/25 p-2 text-white transition-all duration-300 hover:bg-black/50 md:block"
      >
        <IoIosArrowBack className="text-xl" />
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        disabled={currentIndex == images?.length - 1}
        className="absolute top-1/2 right-0 hidden h-full -translate-y-1/2 cursor-pointer bg-black/25 p-2 text-white transition-all duration-300 hover:bg-black/50 md:block"
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
            className={`h-2 w-2 cursor-pointer rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
