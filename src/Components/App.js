import Navbar from "./Navbar";
import Footer from "./Footer";
import wallpaper from '../Images/wallpaper.jpg';

export default function App() {
    return (
        <main className='h-110 flex flex-col'>
            <Navbar selected={0}/>
            <div className='flex-grow'>
                <img src={wallpaper} className='w-full sticky h-screen' alt='Wallpaper'></img>
            </div>
            <Footer/>
        </main>
    );
}
