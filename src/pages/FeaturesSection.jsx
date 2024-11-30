import React from 'react';
import i1 from '../assets/i1.png';
import i2 from '../assets/i2.png';
import i3 from '../assets/i3.png';
import i4 from '../assets/i4.png';
import i55 from '../assets/i55.png';
import i6 from '../assets/i6.png';

const featureGrid = [
    {
        icon: i1,
        shareTeamText: 'Share team inboxes',
        descriptionText: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
    },
    {
        icon: i2,
        shareTeamText: 'Deliver instant answers',
        descriptionText: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    },
    {
        icon: i3,
        shareTeamText: 'Manage your team with reports',
        descriptionText: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.',
    },
    {
        icon: i4,
        shareTeamText: 'Connect with customers',
        descriptionText: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
    },
    {
        icon: i55,
        shareTeamText: 'Connect the tools you already use',
        descriptionText: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
    },
    {
        icon: i6,
        shareTeamText: 'Our people make the difference',
        descriptionText: 'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
    }
];

const FeaturesSection = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-16 bg-white">
            {/* Analytics Section */}
            <div className="text-center mb-12">
                <h3 className="text-purple-400 text-lg font-semibold">Feature</h3>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                    Analytics that feels like it’s from the future
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mx-auto max-w-3xl">
                    Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900 mb-12">
                Features That Empower Your Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {featureGrid.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg ">
                        <img src={feature.icon} alt={feature.shareTeamText} className="h-16 w-16 mb-6" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">{feature.shareTeamText}</h3>
                        <p className="text-sm text-gray-600">{feature.descriptionText}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
