import React from 'react';
import play from '../assets/play.png';
import hr from '../assets/hr.jpg';
import hs from '../assets/hs.jpg';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center px-4 sm:px-6">
      <div className="container px-8 md:px-5 gap-16 sm:gap-8">
        <div className="mx-24 flex flex-col items-center gap-12 md:mx-0">
          {/* Heading and Subheading */}
          <div className="flex flex-col gap-3 self-stretch">
            <div className="flex flex-col items-center gap-4 px-[22px] sm:px-5">
              <h1 className="text-[60px] font-semibold tracking-[-1.20px] text-gray-900 md:text-[52px] sm:text-[46px]">
                Beautiful analytics to grow smarter
              </h1>
            </div>
            <p className="text-center text-[20px] font-normal leading-[30px] text-blue_gray-700 md:text-[18px] sm:text-[16px]">
              Powerful, self-serve product and growth analytics to help you convert, engage, <br />
              and retain more users. Trusted by over 4,000 startups.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 items-center">
            <button className="flex items-center justify-center h-[50px] w-auto bg-[#f8f6f0] text-[#344054] px-4 py-2 rounded-md mb-4 sm:mb-0">
              <img src={play} alt="Play Icon" className="h-5 w-5 mr-2" />
              Demo
            </button>
            <button className="flex items-center justify-center h-[50px] w-auto bg-[#7F56D9] text-[#344054] px-4 py-2 rounded-md">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="relative h-[560px] rounded-[12px] border-8 border-solid border-gray-900 md:h-[400px] mt-10">
        <img
          src={hr}
          alt="Shadow Image"
          className="h-[560px] flex-1 rounded-[12px] object-cover md:h-[400px]"
        />
        <img
          src={hs}
          alt="Screen Mockup"
          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[560px] w-full flex-1 rounded-[12px] object-cover md:h-[400px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
