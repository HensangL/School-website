import React from 'react'
import logo from '../image/target.png'
function Intro() {
  return (
    <div className='items-center '>
        <p className='text-5xl text-center font-extrabold text-purple-600'> Introduction</p>
        <div className='flex gap-0'>
        <p className='mx-auto text-[#393E46] p-4 py-10 ml-100 text-center mt-10 border-l-4 border-purple-300 rounded-3xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit quasi cumque itaque ipsa a adipisci eum doloremque modi quis deserunt, quas harum autem fugiat laboriosam facere laborum provident quo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat perferendis minus dignissimos esse, molestiae corporis accusamus maxime impedit repellendus architecto modi sequi voluptate magnam corrupti excepturi maiores quis sapiente eaque.</p> 
        <img src={logo} className='transition duration-300 transform hover:scale-105
 w-48 h-48 mr-40' />
        </div>
        <div className='flex ml-80 mt-15 gap-60 text-2xl text-fuchsia-800 font-light'>
            <p>1000+ Students</p>
            <p>100% Excellence</p>
            <p>100% Service</p>

        </div>
    </div>
  )
}

export default Intro