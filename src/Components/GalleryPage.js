import {useCallback, useEffect, useState} from 'react';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import teren1 from '../Images/gallery/teren-1.jpeg';
import teren2 from '../Images/gallery/teren-2.jpeg';
import teren3 from '../Images/gallery/teren-3.jpeg';
import teren4 from '../Images/gallery/teren-4.jpg';
import teren5 from '../Images/gallery/teren-5.jpeg';

export default function GalleryPage() {
    const images = [teren1, teren2, teren3, teren4, teren5];
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const openImage = (index) => {
        setIsImageLoaded(false);
        setSelectedIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    const closeImage = () => {
        setSelectedIndex(null);
        document.body.style.overflow = 'auto';
    };

    const navigateImage = useCallback((direction) => {
        let newIndex = selectedIndex + direction;
        if (newIndex < 0) newIndex = images.length - 1;
        if (newIndex >= images.length) newIndex = 0;
        setSelectedIndex(newIndex);
    }, [selectedIndex, images.length]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex !== null) {
                if (e.key === 'ArrowLeft') {
                    navigateImage(-1);
                } else if (e.key === 'ArrowRight') {
                    navigateImage(1);
                } else if (e.key === 'Escape') {
                    closeImage();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, navigateImage]); // Now include navigateImage in the dependencies array

    return (
        <section id="gallery" className="pt-28 pb-10 px-4 md:px-8 bg-white">
            <div className="opacity-0 animate-fade-in" style={{ willChange: 'opacity, transform' }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">
                        Galerie Foto
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="relative cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => openImage(index)}
                            >
                                <img
                                    src={img}
                                    alt={`Teren ${index + 1}`}
                                    className="w-full h-auto rounded-lg shadow-lg"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={closeImage}
                    style={{
                        animation: 'fadeIn 0.3s ease-out',
                        willChange: 'opacity'
                    }}
                >
                    <div className="relative max-w-[90vw] max-h-[90vh]">
                        {/* Close button */}
                        <button
                            onClick={closeImage}
                            className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
                            style={{
                                opacity: isImageLoaded ? 1 : 0,
                                transform: isImageLoaded ? 'translateY(0)' : 'translateY(-20px)',
                                transition: 'all 0.3s ease-out 0.1s',
                                willChange: 'transform, opacity'
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <img
                            src={images[selectedIndex]}
                            alt={`Teren ${selectedIndex + 1}`}
                            className="max-w-[90vw] max-h-[90vh] rounded-lg"
                            style={{
                                objectFit: 'contain',
                                opacity: isImageLoaded ? 1 : 0,
                                transition: 'opacity 0.3s ease-out'
                            }}
                            onLoad={handleImageLoad}
                        />

                        {/* Navigation buttons */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage(-1);
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                            style={{
                                opacity: isImageLoaded ? 1 : 0,
                                transform: `translateY(-50%) ${isImageLoaded ? 'translateX(0)' : 'translateX(-20px)'}`,
                                transition: 'all 0.3s ease-out 0.1s',
                                willChange: 'transform, opacity'
                            }}
                        >
                            <FaChevronLeft className="w-6 h-6 text-white"/>
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage(1);
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                            style={{
                                opacity: isImageLoaded ? 1 : 0,
                                transform: `translateY(-50%) ${isImageLoaded ? 'translateX(0)' : 'translateX(20px)'}`,
                                transition: 'all 0.3s ease-out 0.1s',
                                willChange: 'transform, opacity'
                            }}
                        >
                            <FaChevronRight className="w-6 h-6 text-white"/>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
