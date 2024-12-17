import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold text-indigo-600">
                            Sysco Store
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-4">
                        <a
                            href="#"
                            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Features
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Pricing
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            About
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger Icon */}
                            {isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="#"
                            className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
                        >
                            Features
                        </a>
                        <a
                            href="#"
                            className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
                        >
                            Pricing
                        </a>
                        <a
                            href="#"
                            className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
                        >
                            About
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
