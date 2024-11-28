import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import SocialProof from './SocialProof';


const Home = () => {
    return (
      <div className='lex flex-col min-h-screen'>
       
        <Navbar />
        <HeroSection />
        <SocialProof/>
      </div>
    );
  };
  
  export default Home;