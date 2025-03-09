import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className="pt-28 pb-10 px-4 py-16 px-4 md:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">
                    Contact
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="flex items-start space-x-6">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <FaMapMarkerAlt className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Adresă</h3>
                                <p className="text-gray-600">
                                    <a 
                                        href="https://www.google.com/maps?q=Strada+Parcului+33,+Gherla,+405300" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Str. Parcului, nr. 33<br />
                                        Gherla, 405300<br />
                                        România
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <FaPhone className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Telefon</h3>
                                <p className="text-gray-600">
                                    <a href="tel:0743086789" className="hover:text-primary transition-colors">
                                        0743 086 789
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <FaEnvelope className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                                <p className="text-gray-600">
                                    <a href="mailto:info@tenisclubgherla.ro" className="hover:text-primary transition-colors">
                                        info@tenisclubgherla.ro
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <FaClock className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Program</h3>
                                <p className="text-gray-600">
                                    Luni - Duminică: 8:00 - 22:00
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            title="Club Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.123456789012!2d23.900000000000006!3d46.900000000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4749f7b1b2b2b2b2%3A0xb2b2b2b2b2b2b2b2!2sStrada+Parcului+33%2C+Gherla+405300%2C+Romania!5e0!3m2!1sen!2sro!4v1234567890123!5m2!1sen!2sro"
                            style={{ pointerEvents: 'none' }}
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
