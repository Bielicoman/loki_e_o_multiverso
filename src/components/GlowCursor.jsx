import { useEffect, useRef } from 'react';

const GlowCursor = () => {
    // Disable on touch / coarse-pointer devices (mobile, tablet) and reduced motion
    const isTouch = typeof window !== 'undefined' &&
        (window.matchMedia('(pointer: coarse)').matches ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    const orbRef = useRef(null);
    const ibeamRef = useRef(null);
    const animRef = useRef(null);
    const mousePos = useRef({ x: -300, y: -300 });
    const stateRef = useRef('default');

    useEffect(() => {
        if (isTouch) return;

        const orb = orbRef.current;
        const ibeam = ibeamRef.current;
        if (!orb || !ibeam) return;

        // Hide all native cursors globally
        const styleTag = document.createElement('style');
        styleTag.id = 'cursor-hide';
        styleTag.textContent = `*, *::before, *::after { cursor: none !important; }`;
        document.head.appendChild(styleTag);

        const onMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', onMove, { passive: true });

        const loop = () => {
            const { x, y } = mousePos.current;
            const isText = stateRef.current === 'text';
            const size = stateRef.current === 'hover' ? 46 : 30;
            const half = size / 2;

            if (isText) {
                orb.style.opacity = '0';
                ibeam.style.opacity = '1';
                ibeam.style.transform = `translate(${x - 6}px, ${y - 12}px)`;
            } else {
                orb.style.opacity = stateRef.current === 'hover' ? '0.95' : '0.72';
                orb.style.width = `${size}px`;
                orb.style.height = `${size}px`;
                orb.style.transform = `translate(${x - half}px, ${y - half}px)`;
                ibeam.style.opacity = '0';
            }

            animRef.current = requestAnimationFrame(loop);
        };
        animRef.current = requestAnimationFrame(loop);

        const setHover = () => { stateRef.current = 'hover'; applyOrb(orb, 'hover'); };
        const setText = () => { stateRef.current = 'text'; };
        const setDefault = () => { stateRef.current = 'default'; applyOrb(orb, 'default'); };

        const addListeners = () => {
            document.querySelectorAll('a, button, [role="button"], select').forEach(el => {
                el.addEventListener('mouseenter', setHover);
                el.addEventListener('mouseleave', setDefault);
            });
            document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li, blockquote').forEach(el => {
                el.addEventListener('mouseenter', setText);
                el.addEventListener('mouseleave', setDefault);
            });
        };
        addListeners();

        const observer = new MutationObserver(addListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(animRef.current);
            observer.disconnect();
            document.getElementById('cursor-hide')?.remove();
        };
    }, []);

    return (
        <>
            {/* Glass orb — default & hover state */}
            <div
                ref={orbRef}
                style={{
                    position: 'fixed',
                    zIndex: 999999,
                    top: 0, left: 0,
                    width: '30px', height: '30px',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    willChange: 'transform, width, height',
                    transition: 'width 0.12s ease, height 0.12s ease, opacity 0.15s ease',
                    background: 'radial-gradient(circle at 32% 32%, rgba(255,255,255,0.42) 0%, rgba(140,220,180,0.22) 32%, rgba(60,140,110,0.08) 65%, transparent 100%)',
                    backdropFilter: 'blur(7px)',
                    border: '1.5px solid rgba(180,255,210,0.45)',
                    boxShadow: `
                        0 0 14px 4px rgba(82,183,136,0.5),
                        0 0 40px 12px rgba(82,183,136,0.18),
                        0 0 80px 24px rgba(40,120,80,0.08),
                        inset 0 1.5px 0 rgba(255,255,255,0.5)
                    `,
                }}
            />

            {/* I-beam — text state */}
            <div
                ref={ibeamRef}
                style={{
                    position: 'fixed',
                    zIndex: 999999,
                    top: 0, left: 0,
                    pointerEvents: 'none',
                    willChange: 'transform',
                    opacity: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 0,
                    transition: 'opacity 0.1s ease',
                }}
            >
                {/* Top serif */}
                <div style={{
                    width: '11px', height: '2px',
                    background: 'rgba(140,255,200,0.85)',
                    borderRadius: '1px',
                    boxShadow: '0 0 6px rgba(82,183,136,0.9)',
                }} />
                {/* Vertical stem */}
                <div style={{
                    width: '2px', height: '20px',
                    background: 'linear-gradient(to bottom, rgba(140,255,200,0.9), rgba(82,183,136,0.7))',
                    boxShadow: '0 0 8px rgba(82,183,136,0.85), 0 0 20px rgba(82,183,136,0.3)',
                }} />
                {/* Bottom serif */}
                <div style={{
                    width: '11px', height: '2px',
                    background: 'rgba(140,255,200,0.85)',
                    borderRadius: '1px',
                    boxShadow: '0 0 6px rgba(82,183,136,0.9)',
                }} />
            </div>
        </>
    );
};

function applyOrb(orb, state) {
    if (state === 'hover') {
        orb.style.borderColor = 'rgba(200,255,230,0.65)';
        orb.style.boxShadow = `
            0 0 20px 7px rgba(82,183,136,0.7),
            0 0 55px 20px rgba(82,183,136,0.25),
            inset 0 2px 0 rgba(255,255,255,0.55)
        `;
    } else {
        orb.style.borderColor = 'rgba(180,255,210,0.45)';
        orb.style.boxShadow = `
            0 0 14px 4px rgba(82,183,136,0.5),
            0 0 40px 12px rgba(82,183,136,0.18),
            inset 0 1.5px 0 rgba(255,255,255,0.5)
        `;
    }
}

export default GlowCursor;
