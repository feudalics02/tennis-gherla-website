import {FaPhone} from 'react-icons/fa6';
import logo from '../Images/logo.png'
import {SocialIcon} from 'react-social-icons'

export default function Navbar(props) {
    const pages = ['HOME', 'CONTACT', 'FACILITIES', 'PRICES', 'GALLERY']

    return (
        <nav className='top-0 left-0 fixed w-full z-50 bg-white'>
            <div className='p-3 flex justify-center text-white bg-sky-900'>
                <FaPhone className='mt-1 mr-2'/>
                <h4 className='cursor-pointer'>0743 086 789</h4>
            </div>
            <div className='w-full text-lg flex items-center justify-center space-x-8'>
                <div className='p-5'>
                    <img src={logo} className='size-24' alt='Logo'></img>
                </div>
                {pages.map((page, index) => (
                    <div className='px-8'>
                        {
                            props.selected === index
                                ? <button className='selected-button'>{page}</button>
                                : <button className='unselected-button'>{page}</button>
                        }
                    </div>
                ))}
                <div className='space-x-1'>
                    <SocialIcon url='www.facebook.com'></SocialIcon>
                    <SocialIcon url='www.instagram.com'></SocialIcon>
                </div>
            </div>
        </nav>
    )
}
