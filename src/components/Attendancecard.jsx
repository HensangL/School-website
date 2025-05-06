import React from 'react';

const Financecard = ({ value, label ,img}) => {
  return (
    <div className=" text-center  shadow-md p-6 w-64 border-2 rounded-4xl bg-[#F8F8E1]                   ">
                    <img src={img} className='w-[106px] ml-12'/>
      <div className="font-bold font-sans text-black justify-center">{value}</div>
      <h2 className='text-2xl font-extralight'>Student attended</h2>
      <div className="text-lg font-light mt-2 text-black">{label}</div>
    </div>
  );
};

export default Financecard;