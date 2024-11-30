import React from 'react';
import i1 from '../assets/i1.png';
import i2 from '../assets/i2.png';
import i3 from '../assets/i3.png';
import screen from '../assets/screen.png';
import iphone from '../assets/iphone.png';

// Feature Data
const infoList = [
    {
        icon: i1,
        headerText: 'Share team inboxes',
        des: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
        linkText: 'Learn more',
    },
    {
        icon: i2,
        headerText: 'Deliver instant answers',
        des: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
        linkText: 'Learn more',
    },
    {
        icon: i3,
        headerText: 'Manage your team with reports',
        des: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.',
        linkText: 'Learn more',
    }
];

const Features2 = () => {
    return (
        <div className="flex flex-col items-center gap-24 bg-white md:gap-[72px] sm:gap-12">
            <div className="container-xs mt-24 flex flex-col gap-16 md:px-5 sm:gap-8">
                {/* Header Section */}
                <div className="mx-64 flex flex-col gap-5 md:mx-0">
                    <div className="flex flex-col items-center gap-4">
                        <button className="min-w-[82px] rounded-[14px] border border-solid bg-purple-300 px-[11px] font-medium">
                            Features
                        </button>
                        <h2 className="text-[36px] font-semibold tracking-[-0.72px] text-gray-900 md:text-[34px] sm:text-[32px]">
                            Cutting-edge features for advanced analytics
                        </h2>
                    </div>
                    <p className="text-center text-[20px] font-normal leading-[30px] text-gray-800">
                        Powerful, self-serve product and growth analytics to help you convert, engage, <br /> and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>

                {/* Screen and iPhone Section */}
                <div className="relative flex justify-center items-center mt-16">
                    {/* Desktop Mockup */}
                    <img
                        src={screen}
                        alt="Desktop Mockup"
                        className="hidden sm:block w-[80%] md:w-[80%] lg:w-[70%] object-cover rounded-lg mr-20 justify-center items-center"
                    />
                    {/* iPhone Mockup */}
                    <img
                        src={iphone}
                        alt="iPhone Mockup"
                        className="absolute lg:left-[5%] w-[22%] sm:w-[15%] md:w-[10%] lg:w-[22%] object-cover rounded-lg "
                    />
                </div>

                {/* Features Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
                    {infoList.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={item.icon}
                                alt={item.headerText}
                                className="h-16 w-16 mb-6"
                            />
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">{item.headerText}</h3>
                            <p className="text-sm text-gray-600 mb-4">{item.des}</p>
                            <a
                                href="#"
                                className="text-purple-500 hover:underline flex items-center"
                            >
                                {item.linkText}
                                <span className="ml-2 text-xl">→</span> {/* Right arrow */}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features2;
