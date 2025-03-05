import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home/Home";
import Facilitati from "./Facilitati";
import Footer from "./Footer";

export default function App() {
    return (
        <Router>
            <AppContent/>
        </Router>
    );
}

function AppContent() {
    return (
        <main className='flex flex-col min-h-screen'>
            <Navbar/>
            <div className='flex-grow pt-20'> {/* Add padding-top to account for navbar height */}
                <Routes>
                    <Route path="/facilitati" element={<Facilitati/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
            <Footer/>
        </main>
    );
}
