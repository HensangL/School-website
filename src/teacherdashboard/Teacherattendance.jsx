import React, { useState } from 'react'
import Teachersidebar from '../components/Teachersidebar'

function Teacherattendance() {
  const[showclass,setshowclass ]=useState(null)

  return (
    <div>
        <Teachersidebar/>
        <div>
        <button onClick={useState('class-1')}> click kme</button>
        </div>
    </div>
  )
}

export default Teacherattendance