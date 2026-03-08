import { motion, useScroll, useTransform } from 'framer-motion';

const Header = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <header style={{
            position: 'relative',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            background: 'var(--color-dark)'
        }}>
            {/* Background Graphic Representation */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'radial-gradient(circle at center, rgba(16, 46, 0, 0.6) 0%, rgba(0,0,0,0.9) 100%), url("/loki-god.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay',
                    y: y1,
                    opacity
                }}
            />

            <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ zIndex: 10, textAlign: 'center', padding: '0 2rem', backdropFilter: 'blur(5px)' }}
            >
                <h1 style={{
                    fontSize: 'clamp(4rem, 10vw, 10rem)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    background: 'linear-gradient(135deg, var(--color-light) 0%, var(--color-accent) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.5rem',
                    textShadow: '0 10px 30px rgba(0, 0, 0, 0.8)',
                    lineHeight: 1
                }}>
                    LOKI
                </h1>

                <h2 style={{
                    fontSize: 'clamp(1rem, 2.5vw, 2.5rem)',
                    fontWeight: 300,
                    letterSpacing: '0.02em',
                    maxWidth: '900px',
                    margin: '0 auto',
                    color: 'var(--color-light)',
                    textShadow: '0 4px 15px rgba(0,0,0,0.5)'
                }}>
                    O Papel na Construção Narrativa do Universo Compartilhado do MCU
                </h2>

                <div style={{
                    marginTop: '4rem',
                    fontSize: '0.9rem',
                    color: 'var(--color-gray)',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '1.5rem',
                    display: 'inline-block',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                }}>
                    <p style={{ marginBottom: '0.5rem', fontWeight: 500, color: 'var(--color-light)' }}>
                        Alex Ascencio, Thiago Bandeira
                    </p>
                    <p>Rádio TV do UNASP EC</p>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', opacity: 0.7 }}>Orientadora: Andreia Moura</p>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    color: 'var(--color-accent)',
                    zIndex: 10
                }}
            >
                ↓ Rolar para Explorar
            </motion.div>
        </header>
    );
};

export default Header;
