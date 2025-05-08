import React from 'react'
import Studentsidebar from '../components/Studentsidebar'
import Assignmentcard from '../components/Assignmentcard'
import biology from '../image/biology.png'
import chemistry from '../image/flask.png'
import physics from '../image/atom.png'
function Assignments() {
  return (
    <div>
        <Studentsidebar/>
        <h1 className='text-center text-3xl text-blue-700 font-bold mt-5'>Your Assignments</h1>   
        <div className=' ml-100 mt-20 flex gap-6'>
        
        <Assignmentcard img={biology} value="Biology" label="Practical 1 to 5" tasks="Your assignments:"/>
        <Assignmentcard img={chemistry} value="Chemistry" label="Practical 1 to 5" tasks="Your assignments:"/>

        <Assignmentcard img={physics} value="Physics" label="Practical 1 to 5" tasks="Your assignments:"/>

            </div>      
    </div>
  )
}

export default Assignments