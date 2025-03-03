import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <footer className='w-full py-6 flex items-center justify-center text-white bg-gradient-to-r from-primary to-secondary'>
            <div className='flex flex-col items-center space-y-3'>
                <div className='flex items-center space-x-4'>
                    <p className='text-sm'>© 2024 Tennis Club. All rights reserved.</p>
                    <div className='h-4 w-px bg-white/50'></div>
                    <p className='text-sm hover:text-accent transition-colors cursor-pointer'>Privacy Policy</p>
                    <p className='text-sm hover:text-accent transition-colors cursor-pointer'>Terms of Service</p>
                </div>
                <div className='w-24 h-px bg-white/50'></div>
                <div className='flex space-x-4'>
                    <SocialIcon url='www.facebook.com' className='hover:opacity-80 transition-opacity' style={{ height: 28, width: 28 }} />
                    <SocialIcon url='www.instagram.com' className='hover:opacity-80 transition-opacity' style={{ height: 28, width: 28 }} />
                </div>
            </div>
        </footer>
    )
}
