import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActive(href);
        }
    };

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
                position: 'fixed',
                top: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 9000,
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                background: scrolled
                    ? 'rgba(5, 10, 8, 0.85)'
                    : 'rgba(5, 10, 8, 0.5)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '100px',
                padding: '0.45rem 0.75rem',
                boxShadow: scrolled
                    ? '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)'
                    : '0 4px 20px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
                maxWidth: 'calc(100vw - 2rem)',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}
        >
            {/* Logo dot */}
            <div style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#52b788',
                boxShadow: '0 0 8px #52b788',
                marginRight: '0.5rem',
                flexShrink: 0,
            }} />

            {/* Nav items */}
            {NAV_ITEMS.map((item) => (
                <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollTo(e, item.href)}
                    style={{
                        color: active === item.href ? '#fff' : 'rgba(255,255,255,0.55)',
                        fontSize: '0.72rem',
                        fontWeight: active === item.href ? 600 : 400,
                        fontFamily: 'var(--font-body)',
                        letterSpacing: '0.04em',
                        textDecoration: 'none',
                        padding: '0.4rem 0.75rem',
                        borderRadius: '100px',
                        background: active === item.href ? 'rgba(82,183,136,0.15)' : 'transparent',
                        border: active === item.href ? '1px solid rgba(82,183,136,0.3)' : '1px solid transparent',
                        transition: 'all 0.2s ease',
                        whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={e => {
                        if (active !== item.href) {
                            e.currentTarget.style.color = '#fff';
                            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                        }
                    }}
                    onMouseLeave={e => {
                        if (active !== item.href) {
                            e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
                            e.currentTarget.style.background = 'transparent';
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
