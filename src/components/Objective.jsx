import { motion } from 'framer-motion';

const Objective = () => {
    return (
        <section id="objetivo" style={{
            padding: '8rem 0',
            background: 'var(--bg-color)',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Subtle BG glow */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px', height: '600px',
                background: 'radial-gradient(circle, rgba(230,194,0,0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Header */}
                    <div style={{ marginBottom: '4rem' }}>
                        <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Artigo Científico</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--color-light)', marginTop: '0.5rem', letterSpacing: '-0.02em' }}>Objetivo e Justificativa</h2>
                        <div style={{ width: '50px', height: '3px', background: 'var(--color-accent)', marginTop: '1.25rem' }} />
                    </div>

                    {/* Two-column layout */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        {/* Left: image */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}
                        >
                            <img
                                src="/loki-images/12145980.webp"
                                alt="Loki MCU"
                                style={{ width: '100%', height: '480px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />
                            {/* badge */}
                            <div style={{
                                position: 'absolute', bottom: '1.5rem', left: '1.5rem',
                                background: 'rgba(0,0,0,0.6)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(230,194,0,0.3)',
                                borderRadius: '10px', padding: '0.6rem 1rem',
                            }}>
                                <p style={{ color: 'var(--color-accent)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em' }}>MCU · 2011–2023</p>
                            </div>
                        </motion.div>

                        {/* Right: text */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <p style={{
                                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                                fontStyle: 'italic',
                                fontWeight: 300,
                                lineHeight: 1.7,
                                color: 'var(--color-light)',
                                borderLeft: '3px solid var(--color-accent)',
                                paddingLeft: '1.5rem',
                                marginBottom: '2rem',
                            }}>
                                "Entender qual é o papel de Loki na interconectividade do universo compartilhado do MCU (Marvel Cinematic Universe)."
                            </p>

                            <p style={{ color: 'var(--color-gray)', lineHeight: 1.9, fontWeight: 300, marginBottom: '1.5rem' }}>
                                Loki é mais do que um vilão icônico: ele é um personagem arquetípico cujo arco narrativo atravessa filmes, séries e linhas do tempo, cumprindo uma função estrutural única no MCU — a de conector narrativo.
                            </p>

                            <p style={{ color: 'var(--color-gray)', lineHeight: 1.9, fontWeight: 300 }}>
                                Sua trajetória do Caos ao Cosmos revela como a Marvel Studios constrói universos compartilhados, utilizando princípios da narrativa transmídia e da jornada do herói para sustentar uma franquia de escala épica.
                            </p>

                            {/* Tags */}
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                                {['Transmídia', 'Monomito', 'Análise de Discurso', 'MCU', 'Jornada do Herói'].map(tag => (
                                    <span key={tag} style={{
                                        background: 'rgba(230,194,0,0.08)',
                                        border: '1px solid rgba(230,194,0,0.2)',
                                        color: 'var(--color-accent)',
                                        borderRadius: '100px',
                                        padding: '0.3rem 0.9rem',
                                        fontSize: '0.78rem',
                                        fontWeight: 500,
                                        letterSpacing: '0.03em',
                                    }}>{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Objective;
