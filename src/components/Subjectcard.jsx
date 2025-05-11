import React from 'react'

const Subjectcard = ({id,section,students,date,subject}) => {
  return (
   <div className="w-60 p-5 bg-gradient-to-br from-fuchsia-200 to-fuchsia-300 rounded-2xl shadow-md hover:shadow-lg transition-shadow space-y-2">
  <h1 className='text-xl font-bold text-blue-700'>{`Grade ${id} ${subject}`}</h1>
  <h2 className='text-base font-semibold text-gray-800'>Section {section}</h2>
  <p className='text-sm text-gray-700'>{students} Students</p>
  <p className='text-sm  bg-white w-20 rounded-xl '>{date}</p>
</div>

  )
}

export default Subjectcard