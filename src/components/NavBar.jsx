import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
    { label: 'Objetivo', href: '#objetivo' },
    { label: 'Transmídia', href: '#transmidia' },
    { label: 'Origem', href: '#origem-loki' },
    { label: 'Multiverso', href: '#multiverso' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Evolução', href: '#linha-do-tempo' },
    { label: 'Conclusão', href: '#conclusao' },
    { label: 'Referências', href: '#referencias' },
];

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 100);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (e, href) => {
        e.preventDefault();
        if (href === '#top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActive('');
            return;
        }
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActive(href);
        }
    };

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: scrolled ? 1 : 0.55 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
                position: 'fixed',
                top: '0.75rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 9000,
                display: 'flex',
                alignItems: 'center',
                gap: '0.1rem',
                background: scrolled
                    ? 'rgba(4, 8, 6, 0.75)'
                    : 'rgba(4, 8, 6, 0.35)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '100px',
                padding: '0.3rem 0.5rem',
                boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.35)' : 'none',
                transition: 'all 0.4s ease',
                maxWidth: 'calc(100vw - 2rem)',
            }}
        >
            {/* Home button */}
            <a
                href="#top"
                onClick={e => scrollTo(e, '#top')}
                title="Voltar ao topo"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'rgba(82,183,136,0.12)',
                    border: '1px solid rgba(82,183,136,0.2)',
                    color: '#52b788',
                    textDecoration: 'none',
                    flexShrink: 0,
                    marginRight: '0.25rem',
                    transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(82,183,136,0.25)';
                    e.currentTarget.style.borderColor = 'rgba(82,183,136,0.45)';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(82,183,136,0.12)';
                    e.currentTarget.style.borderColor = 'rgba(82,183,136,0.2)';
                }}
            >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12L12 3l9 9" />
                    <path d="M9 21V12h6v9" />
                </svg>
            </a>

            {/* Separator */}
            <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.08)', marginRight: '0.25rem' }} />

            {/* Nav items */}
            {NAV_ITEMS.map((item) => (
                <a
                    key={item.href}
                    href={item.href}
                    onClick={e => scrollTo(e, item.href)}
                    style={{
                        color: active === item.href ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.38)',
                        fontSize: '0.66rem',
                        fontWeight: active === item.href ? 600 : 400,
                        fontFamily: 'var(--font-body)',
                        letterSpacing: '0.04em',
                        textDecoration: 'none',
                        padding: '0.32rem 0.6rem',
                        borderRadius: '100px',
                        background: active === item.href ? 'rgba(255,255,255,0.07)' : 'transparent',
                        transition: 'all 0.18s ease',
                        whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={e => {
                        if (active !== item.href) {
                            e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                        }
                    }}
                    onMouseLeave={e => {
                        if (active !== item.href) {
                            e.currentTarget.style.color = 'rgba(255,255,255,0.38)';
                        }
                    }}
                >
                    {item.label}
                </a>
            ))}
        </motion.nav>
    );
};

export default NavBar;
