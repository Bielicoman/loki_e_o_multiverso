import { motion } from 'framer-motion';

const Multiverse = () => {
    const cards = [
        {
            title: 'Teoria Quântica',
            image: '/loki-images/quantumania.jpg',
            desc: 'Realidades paralelas originadas a partir de diferentes escolhas e colapsos de função de onda. (Ex: Homem Formiga e Vespa: Quantumania)',
        },
        {
            title: 'Teoria Ficcional',
            image: '/loki-images/spiderman-no-way-home.jpg',
            desc: 'Multiplicidade de mundos possíveis dentro da linguagem narrativa e especulativa. (Ex: Homem Aranha: Sem volta pra casa)',
        },
        {
            title: 'Ramificação Temporal',
            image: '/loki-images/loki-s2-temporal.jpg',
            desc: '"Cada escolha ou evento pode criar nova linha do tempo, originando um novo universo" – estrutura mantida pela série Loki.',
        },
    ];

    return (
        <section id="multiverso" style={{ padding: '8rem 0', background: 'var(--color-dark)', position: 'relative', overflow: 'hidden' }}>
            {/* BG texture */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'url("/loki-images/wp2875707.jpg")',
                backgroundSize: 'cover', backgroundPosition: 'center',
                opacity: 0.06, zIndex: 0,
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8 }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                        <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Conceito</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--color-light)', marginTop: '0.5rem', letterSpacing: '-0.02em' }}>O Multiverso do MCU</h2>
                        <p style={{ color: 'var(--color-gray)', maxWidth: '600px', margin: '1rem auto 0', lineHeight: 1.7, fontWeight: 300 }}>
                            O conjunto de realidades paralelas que coexistem com o universo principal, cada uma com suas próprias versões de personagens, histórias e eventos.
                        </p>
                    </div>

                    {/* Divider */}
                    <div style={{ width: '60px', height: '3px', background: 'var(--color-accent)', margin: '2.5rem auto 4rem' }} />

                    {/* Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                        {cards.map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                style={{
                                    position: 'relative',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 25px 50px rgba(0,0,0,0.55)',
                                    cursor: 'default',
                                    aspectRatio: '2 / 3',
                                }}
                            >
                                {/* Full poster image */}
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center top',
                                        display: 'block',
                                    }}
                                />
                                {/* Gradient overlay at bottom */}
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.92) 100%)',
                                }} />
                                {/* Text over image */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0, left: 0, right: 0,
                                    padding: '1.5rem 1.25rem 1.25rem',
                                }}>
                                    <h3 style={{ color: 'var(--color-accent)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{card.title}</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.78rem', lineHeight: 1.6, fontWeight: 300 }}>{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Quote block */}
                    <motion.div
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        style={{
                            maxWidth: '800px', margin: '0 auto',
                            borderLeft: '4px solid var(--color-accent)',
                            padding: '2rem 2.5rem',
                            background: 'rgba(230, 194, 0, 0.04)',
                            borderRadius: '0 16px 16px 0',
                            backdropFilter: 'blur(8px)',
                        }}
                    >
                        <p style={{ fontStyle: 'italic', color: 'var(--color-accent)', fontWeight: 300, letterSpacing: '0.02em', lineHeight: 1.8, fontSize: '1.1rem' }}>
                            "A Marvel chama essa junção de teoria da realidade ramificada, em que cada escolha ou evento pode criar uma nova linha do tempo, originando um novo universo. Essa estrutura permite múltiplas narrativas conectadas, mantendo a coerência dentro de um universo compartilhado."
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Multiverse;
