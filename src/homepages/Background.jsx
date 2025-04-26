import React from 'react'

function Background() {
  return (
    <div
    className="mt-20 h-[50vh] bg-cover bg-center relative"
    style={{
      backgroundImage: `url('/src/image/bg.jpeg')`,
    }}
  >
    {/* Gradient overlay */}
    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(45deg, #410445, #A5158C, #FF2DF1, #F6DC43)',
        opacity: 0.6,
      }}
    ></div>
  
    {/* Content */}
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-white text-lg mb-4">
          WE WELCOME YOU TO LEARN MORE ABOUT OUR ADMISSION PROCESS
        </p>
        <h1 className="text-white text-4xl ">
          WE ARE ALWAYS HAPPY TO HEAR FROM YOU
        </h1>
      </div>
  </div>
  
  )
}

export default Background