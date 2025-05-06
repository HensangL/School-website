import React from 'react';

const Coursecard = ({ value, label, img, teachername, contact }) => {
  return (
    <div className="bg-[#c983e0] shadow-md rounded-2xl p-5 w-full max-w-xs mx-auto text-white transition-transform transform hover:-translate-y-1 hover:shadow-xl">

      {/* Course Image */}
      <img
        src={img}
        alt="Course Icon"
        className='w-24 h-24 mx-auto mb-4 rounded-xl object-cover shadow-sm'
      />

      {/* Course Name */}
      <div className="text-xl font-bold text-center mb-2">{value}</div>

      {/* Managed By Label */}
      <h2 className='text-sm font-medium bg-white text-purple-700 rounded-full px-3 py-1 inline-block mb-4 mx-auto text-center'>
        Course managed by
      </h2>

      {/* Teacher Info */}
      <div className='flex items-center gap-4 bg-white rounded-xl p-3 text-gray-900 shadow-inner'>
        <img
          src={label}
          alt="Teacher"
          className='w-14 h-14 rounded-full object-cover border-2 border-purple-400'
        />
        <div className='flex flex-col'>
          <h1 className='font-semibold text-md'>{teachername}</h1>
          <h2 className='text-sm text-gray-600'>{contact}</h2>
        </div>
      </div>

    </div>
  );
};

export default Coursecard;
