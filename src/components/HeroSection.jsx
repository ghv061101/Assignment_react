import React from 'react'
import { PlayIcon } from '@heroicons/react/16/solid'
import play from '../assets/play.png';
const HeroSection = () => {
    return (
        <section className='flex flex-col items-center'>
            <div className="container px-8 md:px-5 sm:gap-8 gap-16">
                <div className='mx-24 flex flex-col items-center gap-12 md:mx-0'>
                    <div className='flex flex-col gap-3 self-stretch'>
                        <div className='flex flex-col items-center gap-4 px-[22px] sm:px-5'>
                            <h1 className='text-[60px] font-semibold tracking-[-1.20px] text-gray-900 md:text-[52px] sm:text-[46px'> Beautiful analytics to grow smarter</h1>
                        </div>
                        <p className='text-center text-[20px] font-normal leading-[30px] text-blue_gray-700'>
                            Powerful, self-serve product and growth analytics to help you convert, engage, <br />
                            and retain more users. Trusted by over 4,000 startups.
                        </p>
                    </div>
                    <div className='flex gap-4 mt-8'>
                        <button className="flex items-center justify-center h-[50px] w-auto bg-gray-600 text-black px-4 py-2 rounded-md">
                            <img src={play} alt="Play Icon" className="h-5 w-5 mr-2" />
                            Demo
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSection