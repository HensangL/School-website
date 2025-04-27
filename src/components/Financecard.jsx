import React from 'react';
import cash from '../image/money.png'

const Financecard = ({ value, label }) => {
  return (
    <div className=" text-center  shadow-md p-6 w-64 
                   ">
                    <img src={cash} className='w-[106px]'/>
      <div className="font-bold font-sans text-black justify-center">${value}</div>
      <div className="text-lg font-light mt-2 text-black">{label}</div>
    </div>
  );
};

export default Financecard;