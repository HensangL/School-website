import React from 'react';
import bg from '../image/bg.jpeg';

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Glass container */}
      <div className="bg-gradient-to-r from-[#410445] via-[#FF2DF1] to-[#F6DC43] opacity-50 rounded-xl z-0 border-white/20 rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
        <p className="mb-4 text-lg font-medium">📍 <span className="font-semibold">Address:</span> 123 School Street, Kathmandu, Nepal</p>
        <p className="mb-4 text-lg font-medium">📞 <span className="font-semibold">Phone:</span> +977-9800000000</p>
        <p className="mb-4 text-lg font-medium">✉️ <span className="font-semibold">Email:</span> info@ourschool.edu.np</p>
        <p className="mt-6  text-1xl">Open: Sunday – Friday | 9:00 AM – 4:00 PM</p>
      </div>
    </div>
  );
};

export default Contact;
