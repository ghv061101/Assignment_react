import React from 'react';
import t1 from '../assets/t1.png';
import t2 from '../assets/t2.png';
import ava from '../assets/ava.png';

const data = [
    {
        icon: t1,
        icon_text: t2,
        description: 'We’ve been using Untitled to kick start every new project and can’t imagine working without it.',
        avatar: ava,
        avatar_title: 'Candice Wu',
        Supporting_text: 'Product Manager, Sisyphus'
    }
];

const TestimonialSection = () => {
    return (
        <div>
            <div className='flex justify-center py-24 md:py-5'>
                <div className='container-xs flex justify-center md:px-4'>
                    <div className='w-full px-8 sm:px-4'>
                        {/* Flex Container for Logo and Testimonial */}
                        <div className='flex flex-col items-center gap-8'>
                            {/* Logos */}
                            <div className='flex items-center gap-2.5'>
                                <img src={t1} alt="logo" className='mb-1.5 h-[35px] w-[80%] self-end object-cover' />
                                <img src={t2} alt="logo_title" className='h-[35px] w-[80%] self-end object-cover' />
                            </div>

                            {/* Heading Section */}
                            <h2 className='text-center text-[48px] font-medium leading-[60px] tracking-[-0.96px] text-gray-900 md:text-[14px] sm:text-[18px]'>
                                {data[0].description}
                            </h2>

                            {/* Avatar and Name */}
                            <div className='flex flex-col items-center gap-4 justify-center text-center'>
                                {/* Avatar */}
                                <div className='flex items-center justify-center h-[64px] w-[64px] rounded-full overflow-hidden mb-4'>
                                    <img src={data[0].avatar} alt={data[0].avatar_title} className='w-full h-full object-cover' />
                                </div>

                                {/* Name and Supporting Text */}
                                <div className='flex flex-col items-center gap-1.5'>
                                    <h3 className='text-[18px] font-semibold text-gray-900'>
                                        {data[0].avatar_title}
                                    </h3>
                                    <p className='text-[16px] font-normal text-gray-500'>
                                        {data[0].Supporting_text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
