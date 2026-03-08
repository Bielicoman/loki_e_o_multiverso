import { motion } from 'framer-motion';

const Transmedia = () => {
    return (
        <section id="transmidia" style={{
            padding: '6rem 0',
            background: 'var(--color-secondary)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', letterSpacing: '0.1em', color: 'var(--color-accent)' }}>TRANSMÍDIA E INTERCONECTIVIDADE</h2>
                        <div style={{ width: '60px', height: '4px', background: 'var(--color-accent)', margin: '0 auto' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                background: 'var(--glass-bg)',
                                padding: '0',
                                borderRadius: '24px',
                                border: '1px solid var(--glass-border)',
                                backdropFilter: 'blur(20px)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <img src="/loki-images/09 (1211).jpg" alt="Narrativa Transmídia" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '2rem 2rem 3rem 2rem' }}>
                                <h3 style={{ color: 'var(--color-accent)', marginBottom: '1.5rem', fontSize: '1.6rem', fontWeight: 600 }}>Henry Jenkins</h3>
                                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.6, color: 'var(--text-color)' }}>
                                    "Cada vez mais, as narrativas estão se tornando a arte da construção de universos, à medida que os artistas criam ambientes atraentes que não podem ser completamente explorados ou esgotados em uma única obra, ou mesmo em uma única mídia."
                                </p>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-gray)', lineHeight: 1.5 }}>A lógica do MCU se fundamenta nos conceitos de narrativa transmídia e universo compartilhado.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                background: 'var(--glass-bg)',
                                padding: '0',
                                borderRadius: '24px',
                                border: '1px solid var(--glass-border)',
                                backdropFilter: 'blur(20px)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <img src="/loki-images/1512168.jpg" alt="Análise de Discurso" style={{ width: '100%', height: '200px', objectFit: 'cover', objectPosition: 'top' }} />
                            <div style={{ padding: '2rem 2rem 3rem 2rem' }}>
                                <h3 style={{ color: 'var(--color-accent)', marginBottom: '1.5rem', fontSize: '1.6rem', fontWeight: 600 }}>Michel Pêcheux</h3>
                                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.6, color: 'var(--text-color)' }}>
                                    Análise de Discurso: todo discurso tem um sujeito, fruto de um contexto, e todo sentido depende da memória discursiva.
                                </p>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-gray)', lineHeight: 1.5 }}>
                                    No MCU, cada aparição de Loki é um enunciado, cuja significação depende do contexto construído previamente.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                background: 'var(--glass-bg)',
                                padding: '0',
                                borderRadius: '24px',
                                border: '1px solid var(--glass-border)',
                                backdropFilter: 'blur(20px)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <img src="/loki-images/thorrag023.jpg" alt="Jornada do Herói" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '2rem 2rem 3rem 2rem' }}>
                                <h3 style={{ color: 'var(--color-accent)', marginBottom: '1.5rem', fontSize: '1.6rem', fontWeight: 600 }}>Joseph Campbell</h3>
                                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.6, color: 'var(--text-color)' }}>A Jornada do Herói (Monomito)</p>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-gray)', lineHeight: 1.5 }}>
                                    A transformação de Loki subverte a trajetória linear do vilão tradicional, evoluindo do arquétipo de trickster para o sacrifício heroico final.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Transmedia;
