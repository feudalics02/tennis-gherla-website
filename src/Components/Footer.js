export default function Footer() {
    return (
        <footer className='w-full h-20 flex items-center justify-center text-white bg-primary'>
            <div className='flex items-center space-x-4'>
                <p className='text-sm'>© 2024 Resort Name. All rights reserved.</p>
                <div className='h-4 w-px bg-white/50'></div>
                <p className='text-sm hover:text-accent transition-colors cursor-pointer'>Privacy Policy</p>
                <p className='text-sm hover:text-accent transition-colors cursor-pointer'>Terms of Service</p>
            </div>
        </footer>
    )
}
