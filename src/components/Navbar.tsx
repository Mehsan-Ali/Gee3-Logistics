import { useState } from 'react';
import Logo from '../assets/Logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center justify-between">
                    {/* Left Navigation */}
                    <div className="flex items-center gap-6 xl:gap-8">
                        <a
                            href="#"
                            className="px-4 xl:px-6 py-2 bg-[#e2812a] text-white font-medium hover:bg-orange-600 transition-colors text-sm xl:text-base"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-gray-700 font-medium hover:text-orange-500 transition-colors text-sm xl:text-base"
                        >
                            About
                        </a>
                        <a
                            href="#service"
                            className="text-gray-700 font-medium hover:text-orange-500 transition-colors text-sm xl:text-base"
                        >
                            Service
                        </a>
                        <a
                            href="#blog"
                            className="text-gray-700 font-medium hover:text-orange-500 transition-colors text-sm xl:text-base"
                        >
                            Blog
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-700 font-medium hover:text-orange-500 transition-colors text-sm xl:text-base"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Center Logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <img
                            src={Logo}
                            alt="Gee3 Logistics"
                            className="h-10 sm:h-24 w-auto"
                        />
                    </div>

                    {/* Right CTA */}
                    <div>
                        <a
                            href="#enquire"
                            className="px-4 xl:px-6 py-2 bg-[#e2812a] text-white font-medium hover:bg-orange-600 transition-colors inline-block text-sm xl:text-base"
                        >
                            Enquire Now
                        </a>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <img
                            src={Logo}
                            alt="Gee3 Logistics"
                            className="h-10 sm:h-12 w-auto"
                        />

                        {/* Hamburger Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-gray-700 hover:text-orange-500 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="mt-4 pb-4 space-y-3">
                            <a
                                href="#"
                                className="block px-4 py-2 bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors text-center"
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className="block px-4 py-2 text-gray-700 font-medium hover:text-orange-500 transition-colors text-center"
                            >
                                About
                            </a>
                            <a
                                href="#service"
                                className="block px-4 py-2 text-gray-700 font-medium hover:text-orange-500 transition-colors text-center"
                            >
                                Service
                            </a>
                            <a
                                href="#blog"
                                className="block px-4 py-2 text-gray-700 font-medium hover:text-orange-500 transition-colors text-center"
                            >
                                Blog
                            </a>
                            <a
                                href="#contact"
                                className="block px-4 py-2 text-gray-700 font-medium hover:text-orange-500 transition-colors text-center"
                            >
                                Contact Us
                            </a>
                            <a
                                href="#enquire"
                                className="block px-4 py-2 bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors text-center"
                            >
                                Enquire Now
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
