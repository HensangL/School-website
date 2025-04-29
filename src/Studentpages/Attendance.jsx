import React from 'react'
import Studentsidebar from '../components/Studentsidebar'

import Attendancecard from '../components/Attendancecard'
import biology from '../image/biology.png'
import chemistry from '../image/flask.png'
import physics from '../image/atom.png'

function Registration() {
  return (
    <div>
        <Studentsidebar/>
        <div>

        <h1 className='ml-75 mt-7 text-2xl font-semibold font-serif'>Attendance</h1>
        <div className='flex gap-6'>
        <div className='ml-89 flex gap-8 mt-5'>
        <Attendancecard value="50/100" label="Biology" img={biology}/>
        <Attendancecard value="50/100" label="Physics" img={physics}/>
        <Attendancecard value="50/100" label="Chemistry" img={chemistry}/>
        </div>
<div className='border-2 w-75'> 
  <p className='text-2xl ml-20'>Announcements</p>
  <div className='ml-8'>
    Academics la;kdfjd;alkfja;ldkfja;
    Examlkfdja;ldkfjaafdads
    New year
  </div>

</div>
        </div>
        <div className='ml-75 mt-10 '>
          <p className='text-4xl font-semibold'>Todays time table</p>
          <div className="overflow-x-auto">
  <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md mt-8">
    <thead className="bg-[#925FE2] text-white">
      <tr>
        <th className="py-3 px-4 text-left font-semibold">Time</th>
        <th className="py-3 px-4 text-left font-semibold">Room No</th>
        <th className="py-3 px-4 text-left font-semibold">Subject</th>
        <th className="py-3 px-4 text-left font-semibold">Type</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      <tr className="hover:bg-gray-50 transition-colors ">
        <td className="py-3 px-4 font-medium">10:00 AM</td>
        <td className="py-3 px-4">1</td>
        <td className="py-3 px-4">Physics</td>
        <td className="py-3 px-4">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
            Lecture
          </span>
        </td>
      </tr>
      <tr className="hover:bg-gray-50 transition-colors">
        <td className="py-3 px-4 font-medium">11:00 AM</td>
        <td className="py-3 px-4">2</td>
        <td className="py-3 px-4">Biology</td>
        <td className="py-3 px-4">
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
            Practical
          </span>
        </td>
      </tr>
      <tr className="hover:bg-gray-50 transition-colors">
        <td className="py-3 px-4 font-medium">12:00 PM</td>
        <td className="py-3 px-4">3</td>
        <td className="py-3 px-4">Chemistry</td>
        <td className="py-3 px-4">
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
            Practical
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
        
        </div>
    </div>
  )
}

export default Registration