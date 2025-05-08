import React from 'react'
import background from '../image/bg.jpeg'
import { Link } from 'react-router'
import Footer from '../homepages/Footer'
function About() {
  return (

    <div>
     
<div className="relative w-full overflow-hidden bg-gray-50">
  {/* Hero Section */}
  <div className="relative h-[500px] md:h-[600px]">
    <img 
      src={background} 
      alt="Hensang School Campus" 
      className="w-full h-full object-cover object-center opacity-90"
    />
    <div className="absolute inset-0 bg-fuchsia-400/13"></div>

    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-20 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
        Welcome to Hensang School
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
        Since 1995, we've nurtured students to excel academically, socially, and emotionally through innovative education.
      </p>
    </div>
  </div>

  {/* Main Content Container */}
  <div className="max-w-6xl mx-auto px-6 py-16">

    {/* Mission & Vision */}
    <div className="grid md:grid-cols-2 gap-12 mb-20">
      <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-500">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">🌟 Our Mission</h2>
        <p className="text-gray-700 text-lg">
          To empower students with knowledge, skills, and values to become responsible global citizens and lifelong learners.
        </p>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-500">
        <h2 className="text-3xl font-bold mb-4 text-green-800">🔭 Our Vision</h2>
        <p className="text-gray-700 text-lg">
          To be a premier institution cultivating innovation, critical thinking, and holistic development.
        </p>
      </div>
    </div>

    {/* Core Values */}
    <div className="mb-20 text-center">
      <h2 className="text-3xl font-bold mb-12 text-gray-800">Our Core Values</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {[
          ["⭐", "Excellence", "Striving for academic and personal growth"],
          ["🤝", "Integrity", "Upholding honesty and ethical behavior"],
          ["💡", "Innovation", "Encouraging creative approaches"],
          ["👨‍👩‍👧‍👦", "Community", "Building strong relationships"],
          ["🌍", "Diversity", "Celebrating differences and inclusion"]
        ].map(([icon, title, desc]) => (
          <div key={title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-3">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Legacy of Excellence */}
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">A Legacy of Excellence</h2>
      <div className="bg-blue-50 p-8 rounded-xl">
        <p className="text-lg mb-8 text-center max-w-4xl mx-auto">
          Founded in 1995, Hensang School has grown into a premier educational institution known for:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            ["🏆", "Academic Excellence", "Consistently high performance in exams"],
            ["👩‍🏫", "Experienced Faculty", "Dedicated and qualified teachers"],
            ["🎨", "Holistic Development", "Balance of academics, sports and arts"],
            ["🏛️", "Modern Facilities", "Well-equipped classrooms and labs"]
          ].map(([icon, title, desc]) => (
            <div key={title} className="flex items-start">
              <div className="text-3xl mr-4 mt-1">{icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Why Choose Us */}
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Why Choose Hensang School?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          ["📚", "Student-Centered Learning", "Personalized attention and innovative methods"],
          ["⚽", "Extracurricular Opportunities", "Clubs, sports, and leadership programs"],
          ["🛡️", "Safe Environment", "Caring and disciplined atmosphere"],
          ["👪", "Community Engagement", "Strong parent collaboration"]
        ].map(([icon, title, desc]) => (
          <div key={title} className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-b-fuchsia-500">
            <div className="text-3xl mb-3">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* CTA Section */}
  </div>
</div>
<Footer/>
</div>
  )
}

export default About