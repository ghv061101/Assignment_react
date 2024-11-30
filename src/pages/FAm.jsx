import React, { useState } from 'react';
import a1 from '../assets/a1.png';
import a2 from '../assets/a2.png';
import a3 from '../assets/a3.png';
// FAQ Data
const accordionData = [
    {
        trialQuestion: 'Is there a free trial available?',
        answer:
            'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
        trialQuestion: 'Can I change my plan later?',
        answer: '', // Placeholder for answer
    },
    {
        trialQuestion: 'What is your cancellation policy?',
        answer: '', // Placeholder for answer
    },
    {
        trialQuestion: 'Can other info be added to an invoice?',
        answer: '', // Placeholder for answer
    },
    {
        trialQuestion: 'How does billing work?',
        answer: '', // Placeholder for answer
    },
    {
        trialQuestion: 'How do I change my account email?',
        answer: '', // Placeholder for answer
    },
];

// User Profile Data
const userProfiles = [
    {
        avatar: a1,
    },
    {
        avatar: a2,
    },
    {
        avatar: a3,
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-50 py-16 px-5 sm:px-10 md:px-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
                    Frequently Asked Questions
                </h2>

                <p className="text-lg text-gray-700 mb-10 text-center">
                    Everything you need to know about the product and billing.
                </p>

                {/* Accordion Section */}
                <div className="space-y-4">
                    {accordionData.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md">
                            <div
                                className="flex justify-between items-center p-5 cursor-pointer"
                                onClick={() => handleToggle(index)}
                            >
                                <h3 className="text-lg font-medium text-gray-900">{item.trialQuestion}</h3>
                                <span
                                    className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-xl ${openIndex === index ? 'bg-purple-500' : 'bg-gray-400'
                                        }`}
                                >
                                    {openIndex === index ? '-' : '+'}
                                </span>
                            </div>

                            {openIndex === index && item.answer && (
                                <div className="px-5 pb-5">
                                    <p className="text-gray-700">{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* User Profiles Section */}
                <div className="flex flex-row items-center -mr-5 text-white text-sm font-light justify-center mt-8">
                    {userProfiles.map((profile, index) => (
                        <img
                            key={index}
                            className="w-12 h-12 rounded-full object-cover -ml-2"
                            src={profile.avatar}
                            alt={`User ${index + 1}`}
                        />
                    ))}
                </div>


                {/* Get in Touch Section */}
                <div className="flex flex-col items-center mt-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h4>
                    <p className="text-gray-700 mb-6 text-center">
                        Can't find the answer you're looking for? Please chat with our friendly team.
                    </p>
                    <button className="px-8 py-3 bg-purple-500 text-white font-semibold rounded-lg">
                        Get in touch
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
