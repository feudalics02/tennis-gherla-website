    import { useState, useEffect } from 'react';
    import { FaBars, FaPhone, FaTimes } from 'react-icons/fa';
    import { Link } from 'react-router-dom';
    import logo from '../Images/logo.png';

    export default function Navbar() {
        const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
        const [activeSection, setActiveSection] = useState('acasa');

        useEffect(() => {
            const handleScroll = () => {
                const sections = ['acasa', 'facilitati', 'preturi', 'galerie', 'contact'];
                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 100 && rect.bottom >= 100) {
                            setActiveSection(section);
                            break;
                        }
                    }
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        const navigation = [
            { name: 'Acasă', href: '/' },
            { name: 'Facilități', href: '/facilitati' },
            { name: 'Prețuri', href: '/preturi' },
            { name: 'Galerie', href: '/galerie' },
            { name: 'Contact', href: '/contact' },
        ];

        return (
            <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">
                {/* Top info bar */}
                <div className="bg-gradient-to-r from-primary to-secondary">
                    <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between text-white">
                        <div className="flex-1 flex justify-center">
                            <div className="flex items-center space-x-3 bg-white/10 px-4 py-2 rounded-full">
                                <FaPhone className="w-4 h-4" />
                                <a href="tel:0743086789" className="hover:text-accent transition-colors duration-200">
                                    0743 086 789
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main navigation */}
                <div className="w-full mx-0 px-0 relative z-10 bg-white/95 backdrop-blur-sm rounded-sm">
                    <div className="flex items-center h-20 gap-8 bg-white/95 justify-center">
                        {/* Logo */}
                        <div className="flex-shrink-0 pl-4">
                            <img
                                src={logo}
                                alt="Tennis Logo"
                                className="h-16 w-auto hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Desktop navigation */}
                        <div className="flex-1 flex max-md:hidden justify-center items-center space-x-8 px-6 py-2 rounded-full mx-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`text-gray-700 hover:text-primary px-4 py-2 rounded-md text-lg font-semibold transition-colors duration-200 relative group ${
                                        activeSection === item.href.slice(1) ? 'text-primary' : ''
                                    }`}
                                >
                                    {item.name}
                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-primary ${
                                        activeSection === item.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                                    } transition-all duration-300`}></span>
                                </Link>
                            ))}
                            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
                                Rezervă
                            </button>
                        </div>

                        {/* Spacer to push mobile menu button to the right */}
                        <div className="flex-1 md:hidden"></div>

                        {/* Mobile menu button */}
                        <div className="flex md:hidden -ml-3">
                            <button
                                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 -ml-12 rounded-md text-gray-700 hover:text-primary focus:outline-none"
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
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="block px-4 py-3 rounded-md text-lg font-semibold text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors duration-200"
                                >
                                    {item.name}
                                </Link>
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
