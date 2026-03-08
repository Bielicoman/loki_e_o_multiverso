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
                        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                            <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontSize: '1.5rem' }}>Henry Jenkins</h3>
                            <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                                "Cada vez mais, as narrativas estão se tornando a arte da construção de universos, à medida que os artistas criam ambientes atraentes que não podem ser completamente explorados ou esgotados em uma única obra, ou mesmo em uma única mídia."
                            </p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray)' }}>A lógica do MCU se fundamenta nos conceitos de narrativa transmídia e universo compartilhado.</p>
                        </div>

                        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                            <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontSize: '1.5rem' }}>Michel Pêcheux</h3>
                            <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                                Análise de Discurso: todo discurso tem um sujeito, fruto de um contexto, e todo sentido depende da memória discursiva.
                            </p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray)' }}>
                                No MCU, cada aparição de Loki é um enunciado, cuja significação depende do contexto construído previamente.
                            </p>
                        </div>

                        <div style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                            <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontSize: '1.5rem' }}>Joseph Campbell</h3>
                            <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>A Jornada do Herói (Monomito)</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-gray)' }}>
                                A transformação de Loki subverte a trajetória linear do vilão tradicional, evoluindo do arquétipo de trickster para o sacrifício heroico final.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Transmedia;
