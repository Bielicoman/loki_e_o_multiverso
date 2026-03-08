import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Moon, Sun, Download } from 'lucide-react';

const Controls = ({ theme, toggleTheme }) => {
    const [isMuted, setIsMuted] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        // Attempt autoplay if not muted (browsers usually block this though)
        if (!isMuted && audioRef.current) {
            audioRef.current.play().catch(e => console.log('Autoplay blocked', e));
        }
    }, [isMuted]);

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
            setIsMuted(audioRef.current.muted);
            if (!audioRef.current.muted) {
                audioRef.current.play().catch(e => console.log('Autoplay blocked', e));
            }
        }
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            display: 'flex',
            gap: '1rem',
            zIndex: 1000
        }}>
            <audio
                ref={audioRef}
                src="/loki-theme.m4a"
                loop
                muted={isMuted}
            />

            <button
                onClick={toggleTheme}
                style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--glass-shadow)',
                    color: 'var(--text-color)',
                    padding: '1rem',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseOver={e => {
                    e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseOut={e => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.background = 'var(--glass-bg)';
                }}
            >
                {theme === 'dark' ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
            </button>

            <button
                onClick={toggleMute}
                style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--glass-shadow)',
                    color: 'var(--text-color)',
                    padding: '1rem',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseOver={e => {
                    e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseOut={e => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.background = 'var(--glass-bg)';
                }}
            >
                {isMuted ? <VolumeX size={20} strokeWidth={1.5} /> : <Volume2 size={20} strokeWidth={1.5} />}
            </button>
            <a
                href="/loki_text.pdf"
                download="Artigo_Loki_Multiverso_MCU.pdf"
                title="Download PDF do Artigo Original"
                style={{
                    background: 'var(--color-accent)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 10px 30px rgba(230, 194, 0, 0.3)',
                    color: 'var(--color-primary)',
                    padding: '1rem',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseOver={e => {
                    e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
                    e.currentTarget.style.background = '#ffd700'; /* Brighter gold on hover */
                }}
                onMouseOut={e => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.background = 'var(--color-accent)';
                }}
            >
                <Download size={20} strokeWidth={2} />
            </a>
        </div>
    );
};

export default Controls;
