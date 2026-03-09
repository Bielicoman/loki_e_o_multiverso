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
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close menu on resize to desktop
    useEffect(() => {
        const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const scrollTo = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
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

    const navBg = scrolled ? 'var(--nav-bg)' : 'rgba(4,8,6,0.35)';
    const navBorder = scrolled ? 'var(--nav-border)' : 'rgba(255,255,255,0.04)';

    return (
        <>
            <motion.nav
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: scrolled ? 1 : 0.6 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="navbar-pill"
                style={{
                    position: 'fixed',
                    top: '0.65rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 9000,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.1rem',
                    background: navBg,
                    backdropFilter: 'blur(16px)',
                    border: `1px solid ${navBorder}`,
                    borderRadius: '100px',
                    padding: '0.28rem 0.45rem',
                    boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
                    transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
                    maxWidth: 'calc(100vw - 1.5rem)',
                }}
            >
                {/* Home */}
                <a
                    href="#top"
                    onClick={e => scrollTo(e, '#top')}
                    title="Voltar ao topo"
                    style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: '26px', height: '26px', borderRadius: '50%',
                        background: 'rgba(82,183,136,0.12)', border: '1px solid rgba(82,183,136,0.2)',
                        color: '#52b788', textDecoration: 'none', flexShrink: 0,
                        marginRight: '0.2rem', transition: 'all 0.18s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(82,183,136,0.25)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(82,183,136,0.12)'; }}
                >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M3 12L12 3l9 9" /><path d="M9 21V12h6v9" />
                    </svg>
                </a>

                {/* Separator — hidden on mobile via CSS */}
                <div className="nav-separator" style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.07)', marginRight: '0.2rem' }} />

                {/* Desktop nav items */}
                {NAV_ITEMS.map(item => (
                    <a
                        key={item.href}
                        href={item.href}
                        onClick={e => scrollTo(e, item.href)}
                        className={`nav-link nav-items-desktop ${active === item.href ? 'active' : ''}`}
                        style={{
                            color: active === item.href ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.38)',
                            fontSize: '0.64rem',
                            fontWeight: active === item.href ? 600 : 400,
                            fontFamily: 'var(--font-body)',
                            letterSpacing: '0.04em',
                            textDecoration: 'none',
                            padding: '0.3rem 0.55rem',
                            borderRadius: '100px',
                            background: active === item.href ? 'rgba(255,255,255,0.07)' : 'transparent',
                            transition: 'all 0.15s ease',
                            whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={e => { if (active !== item.href) e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
                        onMouseLeave={e => { if (active !== item.href) e.currentTarget.style.color = 'rgba(255,255,255,0.38)'; }}
                    >
                        {item.label}
                    </a>
                ))}

                {/* Hamburger — shown on mobile only via CSS */}
                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label="Menu"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        {menuOpen ? (
                            <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                        ) : (
                            <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>
                        )}
                    </svg>
                </button>
            </motion.nav>

            {/* Mobile dropdown menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.97 }}
                        transition={{ duration: 0.18 }}
                        className="mobile-menu open"
                    >
                        {NAV_ITEMS.map(item => (
                            <a key={item.href} href={item.href} onClick={e => scrollTo(e, item.href)}>
                                {item.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay to close menu */}
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    style={{ position: 'fixed', inset: 0, zIndex: 8998 }}
                />
            )}
        </>
    );
};

export default NavBar;
