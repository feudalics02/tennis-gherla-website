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
        <main className='min-h-screen flex flex-col'>
            <Navbar/>
            <Routes>
                <Route path="/facilitati" element={<Facilitati/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
        </main>
    );
}
