import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import SocialProof from './SocialProof';
import Footer from './Footer';
import FeaturesSection from './FeaturesSection';
import TestimonialSection from './TestimonialSection';
import Features2 from './Features2';
import CAS from './CAS';
import Blog from './Blog';


const Home = () => {
    return (
      <div className='lex flex-col min-h-screen bg-[#FFFFFF]'>
       
        <Navbar />
        <HeroSection />
        <SocialProof/>
        <FeaturesSection/>
        <TestimonialSection/>
        <Features2/>
        <Blog/>
        <CAS/>
        <Footer/>
      </div>
    );
  };
  
  export default Home;