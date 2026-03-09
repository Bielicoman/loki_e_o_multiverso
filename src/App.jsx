import { useState, useEffect } from 'react';
import GlowCursor from './components/GlowCursor';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Objective from './components/Objective';
import Transmedia from './components/Transmedia';
import LokiOrigin from './components/LokiOrigin';
import Multiverse from './components/Multiverse';
import Methodology from './components/Methodology';
import TreeTimeline from './components/TreeTimeline';
import Conclusion from './components/Conclusion';
import GloriousVideo from './components/GloriousVideo';
import References from './components/References';
import Controls from './components/Controls';
import './App.css';

function App() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        // Global smooth scroll
        document.documentElement.style.scrollBehavior = 'smooth';
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

    return (
        <div className="app-container">
            <GlowCursor />
            <NavBar />
            <Controls theme={theme} toggleTheme={toggleTheme} />

            <main>
                <HeroSection />

                {/* Gradient transition */}
                <div style={{ height: '4px', background: 'linear-gradient(to right, #1a2e22, #52b78822, #1a2e22)' }} />

                <Objective />

                <div style={{ height: '4px', background: 'linear-gradient(to right, transparent, #40916c33, transparent)' }} />

                <Transmedia />

                <div style={{ height: '4px', background: 'linear-gradient(to right, #0a1a10, #2d6a4f44, #0a1a10)' }} />

                <LokiOrigin />

                <div style={{ height: '4px', background: 'linear-gradient(to right, transparent, #52b78833, transparent)' }} />

                <Multiverse />

                <div style={{ height: '4px', background: 'linear-gradient(to right, #050e08, #1b432244, #050e08)' }} />

                <Methodology />

                <div style={{ height: '4px', background: 'linear-gradient(to right, transparent, #40916c33, transparent)' }} />

                <TreeTimeline />

                <div style={{ height: '4px', background: 'linear-gradient(to right, #0a1a10, #52b78822, #0a1a10)' }} />

                <Conclusion />
                <GloriousVideo />
                <References />
            </main>
        </div>
    );
}

export default App;
