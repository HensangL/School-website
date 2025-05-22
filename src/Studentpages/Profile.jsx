import React from 'react'
import Studentsidebar from '../components/Studentsidebar'
import pfp from '../image/makise.png'

function Profile() {
  return (
    <div>
        
        <Studentsidebar/>

<div class=" items-center justify-center h-screen">
            <h1 className='text-center text-2xl
             font-serif mt-10'>Profile</h1>
             <div className='ml-100'>
                <img src={pfp} className='w-20'/>
             </div>
        </div>
    </div>
  )
}

export default Profile