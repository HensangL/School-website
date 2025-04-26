import React from 'react';

const Card = ({ value, label }) => {
  return (
    <div className="mt-20 text-center rounded-4xl shadow-md p-6 w-64 
                   bg-gradient-to-r from-blue-800 via-blue-200 to-purple-200">
      <div className="text-4xl font-bold text-black justify-center">{value}</div>
      <div className="text-lg mt-2 text-black">{label}</div>
    </div>
  );
};

export default Card;