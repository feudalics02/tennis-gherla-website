import { useRef } from 'react';
import teren4 from '../Images/gallery/teren-4.jpg';

export default function About({ aboutRef }) {
    return (
        <section ref={aboutRef} className='py-16 px-4 md:px-8 bg-white opacity-0'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center'>
                    Despre Noi
                </h2>
                <div className='grid md:grid-cols-2 gap-8 items-center'>
                    <div className='space-y-4 text-gray-700'>
                        <p>
                            <b>TENIS CLUB GHERLA</b> este un club modern de tenis, dedicat pasionaților
                            de toate nivelurile. Ne mândrim cu facilitățile noastre constând în trei
                            terenuri de tenis, dintre care unul acoperit, de hard.
                        </p>
                        <p>
                            Fondat în urmă cu <b>peste 20 de ani</b>, clubul a devenit un punct de
                            referință în comunitatea locală, oferind cursuri pentru pasionații de tenis
                            de toate vârstele și toate nivelurile de joc.
                        </p>
                        <p>
                            Viziunea noastră este să promovăm tenisul ca stil de viață și să creăm <b>o
                            comunitate puternică</b> de iubitori ai acestui sport.
                        </p>
                    </div>
                    <img
                        src={teren4}
                        alt="Teren de tenis"
                        className='w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105'
                    />
                </div>
            </div>
        </section>
    );
}
