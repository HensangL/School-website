import React from 'react'
import Navbar from '../components/Navbar'
import makise from '../image/makise.png'
import Footer from '../homepages/Footer'
function Chairman() {
  return (
    <div>
        <Navbar/>
        <h1 className='text-4xl md:text-5xl font-bold text-center text-purple-800'>Here is a message from the chairmen</h1>
        <div className='max-w-6xl mx-auto px-4 md:px-8 mt-12 flex flex-col md:flex-row items-center gap-10 '>
            <p className='bg-white p-6 rounded-lg shadow-md text-lg text-gray-700 leading-relaxed italic border-l-4 border-purple-600'>
            Welcome to our school — a place where young minds are nurtured, talents are discovered, and character is built. At our core, we believe education is more than just academics; it is about inspiring curiosity, fostering resilience, and shaping responsible citizens for tomorrow. Together with our dedicated teachers, supportive parents, and vibrant students, we strive to create an environment where every child can reach their fullest potential. Thank you for being a part of our journey.
            </p>
            <img src={makise} className='transition duration-300 transform hover:scale-105
 w-48 h-48 md:w-60 md:h-60 rounded-full shadow-lg object-cover' />
 
        </div>
        <div className='mt-40'><Footer/></div>

        
    </div>
  )
}

export default Chairman