import { useEffect, useRef } from 'react';

const GlowCursor = () => {
    const cursorRef = useRef(null);
    const animRef = useRef(null);
    const mousePos = useRef({ x: -200, y: -200 });
    const isHovering = useRef(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const onMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const loop = () => {
            const { x, y } = mousePos.current;
            cursor.style.transform = `translate(${x - 16}px, ${y - 16}px)`;
            animRef.current = requestAnimationFrame(loop);
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        animRef.current = requestAnimationFrame(loop);
        document.body.style.cursor = 'none';

        // Scale on interactive elements
        const onEnter = () => {
            isHovering.current = true;
            cursor.style.width = '42px';
            cursor.style.height = '42px';
            cursor.style.opacity = '0.9';
        };
        const onLeave = () => {
            isHovering.current = false;
            cursor.style.width = '32px';
            cursor.style.height = '32px';
            cursor.style.opacity = '0.75';
        };

        const interactive = document.querySelectorAll('a, button, [role="button"], input');
        interactive.forEach(el => {
            el.addEventListener('mouseenter', onEnter);
            el.addEventListener('mouseleave', onLeave);
        });

        return () => {
            window.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(animRef.current);
            document.body.style.cursor = '';
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            style={{
                position: 'fixed',
                zIndex: 99999,
                width: '32px',
                height: '32px',
                top: 0,
                left: 0,
                borderRadius: '50%',
                pointerEvents: 'none',
                willChange: 'transform',
                opacity: 0.75,
                transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',

                // The mystical glass orb
                background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.35) 0%, rgba(120,200,160,0.18) 35%, rgba(60,120,100,0.08) 70%, transparent 100%)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(160,255,200,0.35)',
                boxShadow: `
                    0 0 10px 2px rgba(82,183,136,0.35),
                    0 0 24px 6px rgba(82,183,136,0.12),
                    inset 0 1px 0 rgba(255,255,255,0.4),
                    inset 0 -1px 0 rgba(0,0,0,0.1)
                `,
            }}
        />
    );
};

export default GlowCursor;
