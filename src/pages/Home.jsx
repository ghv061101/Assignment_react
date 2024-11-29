import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import SocialProof from './SocialProof';
import Footer from './Footer';
import FeaturesSection from './FeaturesSection';
import TestimonialSection from './TestimonialSection';


const Home = () => {
    return (
      <div className='lex flex-col min-h-screen bg-[#FFFFFF]'>
       
        <Navbar />
        <HeroSection />
        <SocialProof/>
        <FeaturesSection/>
        <TestimonialSection/>
        <Footer/>
      </div>
    );
  };
  
  export default Home;