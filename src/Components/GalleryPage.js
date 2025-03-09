import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import teren1 from '../Images/gallery/teren-1.jpeg';
import teren2 from '../Images/gallery/teren-2.jpeg';
import teren3 from '../Images/gallery/teren-3.jpeg';
import teren4 from '../Images/gallery/teren-4.jpg';
import teren5 from '../Images/gallery/teren-5.jpeg';

export default function GalleryPage() {
    const images = [teren1, teren2, teren3, teren4, teren5];
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openImage = (index) => {
        setSelectedIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeImage = () => {
        setSelectedIndex(null);
        document.body.style.overflow = 'auto';
    };

    const navigateImage = (direction) => {
        let newIndex = selectedIndex + direction;
        if (newIndex < 0) newIndex = images.length - 1;
        if (newIndex >= images.length) newIndex = 0;
        setSelectedIndex(newIndex);
    };

    return (
        <section id="gallery" className="pt-28 pb-10 px-4 md:px-8 bg-white">
            <div className="opacity-0 animate-fade-in">
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
                >
                    <div className="relative max-w-[90vw] max-h-[90vh]">
                        <img
                            src={images[selectedIndex]}
                            alt={`Teren ${selectedIndex + 1}`}
                            className="max-w-[90vw] max-h-[90vh] rounded-lg"
                            style={{ objectFit: 'contain' }}
                        />
                        
                        {/* Navigation buttons */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage(-1);
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                        >
                            <FaChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage(1);
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                        >
                            <FaChevronRight className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
