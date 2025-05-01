import React from 'react'
import Navbar from '../components/Navbar'
import team from '../image/Teacher.jpg'

function Team() {
  return (
    <div>
        <Navbar/>
        <h1 className='text-4xl md:text-5xl font-bold text-center text-purple-800'>Meet our teachers team</h1>
        <div className='max-w-6xl mx-auto px-4 md:px-8 mt-12 flex flex-col md:flex-row items-center gap-10'>
        <p className='bg-white p-6 rounded-lg shadow-md text-lg text-gray-700 leading-relaxed italic border-l-4 border-purple-600'>Our teachers are the heart of our school community. With passion, dedication, and deep expertise, they guide and inspire our students every day. Beyond delivering lessons, they mentor, encourage, and nurture each child’s unique abilities, helping them grow academically, socially, and emotionally. Committed to continuous learning and innovation, our teachers create engaging classrooms where curiosity is sparked and lifelong learning begins.
            <img src={team} className='transition duration-300 transform hover:scale-105
 w-48 h-48 md:w-60 md:h-60 rounded-full shadow-lg object-cover' />

</p>
</div>
    </div>
  )
}

export default Team