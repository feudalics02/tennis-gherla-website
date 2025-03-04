    import { useState } from 'react';
    import { FaBars, FaPhone, FaTimes } from 'react-icons/fa';
    import logo from '../Images/logo.png';

    export default function Navbar() {
        const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

        const navigation = [
            { name: 'Acasă', href: '#acasa' },
            { name: 'Facilități', href: '#facilitati' },
            { name: 'Prețuri', href: '#preturi' },
            { name: 'Galerie', href: '#galerie' },
            { name: 'Contact', href: '#contact' },
        ];

        return (
            <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">
                {/* Top info bar */}
                <div className="bg-gradient-to-r from-primary to-secondary">
                    <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between text-white">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-3 bg-white/10 px-4 py-2 rounded-full">
                                <FaPhone className="w-4 h-4" />
                                <a href="tel:0743086789" className="hover:text-accent transition-colors duration-200">
                                    0743 086 789
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-2 md:mt-0">
                            <div className="flex items-center space-x-3 bg-white/10 px-4 py-2 rounded-full">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Luni - Duminică: 08:00 - 22:00</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main navigation */}
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center h-20 gap-8">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <img
                                src={logo}
                                alt="Club de Tenis Logo"
                                className="h-16 w-auto hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Desktop navigation */}
                        <div className="flex-1 flex max-md:hidden justify-center items-center space-x-8 bg-white/95 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mx-8">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-700 hover:text-primary px-4 py-2 rounded-md text-lg font-semibold transition-colors duration-200 relative group"
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300"></span>
                                </a>
                            ))}
                            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
                                Rezervă
                            </button>
                        </div>

                        {/* Spacer to push mobile menu button to the right */}
                        <div className="flex-1 md:hidden"></div>

                        {/* Mobile menu button */}
                        <div className="flex md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
                            >
                                {isMobileMenuOpen ? (
                                    <FaTimes className="h-6 w-6" />
                                ) : (
                                    <FaBars className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-4 py-3 rounded-md text-lg font-semibold text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors duration-200"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <button className="w-full bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition-colors duration-300">
                                Rezervă
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        );
    }
