import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-black py-10 px-4 sm:px-6 lg:px-16">
            <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                {/* Row 1 - Products Section */}
                <div className="flex flex-col space-y-4">
                    <h2 className="text-lg font-semibold text-black">Products</h2>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li><Link to="/overview" className="hover:text-blue-400">Overview</Link></li>
                        <li><Link to="/features" className="hover:text-blue-400">Features</Link></li>
                        <li>
                            <Link to="/solutions" className="hover:text-blue-400">
                                Solutions <span className="ml-1 rounded-full w-4 h border bg-green-400">New</span>
                            </Link>
                        </li>
                        <li><Link to="/tutorial" className="hover:text-blue-400">Tutorials</Link></li>
                        <li><Link to="/pricing" className="hover:text-blue-400">Pricing</Link></li>
                        <li><Link to="/releases" className="hover:text-blue-400">Releases</Link></li>
                    </ul>
                </div>

                {/* Row 2 - Social Section */}
                <div className="flex flex-col space-y-4">
                    <h2 className="text-lg font-semibold text-black">Social</h2>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li><Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</Link></li>
                        <li><Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</Link></li>
                        <li><Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Facebook</Link></li>
                        <li><Link to="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</Link></li>
                        <li><Link to="https://angel.co" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">AngelList</Link></li>
                        <li><Link to="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Dribbble</Link></li>
                    </ul>
                </div>

                {/* Row 3 - Company Section */}
                <div className="flex flex-col space-y-4">
                    <h2 className="text-lg font-semibold text-black">Company</h2>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li><Link to="/about" className="hover:text-blue-400">About us</Link></li>
                        <li><Link to="/careers" className="hover:text-blue-400">Careers</Link></li>
                        <li><Link to="/press" className="hover:text-blue-400">Press</Link></li>
                        <li><Link to="/news" className="hover:text-blue-400">News</Link></li>
                        <li><Link to="/mediaKit" className="hover:text-blue-400">Media Kit</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
                    </ul>
                </div>

                {/* Row 4 - Resources Section */}
                <div className="flex flex-col space-y-4">
                    <h2 className="text-lg font-semibold text-black">Resources</h2>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li><Link to="/blog" className="hover:text-blue-400">Blog</Link></li>
                        <li><Link to="/newsletter" className="hover:text-blue-400">Newsletter</Link></li>
                        <li><Link to="/events" className="hover:text-blue-400">Events</Link></li>
                        <li><Link to="/help-centre" className="hover:text-blue-400">Help Centre</Link></li>
                        <li><Link to="/tutorials" className="hover:text-blue-400">Tutorials</Link></li>
                        <li><Link to="/support" className="hover:text-blue-400">Support</Link></li>
                    </ul>
                </div>

                {/* Row 5 - Use Cases Section */}
                <div className="flex flex-col space-y-4">
                    <h2 className="text-lg font-semibold text-black">Use Cases</h2>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li><Link to="/startups" className="hover:text-blue-400">Startups</Link></li>
                        <li><Link to="/enterprise" className="hover:text-blue-400">Enterprise</Link></li>
                        <li><Link to="/government" className="hover:text-blue-400">Government</Link></li>
                        <li><Link to="/saas-centre" className="hover:text-blue-400">SaaS Centre</Link></li>
                        <li><Link to="/marketplaces" className="hover:text-blue-400">Marketplaces</Link></li>
                        <li><Link to="/ecommerce" className="hover:text-blue-400">Ecommerce</Link></li>
                    </ul>
                </div>

                {/* Row 6 - Legal Section */}
                <div className="flex flex-col space-y-4">
                    <h2 className="text-lg font-semibold text-black">Legal</h2>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li><Link to="/terms" className="hover:text-blue-400">Terms</Link></li>
                        <li><Link to="/privacy" className="hover:text-blue-400">Privacy</Link></li>
                        <li><Link to="/cookies" className="hover:text-blue-400">Cookies</Link></li>
                        <li><Link to="/licenses" className="hover:text-blue-400">Licenses</Link></li>
                        <li><Link to="/settings" className="hover:text-blue-400">Settings</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
                    </ul>
                </div>
            </div>

            {/* Horizontal Line */}
            <div className="border-t border-gray-300 mt-6"></div>

            {/* Footer Bottom Section */}
            <div className="flex flex-col items-start lg:flex-row lg:justify-between mt-6">
                {/* Logo on the Left */}
                <div className="flex items-center mb-2 lg:mb-0">
                    <img src={logo} alt="Logo" className="h-8" />
                </div>

                {/* Copyright Text on the Right */}
                <p className="text-left lg:text-center text-gray-500 text-sm">
                    &copy; 2077 Untitled UI. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
