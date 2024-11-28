import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'


const Home = () => {
    return (
      <div className='lex flex-col min-h-screen'>
       
        <Navbar />
        <HeroSection />
      </div>
    );
  };
  
  export default Home;