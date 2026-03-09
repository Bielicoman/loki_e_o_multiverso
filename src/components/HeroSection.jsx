import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <section
            ref={ref}
            id="inicio"
            style={{
                position: 'relative',
                height: '100vh',
                minHeight: '700px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'flex-end',
            }}
        >
            {/* Parallax Background */}
            <motion.div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url("/loki-images/7633145.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    y: bgY,
                    scale: 1.1,
                }}
            />

            {/* Netflix-style dark gradient */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.2) 100%), linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.0) 60%)',
                zIndex: 1,
            }} />

            {/* Content */}
            <motion.div
                style={{
                    opacity: contentOpacity,
                    position: 'relative',
                    zIndex: 2,
                    padding: '0 5% 7rem',
                    maxWidth: '800px',
                }}
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        background: 'rgba(230, 194, 0, 0.12)',
                        border: '1px solid rgba(230, 194, 0, 0.35)',
                        borderRadius: '100px',
                        padding: '0.4rem 1.2rem',
                        marginBottom: '1.5rem',
                        backdropFilter: 'blur(8px)',
                    }}
                >
                    <span style={{ background: 'var(--color-accent)', width: 8, height: 8, borderRadius: '50%', display: 'block' }} />
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        Artigo Científico • Rádio TV UNASP EC
                    </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
                        fontWeight: 800,
                        lineHeight: 1.0,
                        letterSpacing: '-0.02em',
                        color: '#fff',
                        marginBottom: '1.25rem',
                        textShadow: '0 4px 30px rgba(0,0,0,0.6)',
                    }}
                >
                    LOKI
                    <span style={{
                        display: 'block',
                        fontSize: 'clamp(1rem, 2.2vw, 1.9rem)',
                        fontWeight: 300,
                        letterSpacing: '0.01em',
                        color: 'rgba(255,255,255,0.75)',
                        marginTop: '0.5rem',
                    }}>
                        & O MULTIVERSO DO MCU
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{
                        fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
                        lineHeight: 1.7,
                        color: 'rgba(255,255,255,0.7)',
                        marginBottom: '2.5rem',
                        maxWidth: '540px',
                        fontWeight: 300,
                    }}
                >
                    Como o deus das mentiras se tornou a chave narrativa do maior universo compartilhado do cinema. Um estudo sobre interconectividade, transmídia e identidade no MCU.
                </motion.p>

                {/* Authors */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    style={{ marginBottom: '2.5rem' }}
                >
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.3rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        Autores
                    </p>
                    <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>
                        Alex Ascencio &amp; Thiago Bandeira
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)' }}>
                        Orientadora: Andreia Moura · UNASP EC · <strong style={{ color: 'rgba(255,255,255,0.65)' }}>2025</strong>
                    </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
                >
                    <a
                        href="/loki_text.pdf"
                        download="Loki-Multiverso-MCU.pdf"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            background: '#fff',
                            color: '#000',
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1rem',
                            fontWeight: 700,
                            padding: '0.9rem 2rem',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            transition: 'all 0.25s ease',
                            letterSpacing: '0.01em',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.85)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                        Baixar Artigo em PDF
                    </a>

                    <a
                        href="#objetivo"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            background: 'rgba(255,255,255,0.12)',
                            color: '#fff',
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1rem',
                            fontWeight: 600,
                            padding: '0.9rem 2rem',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            border: '1px solid rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.25s ease',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
                        Explorar Artigo
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    bottom: '2.5rem',
                    right: '5%',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.4rem',
                }}
            >
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Rolar</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"><polyline points="6 9 12 15 18 9" /></svg>
            </motion.div>
        </section>
    );
};

export default HeroSection;
