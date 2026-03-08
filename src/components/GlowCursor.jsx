import { useEffect, useRef } from 'react';

const GlowCursor = () => {
    const cursorRef = useRef(null);
    const trailRef = useRef(null);
    const rafRef = useRef(null);
    const posRef = useRef({ x: -100, y: -100 });
    const trailPos = useRef({ x: -100, y: -100 });

    useEffect(() => {
        const cursor = cursorRef.current;
        const trail = trailRef.current;
        if (!cursor || !trail) return;

        const onMove = (e) => {
            posRef.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            // Trail lags behind
            trailPos.current.x += (posRef.current.x - trailPos.current.x) * 0.12;
            trailPos.current.y += (posRef.current.y - trailPos.current.y) * 0.12;

            cursor.style.transform = `translate(${posRef.current.x - 8}px, ${posRef.current.y - 8}px)`;
            trail.style.transform = `translate(${trailPos.current.x - 20}px, ${trailPos.current.y - 20}px)`;

            rafRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        rafRef.current = requestAnimationFrame(animate);

        // Pointer interaction
        const onEnter = () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.background = 'rgba(230,194,0,0.9)';
        };
        const onLeave = () => {
            cursor.style.width = '10px';
            cursor.style.height = '10px';
            cursor.style.background = 'rgba(230,194,0,0.95)';
        };

        window.document.querySelectorAll('a, button, [role="button"]').forEach(el => {
            el.addEventListener('mouseenter', onEnter);
            el.addEventListener('mouseleave', onLeave);
        });

        // Hide default cursor via body
        document.body.style.cursor = 'none';

        return () => {
            window.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(rafRef.current);
            document.body.style.cursor = '';
        };
    }, []);

    return (
        <>
            {/* Main cursor dot */}
            <div
                ref={cursorRef}
                style={{
                    position: 'fixed',
                    zIndex: 99999,
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: 'rgba(230,194,0,0.95)',
                    pointerEvents: 'none',
                    mixBlendMode: 'normal',
                    boxShadow: '0 0 12px 4px rgba(230,194,0,0.7), 0 0 30px 8px rgba(230,194,0,0.3)',
                    transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease',
                    willChange: 'transform',
                    top: 0,
                    left: 0,
                }}
            />
            {/* Glow aura trail */}
            <div
                ref={trailRef}
                style={{
                    position: 'fixed',
                    zIndex: 99998,
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(230,194,0,0.15) 0%, rgba(100,255,120,0.05) 60%, transparent 100%)',
                    pointerEvents: 'none',
                    willChange: 'transform',
                    top: 0,
                    left: 0,
                }}
            />
        </>
    );
};

export default GlowCursor;
