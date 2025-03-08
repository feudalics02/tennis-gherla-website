import {useEffect, useRef} from 'react';
import Review from "../Review";
import About from "./About";
import Gallery from "./Gallery";
import wallpaper from '../../Images/wallpaper.jpg';

export default function Home() {
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
        }, {threshold: 0.1});

        [aboutRef, galleryRef, reviewsRef].forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Hero Section */}
            <div className='flex-grow relative h-[70vh] md:h-[80vh]'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-black/30'></div>
                <img
                    src={wallpaper}
                    className='w-full h-full object-cover object-center'
                    alt='Wallpaper'
                />
                <div
                    className='absolute bottom-20 md:bottom-1/4 left-1/2 transform -translate-x-1/2 text-center w-11/12 sm:w-4/5 md:w-auto'>
                    <div className='space-y-10'>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 animate-slide-up px-4 text-center leading-tight drop-shadow-lg'>
                            Tenis Club Gherla
                        </h1>
                        <p className='text-lg sm:text-xl md:text-2xl text-white/90 mb-8 animate-slide-up animation-delay-100 px-4 text-center max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md'>
                            Destinația ta de top pentru excelență în tenis
                        </p>
                        <div className='animate-slide-up animation-delay-200'>
                            <a
                                href="tel:0743086789"
                                className='bg-accent text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full hover:bg-secondary transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105'>
                                Rezervă acum
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <About aboutRef={aboutRef}/>
            <Gallery galleryRef={galleryRef}/>

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
                            <Review key={index} name={review.name} message={review.message}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
