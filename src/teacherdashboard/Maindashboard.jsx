import React from 'react'
import Teachersidebar from '../components/Teachersidebar'
import sita from '../image/boiboi.jpg'

function Maindashboard() {
  return (
    <div className="flex">
      <Teachersidebar />

      <div className="ml-96 flex-1 p-8 space-y-8">
        {/* Welcome Card */}
        <div className='bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300'>
          <h1 className='text-white text-lg mb-2'>May 8</h1>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='text-3xl font-semibold text-white'>Welcome Sita Ma'am</h1>
              <p className='text-purple-200 mt-2'>Always stay updated on your students and schedule</p>
            </div>
            <img src={sita} alt="Sita maam" className='w-32 h-32 rounded-full object-cover border-4 border-purple-300 hover:scale-105 transition-transform duration-300' />
          </div>
        </div>

        {/* Cards Row */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Top Students */}
          <div className='bg-gradient-to-br from-indigo-700 to-purple-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <h2 className='text-xl font-semibold text-[#E0BBE4] mb-4'>Your Top Students</h2>
            <ul className='space-y-3'>
              {['Student 1', 'Student 2', 'Student 3', 'Student 4'].map((student, index) => (
                <li
                  key={index}
                  className='p-3 rounded-xl bg-purple-500 text-white hover:bg-purple-400 transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer'
                >
                  {student}
                </li>
              ))}
            </ul>
          </div>

          {/* Attendance */}
          <div className='bg-gradient-to-br from-indigo-700 to-purple-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <h2 className='text-xl font-semibold text-[#E0BBE4] mb-4'>Attendance</h2>
            <ul className='space-y-3'>
              {['Student 1', 'Student 2', 'Student 3', 'Student 4'].map((student, index) => (
                <li
                  key={index}
                  className='p-3 rounded-xl bg-purple-500 text-white hover:bg-purple-400 transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer'
                >
                  {student}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Maindashboard
