import {SocialIcon} from 'react-social-icons';

export default function Footer() {
    return (
        <footer
            className='w-full py-6 flex items-center justify-center text-white bg-gradient-to-r from-primary to-secondary'>
            <div className='flex flex-col items-center space-y-3 px-4'>
                <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-center'>
                    <p className='text-sm'>© 2025 Tenis Club Gherla. Toate drepturile rezervate.</p>
                </div>
                <div className='w-24 h-px bg-white/50'></div>
                <div className='flex flex-col items-center space-y-2'>
                    <a 
                        href="https://www.google.com/maps/place/Strada+Parcului+33,+Gherla+405300/@47.0269441,23.9140004,17z/data=!3m1!4b1!4m6!3m5!1s0x4747f8f1b1b5b5b5:0x1b1b5b5b5b5b5b5b!8m2!3d47.0269441!4d23.9140004!16s%2Fg%2F11c5x5x5x5?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:text-accent transition-colors duration-200"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                        >
                            <path 
                                fillRule="evenodd" 
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
                                clipRule="evenodd" 
                            />
                        </svg>
                        <span>Strada Parcului 33, Gherla 405300</span>
                    </a>
                </div>
                <div className='flex space-x-4 pb-4 md:pb-0'>
                    <SocialIcon url='https://www.facebook.com/profile.php?id=100005549598505' target="_blank"
                                className='hover:opacity-80 transition-opacity' style={{height: 28, width: 28}}/>
                    <SocialIcon url='https://www.instagram.com/tenis_club_gherla/' target="_blank"
                                className='hover:opacity-80 transition-opacity' style={{height: 28, width: 28}}/>
                </div>
            </div>
        </footer>
    )
}
