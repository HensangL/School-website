import React from 'react'
import Carousel from '../homepages/Carousel'
import Intro from '../homepages/Intro'
import Gallery from '../homepages/Gallery'
import Second from '../homepages/Second'
import Info from '../homepages/Info'
import Background from '../homepages/Background'
import Third from '../homepages/Third'
import Footer from '../homepages/Footer'


const Home = () => {
  return (
   
    <div>
      <Carousel/>
      <Intro/>
      <Gallery/>
      <Second/>
      <Info/>
      <Background/>
      <Third/>
      <Footer/>
    </div>
    
  )
}

export default Home