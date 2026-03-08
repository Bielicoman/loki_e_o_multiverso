import { useState, useEffect } from 'react';
import GlowCursor from './components/GlowCursor';
import HeroSection from './components/HeroSection';
import Objective from './components/Objective';
import Transmedia from './components/Transmedia';
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
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="app-container">
            <GlowCursor />
            <Controls theme={theme} toggleTheme={toggleTheme} />

            <main>
                <HeroSection />
                <Objective />
                <Transmedia />
                <Multiverse />
                <Methodology />
                <TreeTimeline />
                <Conclusion />
                <GloriousVideo />
                <References />
            </main>
        </div>
    );
}

export default App;
