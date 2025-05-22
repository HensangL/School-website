import React from 'react'
import Studentsidebar from '../components/Studentsidebar'
import pfp from '../image/makise.png'

function Profile() {
  return (
    <div>
        
        <Studentsidebar/>

<div class=" items-center justify-center h-screen">
            <h1 className='text-center text-2xl
             font-serif mt-30'>Profile</h1>
             <div className='flex flex-col'>
             <div className='ml-150 mt-20 flex'>
                <img src={pfp} className='w-60 rounded-4xl'/><br />

                <div className='ml-30'>
                    <ul>
                        <li className='p-2'>Name: <br /> <h1 className='font-light'>Username</h1></li>
                        <li className='p-2'>Email: <br /> <h1 className='font-light'>username@gmail.com</h1></li>
                        <li className='p-2'>Phone no: <br /> <h1 className='font-light'>9812345678</h1></li>
                        <li className='p-2'>Address: <br /> <h1 className='font-light'>Dhankuta-6</h1></li>

<li><button className='hover:scale-105 hover:cursor-pointer p-3 border-2 rounded-2xl border-blue-800 w-55'><p className='text-blue-800'>Edit profile</p></button></li>       
                 </ul>
                        </div>
             </div>
             <div className='flex gap-2 mt-5 ml-150'>
                             <button className='hover:scale-105 hover:cursor-pointer p-3 border-2 rounded-2xl border-blue-800 w-23'><p className='text-blue-800'>Logo</p></button>                <button className='hover:scale-105 hover:cursor-pointer p-3 border-2 rounded-2xl border-blue-800 w-45'><p className='text-blue-800'>Upload documents</p></button>
                             </div>

             </div>
        </div>
    </div>
  )
}

export default Profile