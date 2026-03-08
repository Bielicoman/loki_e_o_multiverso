import { useState, useEffect } from 'react';
import GlowCursor from './components/GlowCursor';
import HeroSection from './components/HeroSection';
import Objective from './components/Objective';
import Transmedia from './components/Transmedia';
import Multiverse from './components/Multiverse';
import Methodology from './components/Methodology';
import TreeTimeline from './components/TreeTimeline';
import Conclusion from './components/Conclusion';
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
                <References />
            </main>

            <footer style={{
                textAlign: 'center',
                padding: '3rem 2rem',
                background: 'var(--color-dark)',
                color: 'var(--color-gray)',
                fontSize: '0.85rem',
                borderTop: '1px solid var(--glass-border)',
            }}>
                <img
                    src="/loki-images/2016_Marvel_Studios_Logo.webp"
                    alt="Marvel Studios"
                    style={{ height: '28px', opacity: 0.35, marginBottom: '1rem', display: 'block', margin: '0 auto 1rem' }}
                />
                <p style={{ marginBottom: '0.4rem' }}>
                    <strong style={{ color: 'var(--color-light)' }}>Alex Ascencio &amp; Thiago Bandeira</strong> — Rádio TV do UNASP EC
                </p>
                <p>Artigo: "O Papel de Loki na Construção Narrativa do Universo Compartilhado do MCU"</p>
                <p style={{ marginTop: '0.75rem', opacity: 0.5, fontSize: '0.78rem' }}>
                    Orientadora: Andreia Moura · {new Date().getFullYear()} — Uso exclusivo acadêmico
                </p>
            </footer>
        </div>
    );
}

export default App;
