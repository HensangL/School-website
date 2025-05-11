import React from 'react'
import Teachersidebar from '../components/Teachersidebar'
import Subjectcard from '../components/Subjectcard'
import site from '../image/boiboi.jpg'
function Classmycourse() {
  return (
    <div>
        <Teachersidebar/>
              <div className="ml-96 flex-1 p-8 space-y-8">

        <div className='bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300'>
                  <h1 className='text-white text-lg mb-2'>May 8</h1>
                  <div className='flex justify-between items-center'>
                    <div>
                      <h1 className='text-3xl font-semibold text-white'>Welcome Sita Ma'am</h1>
                      <p className='text-purple-200 mt-2'>Always stay updated on your students and schedule</p>
                    </div>
                    <img src={site} alt="Sita maam" className='w-32 h-32 rounded-full object-cover border-4 border-purple-300 hover:scale-105 transition-transform duration-300' />
                  </div></div>
                </div>
        <div className='ml-100 '>
            <h1 className='text-center mt-10 text-2xl font-medium'>My courses</h1>
            <div className='mt-10 flex gap-7'>
            <Subjectcard section="A" students="50" id="10" subject="Physics" date="5/11/2025"/>
                        <Subjectcard section="b" students="40" id="9" subject="Biology" date="6/1/2025"/>
            <Subjectcard section="H" students="30" id="7" subject="English" date="5/10/2025"/>
            <Subjectcard section="W" students="20" id="4" subject="Botany" date="4/21/2025"/>

            </div>


        </div>
    </div>
  )
}

export default Classmycourse