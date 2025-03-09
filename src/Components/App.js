import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import Navbar from "./Navbar";
import Home from "./Home/Home";
import Facilities from "./Facilities";
import Footer from "./Footer";
import Contact from "./Contact";

export default function App() {
    return (
        <Router basename="/">
            <ScrollToTop/>
            <AppContent/>
        </Router>
    );
}

function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function AppContent() {
    return (
        <main className='flex flex-col min-h-screen'>
            <Navbar/>
            <div className='flex-grow pt-20'> {/* Add padding-top to account for navbar height */}
                <Routes>
                    <Route path="/facilitati" element={<Facilities/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
            <Footer/>
        </main>
    );
}
