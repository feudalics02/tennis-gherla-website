import {FaPhone} from 'react-icons/fa6';
import logo from '../Images/logo.png'
import {SocialIcon} from 'react-social-icons'

export default function Navbar(props) {
    const pages = ['ACASĂ', 'CONTACT', 'FACILITĂȚI', 'PREȚURI', 'GALERIE']

    return (
        <nav className='top-0 left-0 fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-lg'>
            <div className='py-3 flex justify-center text-white bg-gradient-to-r from-primary to-secondary animate-fade-in'>
                <div className='flex items-center space-x-4 font-sans text-sm'>
                    <FaPhone className='mt-0.5'/>
                    <h4 className='cursor-pointer hover:text-accent transition-colors duration-200'>0743 086 789</h4>
                    <div className='h-4 w-px bg-white/30'></div>
                    <h4 className='cursor-pointer hover:text-accent transition-colors duration-200'>info@tennisclub.com</h4>
                </div>
            </div>
            <div className='w-full flex items-center justify-between px-8 py-4'>
                <div className='flex items-center space-x-12'>
                    <div className='p-2'>
                        <img src={logo} className='size-20 hover:scale-105 transition-transform duration-300' alt='Logo'></img>
                    </div>
                    <div className='flex space-x-8 font-sans font-medium text-gray-700'>
                        {pages.map((page, index) => (
                            <div key={index} className='relative group'>
                                <button className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                                    props.selected === index 
                                        ? 'text-primary bg-primary/10'
                                        : 'hover:text-primary hover:bg-primary/5'
                                }`}>
                                    {page}
                                </button>
                                <div className={`absolute bottom-0 left-1/2 h-0.5 bg-primary transition-all duration-300 ${
                                    props.selected === index 
                                        ? 'w-full -translate-x-1/2'
                                        : 'w-0 group-hover:w-full group-hover:-translate-x-1/2'
                                }`}></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex space-x-4'>
                    <SocialIcon 
                        url='www.facebook.com' 
                        className='hover:opacity-80 transition-opacity duration-200'
                        fgColor='white'
                        bgColor='transparent'
                        style={{ height: 32, width: 32 }}
                    />
                    <SocialIcon 
                        url='www.instagram.com' 
                        className='hover:opacity-80 transition-opacity duration-200'
                        fgColor='white'
                        bgColor='transparent'
                        style={{ height: 32, width: 32 }}
                    />
                </div>
            </div>
        </nav>
    )
}
