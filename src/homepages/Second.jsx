import React from 'react'
import pic from '../image/hands.png'
import pic2 from '../image/target.png'
import pic3 from '../image/task.png'

function Second() {
  return (
    <div className="max-w-5xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <img
        src={pic}
        alt="Hands"
        className="w-full h-60 object-cover rounded-xl border-4 border-gray-300"
      />
      <img
        src={pic2}
        alt="Target"
        className="w-full h-60 object-cover rounded-xl border-4 border-gray-300"
      />
      <img
        src={pic3}
        alt="Task"
        className="w-full h-60 object-cover rounded-xl border-4 border-gray-300"
      />
    </div>
  );
}

export default Second
