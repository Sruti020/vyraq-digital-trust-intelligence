import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Capabilities from './components/Capabilities';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    if (currentPage === 'dashboard') {
        return <Dashboard />;
    }

    return (
        <div className="min-h-screen bg-[#0B1424] text-white">
            <Navbar onGetStarted={() => setCurrentPage('dashboard')} />
            <Hero onStartVerification={() => setCurrentPage('dashboard')} />
            <Capabilities />
            <HowItWorks />
            <About />
            <Contact />
        </div>
    );
}

export default App;
