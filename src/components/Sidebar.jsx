import React from 'react'
import { Link } from 'react-router'
import logo from '../image/target.png'
function Sidebar() {
  return (
    <div className="flex flex-col gradient-sidebar w-64 h-screen fixed left-0 top-0 shadow-xl p-4">
  <nav className="mt-6">
    <ul className="space-y-3">
      <li><img src={logo} className='w-40'/></li>
      <li className="group">
        <Link to="/studentpage" className=" text-white flex items-center p-3 rounded-lg font-medium  hover:bg-amber-500 hover:text-white-900 transition-all duration-200 group-hover:translate-x-1">
          <span className="mr-3">👨‍🎓</span>
          Dashboard
        </Link>
      </li> 
      <li className="group">
        <Link to="/teacherpage" className=" text-white flex items-center p-3 rounded-lg font-medium text-white-800 hover:bg-amber-500 hover:text-white-900 transition-all duration-200 group-hover:translate-x-1">
          <span className="mr-3">👨‍🎓</span>
          Staffs
        </Link>
      </li><li className="group">
        <Link to="/attendance" className=" text-white flex items-center p-3 rounded-lg font-medium text-white-800 hover:bg-amber-500 hover:text-white-900 transition-all duration-200 group-hover:translate-x-1">
          <span className="mr-3">👨‍🎓</span>
          Attendance
        </Link>
      </li><li className="group">
        <Link to="/grades" className=" text-white flex items-center p-3 rounded-lg font-medium text-white-800 hover:bg-amber-500 hover:text-white-900 transition-all duration-200 group-hover:translate-x-1">
          <span className="mr-3">👨‍🎓</span>
          Grades
        </Link>
      </li><li className="group">
        <Link to="/admission" className=" text-white flex items-center p-3 rounded-lg font-medium text-white-800 hover:bg-amber-500 hover:text-white-900 transition-all duration-200 group-hover:translate-x-1">
          <span className="mr-3">👨‍🎓</span>
          Admission
        </Link>
      </li>           
    </ul>
  </nav>
  
  {/* Optional bottom section */}
  <div className="mt-auto pb-6">
    <div className="p-3 text-sm text-amber-900 bg-amber-500/30 rounded-lg">
      School Management System
    </div>
  </div>
</div>
  )
}

export default Sidebar
