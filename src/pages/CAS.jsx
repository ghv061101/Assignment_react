import React from 'react';

const CAS = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-24 md:py-5">
        <div className="container-xs flex flex-col items-center gap-[38px] px-14 md:px-5">
          {/* Heading Section */}
          <div className="flex flex-col items-center gap-[22px] text-center">
            <h2 className="text-[36px] font-semibold tracking-[-0.72px] text-gray-900 md:text-[34px] sm:text-[32px]">
              Start your free trial
            </h2>
            <p className="text-[20px] font-normal text-gray-700">
              Join over 4,000+ startups already growing with Untitled.
            </p>
          </div>

          {/* Buttons Section */}
          <div className="flex gap-3">
            <button
              className="min-w-[128px] rounded-lg border border-solid  px-[19px] py-2 font-semibold text-gray-800 bg-gray-100 "
              aria-label="Learn more about Untitled"
            >
              Learn more
            </button>
            <button
              className="min-w-[128px] rounded-lg border border-solid bg-purple-500 px-[19px] py-2 font-semibold text-white hover:bg-purple-600 transition"
              aria-label="Get started with Untitled"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CAS;
