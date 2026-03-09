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
 * Visible section divider — a luminous green haze that pulses at the seam.
 * Since all section backgrounds are near-#000, a simple color-to-color fade
 * is invisible. Instead we use a radial glow that IS visible on dark backgrounds.
 */
const SectionDivider = ({ intensity = 1 }) => (
    <div style={{
        height: '160px',
        position: 'relative',
        overflow: 'hidden',
        pointerEvents: 'none',
        margin: '-1px 0',
        background: '#000',
    }}>
        {/* Top black fade */}
        <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '50%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.9), transparent)',
            zIndex: 1,
        }} />
        {/* Central green glow */}
        <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(ellipse 70% 60% at 50% 50%, rgba(82,183,136,${0.12 * intensity}) 0%, rgba(40,100,70,${0.06 * intensity}) 40%, transparent 70%)`,
            zIndex: 2,
        }} />
        {/* Thin accent line at center */}
        <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '180px', height: '1px',
            background: `linear-gradient(to right, transparent, rgba(82,183,136,${0.35 * intensity}), transparent)`,
            zIndex: 3,
        }} />
        {/* Bottom black fade */}
        <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
            zIndex: 1,
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
