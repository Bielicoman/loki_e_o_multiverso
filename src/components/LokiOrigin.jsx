import { motion } from 'framer-motion';

const ORIGIN_STEPS = [
    {
        numeral: 'I',
        era: 'Mitologia Nórdica',
        period: 'Antiguidade',
        color: '#b5e8c0',
        title: 'O Trickster Escandinavo',
        text: 'Na mitologia nórdica, Loki é o deus do engano, filho do gigante Fárbauti. Companheiro de Odin e Thor, ele representa a dualidade caótica da existência — ora aliado, ora traidor. É Loki quem provoca Ragnarök, o fim dos mundos, ao orquestrar a morte de Balder.',
        image: '/loki-images/loki-norse-medieval.png',
        imagePos: 'center',
    },
    {
        numeral: 'II',
        era: 'HQ Marvel',
        period: '1962 — Stan Lee & Jack Kirby',
        color: '#52b788',
        title: 'O Vilão dos Quadrinhos',
        text: 'Em 1962, Stan Lee e Jack Kirby reinventaram Loki como filho adotivo de Odin e antagonista clássico de Thor. Ambicioso e genial, o Loki dos quadrinhos catalisa a criação dos próprios Vingadores no primeiro número da equipe, em 1963.',
        image: '/loki-images/loki-hq-comic.jpg',
        imagePos: 'center top',
    },
    {
        numeral: 'III',
        era: 'MCU Cinema',
        period: '2011 — Reinvenção Cinematográfica',
        color: '#40916c',
        title: 'O Anti-Herói Trágico',
        text: 'Tom Hiddleston transformou Loki no personagem mais complexo do UCM. De vilão em Thor (2011) a anti-herói trágico — filho rejeitado, deus sem reino. Seu sucesso criou uma demanda narrativa que resultou em uma série própria uma década depois.',
        image: '/loki-images/loki-mcu-smile.jpg',
        imagePos: 'center top',
    },
    {
        numeral: 'IV',
        era: 'Multiverso Marvel',
        period: '2021–2023 — Série Disney+',
        color: '#ffd700',
        title: 'Guardião do Multiverso',
        text: 'Na série Loki, ele descobre existir além do tempo linear. Ao enfrentar a TVA e suas variantes, parte da busca pelo poder pessoal para aceitar um propósito cósmico — tornando-se o único ser capaz de segurar Yggdrasil: o multiverso inteiro.',
        image: '/loki-images/loki-guardian-lightning.jpg',
        imagePos: 'center',
    },
];

const LokiOrigin = () => (
    <section id="origem-loki" style={{
        padding: '8rem 0 6rem',
        background: '#020a05',
        position: 'relative',
        overflow: 'hidden',
    }}>
        {/* Background rune pattern */}
        <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(82,183,136,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

            {/* Section header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{ textAlign: 'center', marginBottom: '4.5rem' }}
            >
                {/* Decorative line */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ flex: 1, maxWidth: '120px', height: '1px', background: 'linear-gradient(to right, transparent, rgba(82,183,136,0.5))' }} />
                    <span style={{ color: 'rgba(82,183,136,0.7)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                        Da Mitologia ao Multiverso
                    </span>
                    <div style={{ flex: 1, maxWidth: '120px', height: '1px', background: 'linear-gradient(to left, transparent, rgba(82,183,136,0.5))' }} />
                </div>

                <h2 style={{
                    fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                    fontWeight: 800,
                    color: '#fff',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.1,
                }}>
                    A Origem de Loki
                </h2>
                <p style={{
                    color: 'rgba(255,255,255,0.4)',
                    maxWidth: '420px',
                    margin: '1rem auto 0',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    fontWeight: 300,
                }}>
                    Um arquétipo milenar reinventado para se tornar o centro de um universo narrativo global.
                </p>
            </motion.div>

            <div className="grid-4">
                {ORIGIN_STEPS.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        whileHover={{ y: -8, transition: { duration: 0.25 } }}
                        style={{
                            background: 'rgba(10, 22, 14, 0.85)',
                            border: '1px solid rgba(255,255,255,0.07)',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            position: 'relative',
                            cursor: 'default',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                            transition: 'box-shadow 0.3s ease',
                        }}
                        onMouseEnter={e => e.currentTarget.style.boxShadow = `0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px ${step.color}33`}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.5)'}
                    >
                        <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative', background: '#060c09' }}>
                            <motion.img
                                src={step.image}
                                alt={step.title}
                                loading="lazy"
                                className="origin-img"
                                whileHover={{ scale: 1.04 }}
                                transition={{ duration: 0.4 }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: step.imagePos,
                                    display: 'block',
                                }}
                            />
                        </div>

                        {/* Content */}
                        <div style={{ padding: '1.4rem 1.4rem 1.6rem' }}>
                            {/* Era tag */}
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                marginBottom: '0.85rem',
                            }}>
                                <div style={{
                                    width: '5px', height: '5px', borderRadius: '50%',
                                    background: step.color,
                                    boxShadow: `0 0 6px ${step.color}`,
                                }} />
                                <span style={{
                                    color: step.color,
                                    fontSize: '0.65rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                }}>{step.era}</span>
                            </div>

                            <h3 style={{
                                color: '#fff',
                                fontSize: '1.05rem',
                                fontWeight: 700,
                                marginBottom: '0.75rem',
                                lineHeight: 1.3,
                                letterSpacing: '-0.01em',
                            }}>{step.title}</h3>

                            <p style={{
                                color: 'rgba(255,255,255,0.45)',
                                fontSize: '0.78rem',
                                lineHeight: 1.75,
                                fontWeight: 300,
                            }}>{step.text}</p>

                            {/* Period footer */}
                            <p style={{
                                marginTop: '1.2rem',
                                paddingTop: '1rem',
                                borderTop: '1px solid rgba(255,255,255,0.06)',
                                color: 'rgba(255,255,255,0.22)',
                                fontSize: '0.68rem',
                                letterSpacing: '0.05em',
                                fontStyle: 'italic',
                            }}>{step.period}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default LokiOrigin;
