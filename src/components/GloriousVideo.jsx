import { motion } from 'framer-motion';
import { useRef } from 'react';

const GloriousVideo = () => {
    const videoRef = useRef(null);

    return (
        <section
            id="glorioso-proposito"
            style={{
                position: 'relative',
                background: '#000',
                overflow: 'hidden',
            }}
        >

            {/* Video — autoplay, loop, muted, no controls */}
            <video
                ref={videoRef}
                src="/glorioso-proposito.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{
                    width: '100%',
                    display: 'block',
                    maxHeight: '85vh',
                    objectFit: 'contain',
                    background: '#000',
                    animation: 'videoFade 1.2s ease-in-out',
                }}
            />
            <style>{`
                @keyframes videoFade {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
            `}</style>

            {/* Bottom gradient */}
            <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: '120px',
                background: 'linear-gradient(to top, var(--color-dark), transparent)',
                pointerEvents: 'none',
                zIndex: 5,
            }} />
        </section>
    );
};

export default GloriousVideo;
