import React from 'react';
import TargetImg from '../image/target.png';
import TaskImg from '../image/task.png';
import HandsImg from '../image/hands.png';

const Third = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
          <div className="h-40 overflow-hidden">
            <img 
              src={HandsImg} 
              alt="Critical Thinking" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Critical Thinking in classroom</h3>
            <p className="text-sm text-gray-600">
              One day in a fruit shop a child was insisting the "golden apple" which was not an apple because it is.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
          <div className="h-40 overflow-hidden">
            <img 
              src={TargetImg} 
              alt="Limitless" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Limitless - Personal</h3>
            <p className="text-sm text-gray-600">
              Not to be missed program for SEE graduates at Samriddhi School/College, Balaju, Kathmandu - Motivati...
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
          <div className="h-40 overflow-hidden">
            <img 
              src={TaskImg} 
              alt="How to Choose" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">How to Choose a S...</h3>
            <p className="text-sm text-gray-600">
              You're done with your SEE, and you're looking for your next big venture that's going to take you for...
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
          <div className="h-40 overflow-hidden">
            <img 
              src={TaskImg} 
              alt="How to Choose a Course" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">How To Choose A C...</h3>
            <p className="text-sm text-gray-600">
              Choosing a course is one of the most mind-boggling things that a person has to do in his/her life. U...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third