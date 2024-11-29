import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import SocialProof from './SocialProof';
import Footer from './Footer';
import FeaturesSection from './FeaturesSection';


const Home = () => {
    return (
      <div className='lex flex-col min-h-screen bg-[#FFFFFF]'>
       
        <Navbar />
        <HeroSection />
        <SocialProof/>
        <FeaturesSection/>
        <Footer/>
      </div>
    );
  };
  
  export default Home;