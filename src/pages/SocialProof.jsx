import React from 'react';
import c1 from '../assets/c1.png';
import b1 from '../assets/b1.png';
import c2 from '../assets/c2.png';
import b2 from '../assets/b2.png';
import c3 from '../assets/c3.png';
import b3 from '../assets/b3.png';
import c4 from '../assets/c4.png';
import b4 from '../assets/b4.png';
import c5 from '../assets/c5.png';
import b5 from '../assets/b5.png';
import c6 from '../assets/c6.png';
import b6 from '../assets/b6.png';

const SocialProof = () => {
  return (
    <div className="flex flex-col items-center gap-24 bg-white md:gap-16 sm:gap-12">
      <div className="container mt-[98px] px-8 md:px-5">
        <div className="flex flex-col items-center gap-8">
          <span className="text-[16px] font-medium text-black text-center sm:text-lg md:text-xl">
            Join 4,000+ companies already growing
          </span>

          {/* Container for Company Logos with Text Side by Side */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-6 md:gap-12">
            {/* Each company logo and text side by side */}
            <div className="flex items-center justify-center gap-3">
              <img src={c1} alt="Company 1" className="w-12 h-12 sm:w-10 sm:h-10 object-contain" />
              <span className="text-sm sm:text-xs">
                <img src={b1} className="w-24 h-12 sm:w-20 sm:h-8 object-contain" alt="Company 1 Name" />
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <img src={c2} alt="Company 2" className="w-12 h-12 sm:w-10 sm:h-10 object-contain" />
              <span className="text-sm sm:text-xs">
                <img src={b2} className="w-24 h-12 sm:w-20 sm:h-8 object-contain" alt="Company 2 Name" />
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <img src={c3} alt="Company 3" className="w-12 h-12 sm:w-10 sm:h-10 object-contain" />
              <span className="text-sm sm:text-xs">
                <img src={b3} className="w-24 h-12 sm:w-20 sm:h-8 object-contain" alt="Company 3 Name" />
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <img src={c4} alt="Company 4" className="w-12 h-12 sm:w-10 sm:h-10 object-contain" />
              <span className="text-sm sm:text-xs">
                <img src={b4} className="w-24 h-12 sm:w-20 sm:h-8 object-contain" alt="Company 4 Name" />
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <img src={b5} alt="Company 5" className="w-12 h-12 sm:w-10 sm:h-10 object-contain" />
              <span className="text-sm sm:text-xs">
                <img src={c5} className="w-24 h-12 sm:w-20 sm:h-8 object-contain" alt="Company 5 Name" />
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <img src={c6} alt="Company 6" className="w-12 h-12 sm:w-10 sm:h-10 object-contain" />
              <span className="text-sm sm:text-xs">
                <img src={b6} className="w-24 h-12 sm:w-20 sm:h-8 object-contain" alt="Company 6 Name" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
