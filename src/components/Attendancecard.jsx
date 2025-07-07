import React from 'react';

const Financecard = ({ value, label, img }) => {
  return (
    <div className="text-center shadow-md p-6 w-64 sm:w-56 md:w-64 lg:w-72 xl:w-80 max-w-full border-2 rounded-4xl bg-[#F8F8E1]">
      <img src={img} className="w-[106px] mx-auto mb-2" />
      <div className="font-bold font-sans text-black text-lg sm:text-xl">{value}</div>
      <h2 className="text-xl sm:text-2xl font-extralight">Student attended</h2>
      <div className="text-base sm:text-lg font-light mt-2 text-black">{label}</div>
    </div>
  );
};

export default Financecard;
