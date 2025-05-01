import React from 'react';
import pic from '../image/hands.png';
import pic2 from '../image/target.png';
import pic3 from '../image/task.png';

function Second() {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[pic, pic2, pic3].map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="w-full aspect-[4/3] object-cover rounded-2xl border-4 border-purple-800 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        />
      ))}
    </div>
  );
}

export default Second;
