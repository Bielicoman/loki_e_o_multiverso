import { useState, useEffect } from 'react';
import Header from './components/Header';
import Objective from './components/Objective';
import Transmedia from './components/Transmedia';
import Multiverse from './components/Multiverse';
import Timeline from './components/Timeline';
import Conclusion from './components/Conclusion';
import References from './components/References';
import Controls from './components/Controls';
import './App.css';

function App() {
    const [theme, setTheme] = useState('dark');

    // Sync theme with document element
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="app-container">
            <Controls theme={theme} toggleTheme={toggleTheme} />

            <main>
                <Header />
                <Objective />
                <Transmedia />
                <Multiverse />
                <Timeline />
                <Conclusion />
                <References />
            </main>

            <footer style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'var(--color-dark)',
                color: 'var(--color-gray)',
                fontSize: '0.9rem',
                borderTop: '1px solid var(--glass-border)'
            }}>
                <p>Desenvolvido para apresentação do artigo "O PAPEL DE LOKI NA CONSTRUÇÃO NARRATIVA DO UNIVERSO COMPARTILHADO DO MCU"</p>
            </footer>
        </div>
    );
}

export default App;
