import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <footer className='w-full py-6 flex items-center justify-center text-white bg-gradient-to-r from-primary to-secondary'>
            <div className='flex flex-col items-center space-y-3 px-4'>
                <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-center'>
                    <p className='text-sm'>© 2024 Club de Tenis. Toate drepturile rezervate.</p>
                    <div className='hidden md:block h-4 w-px bg-white/50'></div>
                    <p className='text-sm hover:text-accent transition-colors cursor-pointer'>Politica de Confidențialitate</p>
                    <div className='hidden md:block h-4 w-px bg-white/50'></div>
                    <p className='text-sm hover:text-accent transition-colors cursor-pointer'>Termeni și Condiții</p>
                </div>
                <div className='w-24 h-px bg-white/50'></div>
                <div className='flex space-x-4 pb-4 md:pb-0'>
                    <SocialIcon url='www.facebook.com' className='hover:opacity-80 transition-opacity' style={{ height: 28, width: 28 }} />
                    <SocialIcon url='www.instagram.com' className='hover:opacity-80 transition-opacity' style={{ height: 28, width: 28 }} />
                </div>
            </div>
        </footer>
    )
}
