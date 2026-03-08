import { motion } from 'framer-motion';

const cards = [
    {
        author: 'Joseph Campbell',
        role: 'A Jornada do Herói · Monomito',
        image: '/loki-images/campbell.jpg',
        quote: '"O herói retorna, transformado, para trazer de volta a dádiva do autoconhecimento ao mundo."',
        body: 'A transformação de Loki subverte a trajetória linear do vilão tradicional, evoluindo do arquétipo de trickster para o sacrifício heroico final — tornando-se, definitivamente, o Guardião do Multiverso. Campbell define esse arco como o Monomito.',
    },
    {
        author: 'Henry Jenkins',
        role: 'Cultura da Convergência · Transmídia',
        image: '/loki-images/jenkins.jpg',
        quote: '"Cada vez mais, as narrativas estão se tornando a arte da construção de universos, à medida que os artistas criam ambientes atraentes que não podem ser explorados ou esgotados em uma única obra."',
        body: 'A lógica do MCU se fundamenta nos conceitos de narrativa transmídia e universo compartilhado. Loki é o personagem que mais transita entre mídias, eras e realidades dessa franquia — de vilão a guardião do tempo.',
    },
    {
        author: 'Michel Pêcheux',
        role: 'Análise do Discurso · Sentido',
        image: '/loki-images/pecheux.jpg',
        quote: '"Todo discurso tem um sujeito, fruto de um contexto. Todo sentido depende da memória discursiva."',
        body: 'No MCU, cada aparição de Loki é um enunciado cujo significado depende do contexto construído previamente em filmes anteriores. Seu discurso é uma teia de sentidos conectados — o contexto cria o personagem.',
    },
];

const Transmedia = () => (
    <section id="transmidia" style={{ padding: '8rem 0', background: 'var(--color-secondary)', position: 'relative' }}>
        <div className="container">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div style={{ marginBottom: '4rem' }}>
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Fundamentos Teóricos</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--color-light)', marginTop: '0.5rem', letterSpacing: '-0.02em' }}>Transmídia e Interconectividade</h2>
                    <div style={{ width: '50px', height: '3px', background: 'var(--color-accent)', marginTop: '1.25rem' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '2rem' }}>
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={{ y: -8 }}
                            style={{
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                backdropFilter: 'blur(20px)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            {/* Author portrait */}
                            <div style={{ height: '280px', overflow: 'hidden', position: 'relative', background: '#0a1c04' }}>
                                <img
                                    src={card.image}
                                    alt={card.author}
                                    style={{
                                        width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top',
                                        transition: 'transform 0.6s ease',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.85))' }} />
                                {/* name badge at bottom of image */}
                                <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem' }}>
                                    <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.15rem', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>{card.author}</h3>
                                    <p style={{ color: 'var(--color-accent)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{card.role}</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '1.75rem', flex: 1 }}>
                                <p style={{ fontStyle: 'italic', color: 'var(--color-light)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem', opacity: 0.85, borderLeft: '2px solid var(--color-accent)', paddingLeft: '0.75rem' }}>
                                    {card.quote}
                                </p>
                                <p style={{ color: 'var(--color-gray)', fontSize: '0.88rem', lineHeight: 1.7, fontWeight: 300 }}>
                                    {card.body}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

export default Transmedia;
