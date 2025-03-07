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
