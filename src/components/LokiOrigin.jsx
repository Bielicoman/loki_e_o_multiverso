import { motion } from 'framer-motion';

const ORIGIN_STEPS = [
    {
        era: 'Mitologia Nórdica',
        period: 'Antiguidade',
        icon: '⚡',
        color: '#52b788',
        title: 'O Trickster da Escandinávia',
        text: 'Na mitologia nórdica, Loki é o deus do engano, filho do gigante Fárbauti e da deusa Laufey. Companheiro de Thor e Odin, Loki representa a dualidade caótica da existência: ora aliado, ora traidor. É ele quem provoca Ragnarök, o fim dos mundos, ao orquestrar a morte de Balder — cumprindo um destino inevitável inscrito nas rúnicas de Yggdrasil.',
        image: '/loki-images/wp4503077.jpg',
    },
    {
        era: 'HQ Marvel',
        period: '1962 — Stan Lee & Jack Kirby',
        icon: '📖',
        color: '#40916c',
        title: 'O Vilão dos Quadrinhos',
        text: 'Em 1962, Stan Lee e Jack Kirby reinterpretaram Loki para os quadrinhos da Marvel como filho adotivo de Odin e antagonista clássico de Thor. Ambicioso, manipulador e genial, o Loki dos quadrinhos se torna o catalisador de grandes arcos narrativos — incluindo a criação dos próprios Vingadores no primeiro número da equipe em 1963.',
        image: '/loki-images/3528141-loki-1.jpg',
    },
    {
        era: 'MCU',
        period: '2011 — Thor · Cinema',
        icon: '🎬',
        color: '#2d6a4f',
        title: 'A Reinvenção Cinematográfica',
        text: 'Tom Hiddleston transformou Loki no personagem mais complexo do UCM. Desde Thor (2011), ele transcendeu o papel de vilão para se tornar um anti-herói trágico: filho rejeitado, filho adotivo, deus sem reino. O sucesso do personagem — impensável em 2011 — criou uma demanda narrativa que resultou em uma série própria dez anos depois.',
        image: '/loki-images/7633145.jpg',
    },
    {
        era: 'Multiverso',
        period: '2021–2023 — Série Disney+',
        icon: '🌌',
        color: '#ffd700',
        title: 'Ascensão ao Multiverso',
        text: 'Na série Loki (2021–2023), o personagem se descobre existindo além do tempo linear. Ao enfrentar a TVA, suas variantes e o enigmático He Who Remains, Loki passa da busca pelo poder pessoal para a aceitação de um propósito cósmico. No final, torna-se o único ser capaz de segurar Yggdrasil — o multiverso inteiro — apoiando cada galho com as próprias mãos.',
        image: '/loki-images/lokiseason2-episode6-endingexplained.jpg',
    },
];

const LokiOrigin = () => (
    <section id="origem-loki" style={{
        padding: '8rem 0',
        background: 'linear-gradient(to bottom, var(--color-secondary), var(--color-dark))',
        position: 'relative',
        overflow: 'hidden',
    }}>
        {/* Background texture */}
        <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url("/loki-images/wp3251912.jpg")',
            backgroundSize: 'cover', backgroundPosition: 'center',
            opacity: 0.04,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{ marginBottom: '5rem' }}
            >
                <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    Da Mitologia ao Multiverso
                </span>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--color-light)', marginTop: '0.5rem', letterSpacing: '-0.02em' }}>
                    A Origem de Loki
                </h2>
                <div style={{ width: '50px', height: '3px', background: 'var(--color-accent)', marginTop: '1.25rem' }} />
                <p style={{ color: 'var(--color-gray)', maxWidth: '540px', marginTop: '1rem', fontWeight: 300, lineHeight: 1.7 }}>
                    De trickster escandinavo a deus das histórias — como um arquétipo milenar se reinventou para se tornar o centro de um universo narrativo global.
                </p>
            </motion.div>

            {/* Steps grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.75rem',
            }}>
                {ORIGIN_STEPS.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.12 }}
                        whileHover={{ y: -6 }}
                        style={{
                            background: 'var(--glass-bg)',
                            border: `1px solid ${step.color}33`,
                            borderRadius: '20px',
                            overflow: 'hidden',
                            backdropFilter: 'blur(20px)',
                            boxShadow: `0 15px 40px rgba(0,0,0,0.35), 0 0 30px ${step.color}08`,
                        }}
                    >
                        {/* Image */}
                        <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                            <img src={step.image} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.9))` }} />
                            {/* Era chip */}
                            <div style={{
                                position: 'absolute', top: '0.75rem', left: '0.75rem',
                                background: `${step.color}22`,
                                border: `1px solid ${step.color}55`,
                                color: step.color,
                                fontSize: '0.65rem', fontWeight: 700,
                                padding: '0.2rem 0.65rem',
                                borderRadius: '100px',
                                letterSpacing: '0.06em', textTransform: 'uppercase',
                                backdropFilter: 'blur(8px)',
                            }}>{step.era}</div>
                            {/* Period */}
                            <p style={{
                                position: 'absolute', bottom: '0.75rem', left: '1rem',
                                color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', fontFamily: 'var(--font-body)',
                            }}>{step.period}</p>
                        </div>

                        {/* Content */}
                        <div style={{ padding: '1.5rem' }}>
                            <h3 style={{ color: 'var(--color-light)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.3 }}>
                                {step.title}
                            </h3>
                            <p style={{ color: 'var(--color-gray)', fontSize: '0.83rem', lineHeight: 1.7, fontWeight: 300 }}>
                                {step.text}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default LokiOrigin;
