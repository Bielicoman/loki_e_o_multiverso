import { useEffect, useRef } from 'react';

const GlowCursor = () => {
    const orbRef = useRef(null);
    const animRef = useRef(null);
    const mousePos = useRef({ x: -300, y: -300 });
    const stateRef = useRef('default'); // 'default' | 'hover' | 'text'

    useEffect(() => {
        const orb = orbRef.current;
        if (!orb) return;

        // Hide ALL cursors — native and fallbacks
        const styleTag = document.createElement('style');
        styleTag.id = 'cursor-hide';
        styleTag.textContent = `
            *, *::before, *::after {
                cursor: none !important;
            }
        `;
        document.head.appendChild(styleTag);

        // Track mouse position
        const onMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', onMove, { passive: true });

        // rAF loop — instant, no lag
        const loop = () => {
            const { x, y } = mousePos.current;
            const size = stateRef.current === 'hover' ? 48
                : stateRef.current === 'text' ? 4
                    : 32;
            const halfSize = size / 2;
            orb.style.transform = `translate(${x - halfSize}px, ${y - halfSize}px)`;
            orb.style.width = `${size}px`;
            orb.style.height = `${size}px`;
            animRef.current = requestAnimationFrame(loop);
        };
        animRef.current = requestAnimationFrame(loop);

        // Interactive: links, buttons
        const setHover = () => { stateRef.current = 'hover'; applyState(orb, 'hover'); };
        const unsetHover = () => { stateRef.current = 'default'; applyState(orb, 'default'); };

        // Text elements
        const setText = () => { stateRef.current = 'text'; applyState(orb, 'text'); };
        const unsetText = () => { stateRef.current = 'default'; applyState(orb, 'default'); };

        const addListeners = () => {
            document.querySelectorAll('a, button, [role="button"], input[type="submit"], select').forEach(el => {
                el.addEventListener('mouseenter', setHover);
                el.addEventListener('mouseleave', unsetHover);
            });
            document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li').forEach(el => {
                el.addEventListener('mouseenter', setText);
                el.addEventListener('mouseleave', unsetText);
            });
        };
        addListeners();

        // Re-add after react re-renders
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
        <div
            ref={orbRef}
            style={{
                position: 'fixed',
                zIndex: 999999,
                top: 0,
                left: 0,
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                pointerEvents: 'none',
                willChange: 'transform, width, height',
                transition: 'width 0.15s ease, height 0.15s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, border-radius 0.2s ease',

                // Mystical glass orb
                background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.45) 0%, rgba(140,220,180,0.25) 30%, rgba(60,140,110,0.1) 65%, transparent 100%)',
                backdropFilter: 'blur(6px)',
                border: '1.5px solid rgba(180,255,220,0.5)',
                boxShadow: `
                    0 0 12px 4px rgba(82,183,136,0.55),
                    0 0 35px 10px rgba(82,183,136,0.2),
                    0 0 70px 20px rgba(40,120,80,0.1),
                    inset 0 1.5px 0 rgba(255,255,255,0.55),
                    inset 0 -1px 0 rgba(0,0,0,0.12)
                `,
            }}
            id="mystical-cursor"
        />
    );
};

// Apply visual state changes based on hover type
function applyState(orb, state) {
    if (state === 'hover') {
        orb.style.background = 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5) 0%, rgba(180,255,210,0.3) 30%, rgba(80,170,130,0.15) 65%, transparent 100%)';
        orb.style.borderColor = 'rgba(200,255,230,0.7)';
        orb.style.boxShadow = `
            0 0 18px 6px rgba(82,183,136,0.75),
            0 0 50px 18px rgba(82,183,136,0.3),
            0 0 100px 30px rgba(40,120,80,0.15),
            inset 0 2px 0 rgba(255,255,255,0.6)
        `;
        orb.style.borderRadius = '50%';
    } else if (state === 'text') {
        orb.style.background = 'rgba(180,255,220,0.6)';
        orb.style.borderColor = 'rgba(180,255,220,0.8)';
        orb.style.boxShadow = `0 0 10px 3px rgba(82,183,136,0.8), 0 0 25px 8px rgba(82,183,136,0.3)`;
        orb.style.borderRadius = '2px';
        orb.style.width = '3px';
        orb.style.height = '22px';
    } else {
        orb.style.background = 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.45) 0%, rgba(140,220,180,0.25) 30%, rgba(60,140,110,0.1) 65%, transparent 100%)';
        orb.style.borderColor = 'rgba(180,255,220,0.5)';
        orb.style.boxShadow = `
            0 0 12px 4px rgba(82,183,136,0.55),
            0 0 35px 10px rgba(82,183,136,0.2),
            0 0 70px 20px rgba(40,120,80,0.1),
            inset 0 1.5px 0 rgba(255,255,255,0.55)
        `;
        orb.style.borderRadius = '50%';
    }
}

export default GlowCursor;
