import React from 'react';
import pic from '../image/hands.png';
import pic2 from '../image/task.png';
import pic3 from '../image/target.png';

function Info() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row mt-20 items-center gap-8">
        <div className="lg:ml-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl border-b-4 border-purple-600 mb-4">OUR VISION</h1>
          <p className="bg-white p-6 rounded-lg shadow-md text-base sm:text-lg text-gray-700 leading-relaxed italic border-l-4 border-purple-600">
            Our vision is to nurture responsible, confident, and capable learners by providing a dynamic and inclusive learning environment. We aim to cultivate creativity, critical thinking, and lifelong learning habits that prepare students for success in a rapidly evolving world.
          </p>
        </div>
        <img src={pic} className="w-60 sm:w-72 md:w-80 lg:w-[400px] rounded-b-full" />
      </div>

      <div className="flex flex-col-reverse lg:flex-row mt-20 items-center gap-8">
        <img src={pic2} className="w-60 sm:w-72 md:w-80 lg:w-[400px] rounded-b-full" />
        <div className="lg:mr-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">OUR VISION</h1>
          <p className="border-r-4 rounded-2xl py-6 px-5 text-base sm:text-lg border-green-400 italic text-gray-700">
            We strive to provide a holistic education that empowers students to become socially responsible citizens. Our school encourages academic excellence, leadership, and respect for diversity, helping students reach their full potential in a supportive environment.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-20 items-center gap-8">
        <div className="lg:ml-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">OUR VISION</h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic">
            At our school, we believe in the power of education to transform lives. Through innovative teaching methods and a strong sense of community, we foster a love for learning and encourage every student to dream big, act boldly, and achieve greatness.
          </p>
        </div>
        <img src={pic3} className="w-60 sm:w-72 md:w-80 lg:w-[400px] rounded-b-full" />
      </div>
    </div>
  );
}

export default Info;
