import { motion } from 'framer-motion';

const NODES = [
    {
        year: '2011',
        title: 'Thor',
        badge: 'Antagonista',
        color: '#52b788',
        image: '/loki-images/thor.webp',
        desc: 'Inicia como antagonista movido pela rejeição paterna e origemcomo filho de Frost Giant — a fissura que moldará toda sua trajetória.',
        side: 'left',
    },
    {
        year: '2012',
        title: 'Os Vingadores',
        badge: 'Vilão Central',
        color: '#40916c',
        image: '/loki-images/los_vengadores_disney_plus_cd769592.jpeg',
        desc: 'Vilão central liderando exército alienígena. Sua ambição catalisa a formação dos Vingadores — criando laços que guiarão o MCU por décadas.',
        side: 'right',
    },
    {
        year: '2013',
        title: 'Thor: Mundo Sombrio',
        badge: 'Aliado Ambíguo',
        color: '#2d6a4f',
        image: '/loki-images/5c84815c-0c4d-4482-afc6-06192cf50bab_xl.jpeg',
        desc: 'Aliado ambíguo após perder Frigga. Demonstra lealdade genuína pela primeira vez. Finge a própria morte — primeiro ato de reinvenção.',
        side: 'left',
    },
    {
        year: '2017',
        title: 'Thor: Ragnarok',
        badge: 'Trickster Herói',
        color: '#1b4332',
        image: '/loki-images/thorrag048.jpg',
        desc: 'Salva o povo de Asgard ao lado de Thor. O trickster escolhe o lado dos heróis sem abandonar seu estilo único — metamorfose do caráter.',
        side: 'right',
    },
    {
        year: '2018',
        title: 'Vingadores: Guerra Infinita',
        badge: 'Sacrifício Final',
        color: '#52b788',
        image: '/loki-images/thor-in-avengers-infinity-war-new-8k-poster-hl.jpg',
        desc: 'Sacrifica a própria vida em defesa do irmão Thor diante do Thanos. O trickster morre como herói — sua última encenação era a verdade.',
        side: 'left',
    },
    {
        year: '2021–23',
        title: 'Loki — Série Disney+',
        badge: 'Guardião do Multiverso',
        color: '#ffd700',
        image: '/loki-images/7633018.jpg',
        desc: 'Capturado pela TVA, reescreve sua jornada, confronta variantes e se sacrifica para tecer e guardar o multiverso.',
        side: 'right',
    },
];

// Branch connector SVG paths drawn from trunk to card
const BRANCH_W = 120; // px from center to card edge

