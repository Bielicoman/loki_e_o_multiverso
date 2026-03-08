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
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ zIndex: 10, textAlign: 'center', padding: '0 2rem' }}
            >
                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 8rem)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    background: 'linear-gradient(to right, var(--color-primary), var(--color-accent))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '1rem',
                    textShadow: '0 0 20px rgba(16, 46, 0, 0.5)'
                }}>
                    LOKI
                </h1>

                <h2 style={{
                    fontSize: 'clamp(1rem, 2vw, 2rem)',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    maxWidth: '800px',
                    margin: '0 auto',
                    color: 'var(--color-light)'
                }}>
                    O Papel de Loki na Construção Narrativa do Universo Compartilhado do MCU
                </h2>

                <div style={{
                    marginTop: '3rem',
                    fontSize: '1rem',
                    color: 'var(--color-gray)',
                    borderTop: '1px solid var(--glass-border)',
                    paddingTop: '1rem',
                    display: 'inline-block'
                }}>
                    <p>Alex Gabriel Ascencio da Silva</p>
                    <p>Thiago Sagrillo Bandeira</p>
                    <p>Orientadora: Andreia Moura</p>
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
