import React from 'react'
import Navbar from '../components/Navbar'
import principal from '../image/boiboi.jpg'
import Footer from '../homepages/Footer'
function Principal() {
  return (
<div className="bg-gradient-to-br from-[#f9f7ff] via-[#f3e8ff] to-[#fdf7ff]">
<Navbar/>
<p className='text-4xl md:text-5xl font-bold text-center text-purple-800'>         Here is a message from our principal.</p>
<div className='max-w-6xl mx-auto px-4 md:px-8 mt-12 flex flex-col md:flex-row items-center gap-10'>
    <p className='bg-white p-6 rounded-lg shadow-md text-lg text-gray-700 leading-relaxed italic border-l-4 border-purple-600'>
    *"At Hensang, we believe education is more than academics—it’s about nurturing character, curiosity, and confidence. For [X] years, our community has fostered a tradition of excellence where every student is known, valued, and challenged to reach their highest potential.

Our dedicated teachers create vibrant classrooms that blend innovation with timeless values. Beyond textbooks, we cultivate resilience through sports, creativity through arts, and leadership through service.

What makes us unique is our culture of warmth and high expectations. Whether a child’s passion lies in STEM, the humanities, or the arts, we provide the guidance and opportunities to let that spark grow.

I invite you to visit our campus and feel the energy of a school where joy and rigor walk hand in hand. Together, we’re shaping not just scholars, but compassionate citizens ready to lead in an ever-changing world."*

— [Principal’s Name]
Principal, [School Name]
<span className="block mt-4 not-italic font-semibold text-right text-purple-800">
    — Mr. John Doe<br/>Principal, Hensang School
  </span>


    </p>
    <img src={principal}  className='transition duration-300 transform hover:scale-105
 w-48 h-48 md:w-60 md:h-60 rounded-full shadow-lg object-cover' />
</div>

<div className='mt-40'><Footer/></div>

    </div>
  )
}

export default Principal