const TreeTimeline = () => {
    const isMobile = useIsMobile();
    return (
        <section id="linha-do-tempo" style={{
            padding: '8rem 0 6rem',
            background: 'var(--color-dark)',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Subtle BG */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'url("/loki-images/wp2875707.jpg")',
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
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                        Evolução Narrativa
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 800,
                        color: 'var(--color-light)',
                        marginTop: '0.5rem',
                        letterSpacing: '-0.02em',
                    }}>
                        A Árvore da Jornada de Loki
                    </h2>
                    <div style={{ width: '50px', height: '3px', background: 'var(--color-accent)', margin: '1.25rem auto 0' }} />
                    <p style={{ color: 'var(--color-gray)', maxWidth: '480px', margin: '1rem auto 0', fontWeight: 300, lineHeight: 1.7, fontSize: '0.95rem' }}>
                        Como galhos de Yggdrasil, cada aparição ramifica e expande o universo narrativo do MCU.
                    </p>
                </motion.div>

                {/* Tree layout */}
                <div style={{
                    position: 'relative',
                    maxWidth: '960px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0,
                }}>
                    {/* Central Trunk — hidden on mobile */}
                    {!isMobile && (
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            top: 0,
                            bottom: 0,
                            width: '2px',
                            transform: 'translateX(-50%)',
                            zIndex: 0,
                            overflow: 'hidden',
                        }}>
                            <motion.div
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: 'easeInOut' }}
                                style={{
                                    width: '2px',
                                    height: '100%',
                                    background: 'linear-gradient(to bottom, transparent, #52b788 15%, #40916c 40%, #2d6a4f 60%, #ffd700 85%, transparent)',
                                    transformOrigin: 'top center',
                                }}
                            />
                        </div>
                    )}

                    {NODES.map((node, i) => {
                        const isLeft = node.side === 'left';
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: isMobile ? 0 : (isLeft ? -50 : 50) }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.5, delay: i * 0.07 }}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: isMobile ? '1fr' : '1fr 60px 1fr',
                                    alignItems: 'center',
                                    marginBottom: isMobile ? '1.25rem' : '3rem',
                                    position: 'relative',
                                    zIndex: 1,
                                }}
                            >
                                {/* Left side — hide on mobile when card belongs to right */}
                                <div style={{ paddingRight: isMobile ? 0 : '1.5rem', display: isMobile && !isLeft ? 'none' : 'flex', justifyContent: 'flex-end' }}>
                                    {isLeft ? (
                                        <NodeCard node={node} />
                                    ) : (
                                        /* Empty connector line placeholder */
                                        <div style={{ width: '100%', height: '2px' }} />
                                    )}
                                </div>

                                {/* Center — trunk dot + branch line — hidden on mobile */}
                                <div style={{ display: isMobile ? 'none' : 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: '200px' }}>
                                    {/* Horizontal branch line */}
                                    <svg
                                        viewBox="0 0 60 10"
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: 0,
                                            width: '100%',
                                            height: '20px',
                                            overflow: 'visible',
                                            transform: 'translateY(-50%)',
                                        }}
                                        preserveAspectRatio="none"
                                    >
                                        {/* Branch left */}
                                        {isLeft && (
                                            <motion.line
                                                x1="30" y1="5" x2="0" y2="5"
                                                stroke={node.color}
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                whileInView={{ pathLength: 1, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
                                            />
                                        )}
                                        {/* Branch right */}
                                        {!isLeft && (
                                            <motion.line
                                                x1="30" y1="5" x2="60" y2="5"
                                                stroke={node.color}
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                whileInView={{ pathLength: 1, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
                                            />
                                        )}
                                    </svg>

                                    {/* Trunk dot */}
                                    <motion.div
                                        whileHover={{ scale: 1.5 }}
                                        animate={{
                                            boxShadow: [
                                                `0 0 8px 2px ${node.color}88`,
                                                `0 0 20px 6px ${node.color}44`,
                                                `0 0 8px 2px ${node.color}88`,
                                            ],
                                        }}
                                        transition={{ duration: 2.5, repeat: Infinity }}
                                        style={{
                                            width: '16px',
                                            height: '16px',
                                            borderRadius: '50%',
                                            background: node.color,
                                            border: '3px solid var(--color-dark)',
                                            zIndex: 2,
                                            position: 'relative',
                                            flexShrink: 0,
                                        }}
                                    />
                                </div>

                                {/* Right side — hide on mobile when card belongs to left */}
                                <div style={{ paddingLeft: isMobile ? 0 : '1.5rem', display: isMobile && isLeft ? 'none' : 'flex', justifyContent: 'flex-start' }}>
                                    {!isLeft ? (
                                        <NodeCard node={node} />
                                    ) : (
                                        <div style={{ width: '100%', height: '2px' }} />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const NodeCard = ({ node }) => (
    <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        style={{
            width: '100%',
            maxWidth: '380px',
            background: 'var(--glass-bg)',
            border: `1px solid ${node.color}44`,
            borderRadius: '18px',
            overflow: 'hidden',
            backdropFilter: 'blur(20px)',
            boxShadow: `0 12px 36px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)`,
            transition: 'box-shadow 0.3s ease',
        }}
    >
        {/* Image */}
        <div style={{ height: '175px', overflow: 'hidden', position: 'relative' }}>
            <img
                src={node.image}
                alt={node.title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8))' }} />

            {/* Year pill */}
            <span style={{
                position: 'absolute',
                bottom: '0.75rem',
                left: '0.9rem',
                background: `${node.color}`,
                color: node.color === '#ffd700' ? '#000' : '#fff',
                fontSize: '0.78rem',
                fontWeight: 800,
                padding: '0.25rem 0.75rem',
                borderRadius: '100px',
                letterSpacing: '0.04em',
            }}>
                {node.year}
            </span>

            {/* Badge */}
            <span style={{
                position: 'absolute',
                bottom: '0.75rem',
                right: '0.9rem',
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)',
                border: `1px solid ${node.color}55`,
                color: node.color,
                fontSize: '0.65rem',
                fontWeight: 700,
                padding: '0.2rem 0.65rem',
                borderRadius: '100px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
            }}>
                {node.badge}
            </span>
        </div>

        {/* Text */}
        <div style={{ padding: '1.1rem 1.4rem 1.4rem' }}>
            <h3 style={{ color: 'var(--color-light)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{node.title}</h3>
            <p style={{ color: 'var(--color-gray)', fontSize: '0.82rem', lineHeight: 1.65, fontWeight: 300 }}>{node.desc}</p>
        </div>
    </motion.div>
);

export default TreeTimeline;
