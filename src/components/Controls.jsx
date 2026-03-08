import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Moon, Sun } from 'lucide-react';

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
                src="/loki-theme.mp3"
                loop
                muted={isMuted}
            />

            <button
                onClick={toggleTheme}
                style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--color-accent)',
                    padding: '0.75rem',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.2s ease, background 0.2s ease'
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
                {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>

            <button
                onClick={toggleMute}
                style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--color-accent)',
                    padding: '0.75rem',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.2s ease, background 0.2s ease'
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
        </div>
    );
};

export default Controls;
