import React from 'react';
import logo from '../image/target.png';

function Intro() {
  return (
    <div className='items-center px-4 sm:px-6 md:px-12'>
      <p className='text-4xl sm:text-5xl text-center font-extrabold text-purple-600 mt-10'>Introduction</p>

      <div className='flex flex-col lg:flex-row items-center justify-center mt-10 gap-6'>
        <p className='text-[#393E46] p-6 text-center border-l-4 border-purple-300 rounded-3xl text-base sm:text-lg leading-relaxed max-w-3xl'>
          Our school is committed to delivering quality education through a balanced blend of academic excellence, extracurricular engagement, and character development. We create an inclusive learning environment where students are encouraged to grow intellectually, socially, and emotionally—preparing them to thrive in a dynamic global society.
        </p> 
        <img
          src={logo}
          className='transition duration-300 transform hover:scale-105 w-40 h-40 sm:w-48 sm:h-48 lg:mr-20'
        />
      </div>

      <div className='flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-20 text-xl sm:text-2xl text-fuchsia-800 font-light mt-12'>
        <p>1000+ Students</p>
        <p>100% Excellence</p>
        <p>100% Service</p>
      </div>
    </div>
  );
}

export default Intro;
