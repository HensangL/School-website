import React from 'react';
import bg from '../image/bg.jpeg';
import hands from '../image/hands.png';
import target from '../image/target.png';
import task from '../image/task.png';

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center text-white px-4 py-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Main content box */}
      <div className="relative p-8 rounded-xl max-w-5xl w-full text-center overflow-hidden">
        {/* Gradient background with 20% opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#410445] via-[#FF2DF1] to-[#F6DC43] opacity-50 rounded-xl z-0" />

        {/* Foreground content */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-6">About Our School</h1>
          <p className="mb-8 text-lg">
            Welcome to our school – a place where knowledge, creativity, and discipline come together to shape future leaders. Our institution is committed to providing holistic education that empowers students academically, socially, and emotionally.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img src={hands} alt="Mission" className="h-24 w-24 mb-4" />
              <h2 className="text-xl font-semibold">Our Mission</h2>
              <p className="text-sm mt-2">
                To provide quality education in a nurturing environment that inspires lifelong learning and personal growth.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src={target} alt="Vision" className="h-24 w-24 mb-4" />
              <h2 className="text-xl font-semibold">Our Vision</h2>
              <p className="text-sm mt-2">
                To be a center of academic excellence, preparing students for the challenges of a dynamic world.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src={task} alt="Goals" className="h-24 w-24 mb-4" />
              <h2 className="text-xl font-semibold">Our Goals</h2>
              <p className="text-sm mt-2">
                To foster critical thinking, ethical values, and a passion for learning through innovative teaching methods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
