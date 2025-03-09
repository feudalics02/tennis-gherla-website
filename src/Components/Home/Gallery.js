import teren1 from '../../Images/gallery/teren-1.jpeg';
import teren2 from '../../Images/gallery/teren-2.jpeg';
import teren3 from '../../Images/gallery/teren-3.jpeg';

export default function Gallery({galleryRef}) {
    const images = {
        1: teren1,
        2: teren2,
        3: teren3,
        4: teren2,
    };

    const handleImageClick = (index) => {
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
        img.src = images[index] || teren3;
        img.className = 'rounded-lg shadow-2xl max-w-[90vw] max-h-[90vh] object-contain';

        imgContainer.appendChild(img);
        imgContainer.appendChild(closeBtn);
        lightbox.appendChild(imgContainer);
        document.body.appendChild(lightbox);
    };

    return (
        <section ref={galleryRef} className='py-16 px-4 md:px-8 bg-gray-50 opacity-0'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center'>
                    Galerie Foto
                </h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center mx-auto w-fit'>
                    {[2, 1, 3, 4].map((index) => (
                        <div
                            key={index}
                            className='relative cursor-pointer justify-center justify-self-center mx-auto'
                            onClick={() => handleImageClick(index)}
                        >
                            <img
                                src={images[index] || teren3}
                                alt={`Gallery ${index}`}
                                className='w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105'
                            />
                            <div
                                className='absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
