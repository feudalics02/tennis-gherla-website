import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Review from "./Review";
import Facilitati from "./Facilitati";
import wallpaper from '../Images/wallpaper.jpg';
import teren1 from '../Images/gallery/teren-1.jpeg';
import teren2 from '../Images/gallery/teren-2.jpeg';
import teren3 from '../Images/gallery/teren-3.jpeg';
import teren4 from '../Images/gallery/teren-4.jpg';
import { useEffect, useRef } from 'react';

export default function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

function AppContent() {
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
            <Navbar />
            <Routes>
                <Route path="/facilitati" element={<Facilitati />} />
                <Route path="/" element={
            
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
                                <b>TENIS CLUB GHERLA</b> este un club modern de tenis, dedicat pasionaților de toate nivelurile. Ne mândrim cu facilitățile noastre constând în trei terenuri de tenis, dintre care unul acoperit, de hard.
                            </p>
                            <p>
                                Fondat în urmă cu <b>peste 20 de ani</b>, clubul a devenit un punct de referință în comunitatea locală, oferind cursuri pentru pasionații de tenis de toate vârstele și toate nivelurile de joc.
                            </p>
                            <p>
                                Viziunea noastră este să promovăm tenisul ca stil de viață și să creăm <b>o comunitate puternică</b> de iubitori ai acestui sport.
                            </p>
                        </div>
                        <img
                            src={teren4}
                            alt={`Gallery 4`}
                            className='w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105'
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
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center mx-auto w-fit'>
                        {[1, 2, 3, 2].map((index) => (
                            <div
                                key={index}
                                className='relative cursor-pointer justify-center justify-self-center mx-auto'
                                onClick={() => {
                                    const existingLightbox = document.getElementById('lightbox');
                                    if (existingLightbox) existingLightbox.remove();

                                    const lightbox = document.createElement('div');
                                    lightbox.id = 'lightbox';
                                    lightbox.className = 'fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4';
                                    lightbox.onclick = () => lightbox.remove();

                                    const imgContainer = document.createElement('div');
                                    imgContainer.className = 'relative max-w-[90vw] max-h-[90vh]';
                                    imgContainer.onclick = (e) => e.stopPropagation();

                                    const closeBtn = document.createElement('div');
                                    closeBtn.className = 'fixed top-4 right-4 z-50';
                                    closeBtn.innerHTML = `
                                        <button class="text-white hover:text-primary transition-colors duration-200 bg-black/50 rounded-full p-1">
                                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    `;
                                    closeBtn.querySelector('button').onclick = () => lightbox.remove();

                                    const img = new Image();
                                    img.src = index === 4 ? teren4 : 
                                              index === 1 ? teren1 :
                                              index === 2 ? teren2 : 
                                              teren3;
                                    img.className = 'rounded-lg shadow-2xl max-w-[90vw] max-h-[90vh] object-contain';

                                    imgContainer.appendChild(img);
                                    imgContainer.appendChild(closeBtn);
                                    lightbox.appendChild(imgContainer);
                                    document.body.appendChild(lightbox);
                                }}
                            >
                                <img 
                                    src={index === 4 ? teren4 : 
                                         index === 1 ? teren1 :
                                         index === 2 ? teren2 : 
                                         teren3}
                                    alt={`Gallery ${index}`}
                                    className='w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105'
                                />
                                <div className='absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section ref={reviewsRef} className='py-16 px-4 md:px-8 bg-white opacity-0'>
                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center'>
                        Recenzii
                    </h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
                        {[
                            {
                                name: 'Claudiu',
                                message: 'Good tennis courts, excellent host, covered arena.'
                            },
                            {
                                name: 'Angela', 
                                message: 'Poți petrece timp de calitate făcând sport.'
                            },
                            {
                                name: 'Silvestru',
                                message: 'Perfect!'
                            }
                        ].map((review, index) => (
                            <Review key={index} name={review.name} message={review.message} />
                        ))}
                    </div>
                </div>
            </section>

                    <Footer/>
                </main>
                } />
            </Routes>
    );
}
