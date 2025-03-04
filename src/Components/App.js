import Navbar from "./Navbar";
import Footer from "./Footer";
import wallpaper from '../Images/wallpaper.jpg';
import { useEffect, useRef } from 'react';

export default function App() {
    const aboutRef = useRef(null);
    const galleryRef = useRef(null);
    const reviewsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, { threshold: 0.1 });

        [aboutRef, galleryRef, reviewsRef].forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <main className='min-h-screen flex flex-col'>
            <Navbar selected={0}/>
            
            {/* Hero Section */}
            <div className='flex-grow relative h-[70vh] md:h-[80vh]'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-black/30'></div>
                <img 
                    src={wallpaper} 
                    className='w-full h-full object-cover object-center' 
                    alt='Wallpaper'
                />
                <div className='absolute bottom-20 md:bottom-1/4 left-1/2 transform -translate-x-1/2 text-center w-11/12 sm:w-4/5 md:w-auto'>
                    <div className='space-y-6'>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 animate-slide-up px-4 text-center leading-tight drop-shadow-lg'>
                            Tenis Club Gherla
                        </h1>
                        <p className='text-lg sm:text-xl md:text-2xl text-white/90 mb-8 animate-slide-up animation-delay-100 px-4 text-center max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md'>
                            Destinația ta de top pentru excelență în tenis
                        </p>
                        <div className='animate-slide-up animation-delay-200'>
                            <button className='bg-accent text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full hover:bg-secondary transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105'>
                                Rezervă acum
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <section ref={aboutRef} className='py-16 px-4 md:px-8 bg-white opacity-0'>
                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center'>
                        Despre Noi
                    </h2>
                    <div className='grid md:grid-cols-2 gap-8 items-center'>
                        <div className='space-y-4 text-gray-700'>
                            <p>
                                Clubul de Tenis Gherla este un centru modern de tenis, dedicat pasionaților de toate nivelurile.
                                Ne mândrim cu facilitățile noastre de ultimă generație și echipa noastră de antrenori profesioniști.
                            </p>
                            <p>
                                Fondat în 2010, am devenit un punct de referință în comunitatea locală, oferind atât cursuri
                                pentru începători, cât și antrenamente avansate pentru jucători competiționali.
                            </p>
                            <p>
                                Viziunea noastră este să promovăm tenisul ca stil de viață și să creăm o comunitate puternică
                                de iubitori ai acestui sport.
                            </p>
                        </div>
                        <img 
                            src='https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt='About Us'
                            className='rounded-lg shadow-lg'
                        />
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section ref={galleryRef} className='py-16 px-4 md:px-8 bg-gray-50 opacity-0'>
                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center'>
                        Galerie Foto
                    </h2>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        {[1, 2, 3].map((index) => (
                            <div key={index} className='relative aspect-square overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'>
                                <img 
                                    src={`/gallery/teren-${index}.jpeg`}
                                    alt={`Gallery ${index}`}
                                    className='absolute inset-0 w-full h-full object-cover'
                                />
                            </div>
                        ))}
                        <div key={4} className='relative aspect-square overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'>
                            <img
                                src={`/gallery/teren-4.jpg`}
                                alt={`Gallery 4`}
                                className='absolute inset-0 w-full h-full object-cover'
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section ref={reviewsRef} className='py-16 px-4 md:px-8 bg-white opacity-0'>
                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center'>
                        Recenzii
                    </h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {/* Placeholder for Google Reviews integration */}
                        <div className='bg-gray-50 p-6 rounded-lg shadow-sm'>
                            <div className='flex items-center space-x-4 mb-4'>
                                <div className='w-12 h-12 bg-gray-200 rounded-full'></div>
                                <div>
                                    <h4 className='font-semibold'>Ion Popescu</h4>
                                    <div className='flex space-x-1 text-yellow-400'>
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className='w-4 h-4 fill-current' viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className='text-gray-600'>
                                Club excelent! Terenuri bine întreținute și antrenori profesioniști.
                            </p>
                        </div>
                        {/* Add more review placeholders */}
                    </div>
                </div>
            </section>

            <Footer/>
        </main>
    );
}
