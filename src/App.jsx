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

// Gradient band that blends from one section color to the next
const Fade = ({ from, to }) => (
    <div style={{
        height: '90px',
        background: `linear-gradient(to bottom, ${from}, ${to})`,
        pointerEvents: 'none',
        margin: '-1px 0',          // overlap by 1px to avoid bright seams
        position: 'relative',
        zIndex: 0,
    }} />
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
                {/* Hero → Objective */}
                <HeroSection />
                <Fade from="#050d07" to="#080f0a" />

                {/* Objective → Transmídia */}
                <Objective />
                <Fade from="#080f0a" to="#0d1a10" />

                {/* Transmídia → Origem */}
                <Transmedia />
                <Fade from="#0d1a10" to="#020a05" />

                {/* Origem → Multiverso */}
                <LokiOrigin />
                <Fade from="#020a05" to="#060e08" />

                {/* Multiverso → Metodologia */}
                <Multiverse />
                <Fade from="#060e08" to="#050d07" />

                {/* Metodologia → Evolução */}
                <Methodology />
                <Fade from="#050d07" to="#080f0a" />

                {/* Evolução → Conclusão */}
                <TreeTimeline />
                <Fade from="#080f0a" to="#030b05" />

                {/* Conclusão → Vídeo */}
                <Conclusion />
                <Fade from="#030b05" to="#000000" />

                <GloriousVideo />
                <Fade from="#000000" to="#060e08" />

                <References />
            </main>
        </div>
    );
}

export default App;
