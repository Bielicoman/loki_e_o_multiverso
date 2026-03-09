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
            {/* Label */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    textAlign: 'center',
                }}
            >
                <span style={{
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(230,194,0,0.3)',
                    color: 'var(--color-accent)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '100px',
                }}>
                    Glorioso Propósito
                </span>
            </motion.div>

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
