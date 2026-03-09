import { motion } from 'framer-motion';

const METHODOLOGY_ITEMS = [
    {
        num: '01',
        title: 'Pesquisa Bibliográfica',
        desc: 'Fundamentação teórica em Henry Jenkins (transmídia), Joseph Campbell (monomito), Michel Pêcheux (análise de discurso) e teóricos do universo narrativo compartilhado.',
        image: '/loki-images/wp3251912.jpg',
        color: '#52b788',
    },
    {
        num: '02',
        title: 'Análise Fílmica',
        desc: 'Estudo das aparições de Loki em Thor (2011), Vingadores (2012), Thor: Mundo Sombrio (2013), Ragnarok (2017), Guerra Infinita (2018) e Série Loki (2021–2023).',
        image: '/loki-images/Avengers-Wallpaper-4-715x402.jpg',
        color: '#40916c',
    },
    {
        num: '03',
        title: 'Análise do Discurso',
        desc: 'Aplicação dos conceitos pêcheutianos para identificar como as falas e ações de Loki constroem sentido conector entre as narrativas do MCU.',
        image: '/loki-images/avengers-endgame-ensemble.jpg',
        color: '#2d6a4f',
    },
];

const Methodology = () => (
    <section id="metodologia" style={{
        padding: '8rem 0',
        background: 'linear-gradient(to bottom, var(--color-dark), var(--color-secondary))',
        position: 'relative',
        overflow: 'hidden',
    }}>
        {/* Subtle grid texture */}
        <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(82,183,136,0.06) 1px, transparent 0)',
            backgroundSize: '32px 32px',
            pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.8 }}
                style={{ marginBottom: '5rem' }}
            >
                <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Como estudamos</span>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--color-light)', marginTop: '0.5rem', letterSpacing: '-0.02em' }}>Metodologia</h2>
                <div style={{ width: '50px', height: '3px', background: 'var(--color-accent)', marginTop: '1.25rem' }} />
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                {METHODOLOGY_ITEMS.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                            gap: '4rem',
                            alignItems: 'center',
                        }}
                    >
                        {/* Text side */}
                        <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                            {/* Big number */}
                            <div style={{ marginBottom: '1rem', lineHeight: 1 }}>
                                <span style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: 'clamp(5rem, 10vw, 8rem)',
                                    fontWeight: 900,
                                    color: `${item.color}18`,
                                    letterSpacing: '-0.04em',
                                    display: 'block',
                                    lineHeight: 0.85,
                                }}>{item.num}</span>
                            </div>

                            {/* Colored line */}
                            <div style={{ width: '40px', height: '3px', background: item.color, marginBottom: '1.5rem', borderRadius: '2px' }} />

                            <h3 style={{
                                fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                                fontWeight: 700,
                                color: 'var(--color-light)',
                                marginBottom: '1.25rem',
                                letterSpacing: '-0.01em',
                                lineHeight: 1.2,
                            }}>{item.title}</h3>

                            <p style={{
                                color: 'var(--color-gray)',
                                lineHeight: 1.85,
                                fontWeight: 300,
                                fontSize: '1rem',
                                maxWidth: '420px',
                            }}>{item.desc}</p>

                            {/* Step pill */}
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                marginTop: '1.75rem',
                                background: `${item.color}15`,
                                border: `1px solid ${item.color}35`,
                                borderRadius: '100px',
                                padding: '0.4rem 1rem',
                            }}>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.color }} />
                                <span style={{ color: item.color, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                    Etapa {item.num}
                                </span>
                            </div>
                        </div>

                        {/* Image side */}
                        <div style={{ order: i % 2 === 0 ? 1 : 0, position: 'relative' }}>
                            {/* Glow backdrop */}
                            <div style={{
                                position: 'absolute',
                                inset: '-1.5rem',
                                borderRadius: '28px',
                                background: `radial-gradient(ellipse at center, ${item.color}18 0%, transparent 70%)`,
                                filter: 'blur(20px)',
                            }} />
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                style={{
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: `0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px ${item.color}22`,
                                    position: 'relative',
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '300px',
                                        objectFit: 'cover',
                                        display: 'block',
                                        transition: 'transform 0.6s ease',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                {/* Colored bottom tag */}
                                <div style={{
                                    position: 'absolute', bottom: 0, left: 0, right: 0,
                                    height: '4px',
                                    background: `linear-gradient(to right, ${item.color}, transparent)`,
                                }} />
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Methodology;
