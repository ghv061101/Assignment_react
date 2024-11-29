import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import SocialProof from './SocialProof';
import Footer from './Footer';


const Home = () => {
    return (
      <div className='lex flex-col min-h-screen bg-[#FFFFFF]'>
       
        <Navbar />
        <HeroSection />
        <SocialProof/>
        <Footer/>
      </div>
    );
  };
  
  export default Home;