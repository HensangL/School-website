import React, { useState } from "react";

const images = [
  { src: "/src/image/hands.png", alt: "Hands" },
  { src: "/src/image/target.png", alt: "Target" },
  { src: "/src/image/task.png", alt: "Task" },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-screen mx-auto">
      {/* Image Display */}
      <div className="overflow-hidden rounded-none shadow h-[450px] bg-gray-100 flex items-center justify-center">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="h-full w-full object-contain transition duration-500"
        />
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-purple-800/70 hover:bg-purple-800 text-white p-3 rounded-full shadow"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-purple-800/70 hover:bg-purple-800 text-white p-3 rounded-full shadow"
      >
        &#8594;
      </button>

      {/* Buttons to go directly */}
      <div className="flex justify-center mt-4 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              index === currentIndex
                ? "bg-purple-800 text-white"
                : "bg-purple-200 text-purple-800 hover:bg-purple-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
