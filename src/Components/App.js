import Navbar from "./Navbar";
import Footer from "./Footer";
import wallpaper from '../Images/wallpaper.jpg';

export default function App() {
    return (
        <main className='min-h-screen flex flex-col'>
            <Navbar selected={0}/>
            <div className='flex-grow relative'>
                <div className='absolute inset-0 bg-black/50'></div>
                <img 
                    src={wallpaper} 
                    className='w-full h-screen object-cover animate-fade-in' 
                    alt='Wallpaper'
                />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                    <h1 className='text-6xl font-heading font-bold text-white mb-4 animate-slide-up'>
                        Bine ați venit la Clubul Nostru de Tenis
                    </h1>
                    <p className='text-xl text-white mb-8 animate-slide-up animation-delay-100'>
                        Destinația ta de top pentru excelență în tenis
                    </p>
                    <button className='bg-accent text-white px-8 py-3 rounded-full hover:bg-secondary transition-all duration-300 animate-slide-up animation-delay-200'>
                        Rezervă acum
                    </button>
                </div>
            </div>
            <Footer/>
        </main>
    );
}
