import React from 'react';
import play from '../assets/play.png';
import hr from '../assets/hr.jpg';
import hs from '../assets/hs.jpg';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center px-4 sm:px-6">
      {/* New Feature Box-in-Box */}
      <div className="p-4 mb-8 w-full sm:w-auto">
        <a 
          href="#"
          className="flex items-center justify-start rounded-full border border-solid border-purple-300 bg-purple-200 py-1 px-2 text-purple-600"
        >
          <div className="flex items-center space-x-4">
            {/* Inner box for New feature */}
            <span className="text-sm font-medium text-purple-300 rounded-full border border-purple-400 bg-purple-100 py-2 px-4">
              New feature
            </span>
            <span className="ml-4 text-lg font-semibold">
              Check out the team dashboard
            </span>
            <span className="ml-2 text-xl">→</span> {/* Right Arrow */}
          </div>
        </a>
      </div>

      <div className="container px-8 md:px-5 gap-16 sm:gap-8">
        <div className="mx-4 sm:mx-12 md:mx-24 flex flex-col items-center gap-12">
          {/* Heading and Subheading */}
          <div className="flex flex-col gap-3 self-stretch text-center">
            <div className="flex flex-col items-center gap-4 px-[22px] sm:px-5">
              <h1 className="text-[36px] sm:text-[50px] md:text-[60px] font-semibold tracking-[-1.20px] text-gray-900">
                Beautiful analytics to grow smarter
              </h1>
            </div>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[30px] text-blue_gray-700">
              Powerful, self-serve product and growth analytics to help you convert, engage, <br />
              and retain more users. Trusted by over 4,000 startups.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 items-center">
            <button className="flex items-center justify-center h-[50px] w-auto bg-[#f8f6f0] text-[#344054] px-4 py-2 rounded-md mb-4 sm:mb-0">
              <img src={play} alt="Play Icon" className="h-5 w-5 mr-2" />
              Demo
            </button>
            <button className="flex items-center justify-center h-[50px] w-auto bg-[#7F56D9] text-white px-4 py-2 rounded-md">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="relative w-full mt-2">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-[12px] overflow-hidden">
          <img
            src={hr}
            alt="Shadow Image"
            className="w-full h-full object-contain" // Ensuring the image is fully visible without cropping
          />
          <img
            src={hs}
            alt="Screen Mockup"
            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-contain" // Same for the overlay image
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
