import React from 'react'
import logo from '../image/target.png'
import { Link } from 'react-router'
function Teachersidebar() {
  return (
    <div>
        <nav className='ml-5 mt-6 rounded-2xl flex flex-col  bg-gradient-to-b from-[#925FE2] to-[#3c0f89] w-[256px] h-[1024px] fixed left-0 top-0  p-4'>
            <ul className='flex flex-col gap-3 '>
                <img src={logo} className='w-30' />
                <li className='px-4 p-4 hover:bg-[#3C0Fa1] rounded-2xl text-white font-semibold'><Link to='/maindashboard'>Dashboard</Link></li>
                <li className='px-4 p-4 hover:bg-[#3C0Fa1] rounded-2xl text-white font-semibold'><Link to='/classmycourse'>Class/Mycourses</Link></li>
                                <li className='px-4 p-4 hover:bg-[#3C0Fa1] rounded-2xl text-white font-semibold'><Link to='/teacherattendance'>Attendance</Link></li>
                                <li className='px-4 p-4 hover:bg-[#3C0Fa1] rounded-2xl text-white font-semibold'><Link to='/material'>Materials</Link></li>

                
                </ul>
        </nav>
    </div>
  )
}

export default Teachersidebar