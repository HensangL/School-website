import React from 'react';

const Financecard = ({ value, label, img, tasks }) => {
  return (
    <div className="w-72 sm:w-64 md:w-72 lg:w-80 xl:w-96 max-w-full rounded-2xl shadow-lg bg-gradient-to-br from-pink-400 via-fuchsia-400 to-purple-500 p-4 hover:scale-105 transition-transform duration-300">
      <div className="flex justify-center mb-4">
        <img src={img} alt="Finance Icon" className="w-20 h-20 sm:w-24 sm:h-24 object-contain p-2 rounded-full bg-white shadow" />
      </div>

      <div className="bg-white rounded-2xl p-4 space-y-2">
        <div className="text-xl sm:text-2xl font-bold text-purple-700 text-center">{value}</div>
        <div className="text-sm text-gray-600 text-center">{tasks}</div>
        <div className="text-base sm:text-lg font-medium text-gray-800 text-center">{label}</div>
      </div>
    </div>
  );
};

export default Financecard;
