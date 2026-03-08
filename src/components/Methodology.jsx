import { motion } from 'framer-motion';

const METHODOLOGY_ITEMS = [
    {
        num: '01',
        title: 'Pesquisa Bibliográfica',
        desc: 'Fundamentação teórica em Henry Jenkins (transmídia), Joseph Campbell (monomito), Michel Pêcheux (análise de discurso) e teóricos do universo narrativo compartilhado.',
        image: '/loki-images/jenkins.png',
    },
    {
        num: '02',
        title: 'Análise Fílmica',
        desc: 'Estudo das aparições de Loki em Thor (2011), Vingadores (2012), Thor: Mundo Sombrio (2013), Ragnarok (2017), Guerra Infinita (2018) e Série Loki (2021–2023).',
        image: '/loki-images/campbell.png',
    },
    {
        num: '03',
        title: 'Análise do Discurso',
        desc: 'Aplicação dos conceitos pêcheutianos para identificar como as falas e ações de Loki constroem sentido conector entre as narrativas do MCU.',
        image: '/loki-images/pecheux.png',
    },
];

const Methodology = () => (
    <section id="metodologia" style={{ padding: '8rem 0', background: 'var(--color-secondary)', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div style={{ marginBottom: '4rem' }}>
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Como estudamos</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--color-light)', marginTop: '0.5rem', letterSpacing: '-0.02em' }}>Metodologia</h2>
                    <div style={{ width: '50px', height: '3px', background: 'var(--color-accent)', marginTop: '1.25rem' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {METHODOLOGY_ITEMS.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: i % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                                gap: '3rem',
                                alignItems: 'center',
                            }}
                        >
                            {/* Text */}
                            <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                                <span style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, color: 'rgba(230,194,0,0.1)', lineHeight: 1, display: 'block', marginBottom: '-1rem' }}>{item.num}</span>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-light)', marginBottom: '1rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--color-gray)', lineHeight: 1.8, fontWeight: 300, fontSize: '1rem' }}>{item.desc}</p>
                            </div>
                            {/* Image */}
                            <div style={{ order: i % 2 === 0 ? 1 : 0, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

export default Methodology;
