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
        <main className='flex flex-col'>
            <Navbar/>
            <div className='flex-grow'>
                <Routes>
                    <Route path="/facilitati" element={<Facilitati/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
            <Footer/>
        </main>
    );
}
