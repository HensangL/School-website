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
    <div className="relative w-full max-w-full mx-auto">
      {/* Image Display */}
      <div className="overflow-hidden rounded-2xl shadow-lg h-[450px] bg-gray-100 flex items-center justify-center">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="h-full object-contain transition duration-500"
        />
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-3 rounded-full shadow"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-3 rounded-full shadow"
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
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
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
