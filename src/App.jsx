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

/**
 * Elegant minimal section divider — a single thin glowing line.
 */
const SectionDivider = () => (
    <div style={{
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        background: 'transparent',
    }}>
        <div style={{
            width: '160px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(82,183,136,0.45), transparent)',
        }} />
    </div>
);

function App() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
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
                <SectionDivider intensity={1.2} />
                <Objective />
                <SectionDivider intensity={1} />
                <Transmedia />
                <SectionDivider intensity={1.3} />
                <LokiOrigin />
                <SectionDivider intensity={1} />
                <Multiverse />
                <SectionDivider intensity={1.2} />
                <Methodology />
                <SectionDivider intensity={1} />
                <TreeTimeline />
                <SectionDivider intensity={1.5} />
                <Conclusion />
                <SectionDivider intensity={0.6} />
                <GloriousVideo />
                <SectionDivider intensity={1} />
                <References />
            </main>
        </div>
    );
}

export default App;
