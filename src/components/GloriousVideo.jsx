import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const GloriousVideo = () => {
    const videoRef = useRef(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { threshold: 0.3 });
    const freezeTimerRef = useRef(null);
    const isFrozenRef = useRef(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            if (!video.duration || isFrozenRef.current) return;
            const remaining = video.duration - video.currentTime;

            if (remaining <= 3 && remaining > 0) {
                // Gradually slow down in last 3 seconds
                // Map remaining [3→0] to playbackRate [1→0]
                const rate = Math.max(0.01, remaining / 3);
                video.playbackRate = rate;

                // Freeze at last ~0.1s
                if (remaining <= 0.12) {
                    video.playbackRate = 0;
                    video.pause();
                    isFrozenRef.current = true;

                    // Resume loop after 2s of freeze
                    freezeTimerRef.current = setTimeout(() => {
                        video.playbackRate = 1;
                        video.currentTime = 0;
                        video.play();
                        isFrozenRef.current = false;
                    }, 2000);
                }
            } else if (remaining > 3) {
                // Normal playback
                if (video.playbackRate !== 1) video.playbackRate = 1;
            }
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
            clearTimeout(freezeTimerRef.current);
        };
    }, []);

    // Play/pause based on view
    useEffect(() => {
        const video = videoRef.current;
        if (!video || isFrozenRef.current) return;
        if (isInView) {
            video.play().catch(() => { });
        } else {
            // When scrolled away, reset to normal speed
            video.playbackRate = 1;
        }
    }, [isInView]);

    return (
        <section
            ref={sectionRef}
            id="glorioso-proposito"
            style={{
                position: 'relative',
                background: '#000',
                overflow: 'hidden',
            }}
        >
            {/* Video — autoplay, loop managed by JS, muted, no controls */}
            <video
                ref={videoRef}
                src="/glorioso-proposito.mp4"
                autoPlay
                muted
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
