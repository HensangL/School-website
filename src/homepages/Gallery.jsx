import React from "react";

const Gallery = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left main image */}
        <div className="md:col-span-2">
          <img
            src="/src/image/hands.png"
            alt="Main"
            className="w-full h-[300px] object-cover rounded-2xl border-4 border-gray-300"
          />
        </div>

        {/* Right column images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/src/image/target.png"
            alt="Target"
            className="w-full h-[140px] object-cover rounded-2xl border-4 border-gray-300"
          />
          <img
            src="/src/image/task.png"
            alt="Task"
            className="w-full h-[140px] object-cover rounded-2xl border-4 border-gray-300"
          />

          {/* Bottom image (you can change this one) */}
          <img
            src="/src/image/task.png"
            alt="Extra"
            className="col-span-2 w-full h-[150px] object-cover rounded-2xl border-4 border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
