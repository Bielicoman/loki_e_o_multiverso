import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

// Loki Journey nodes - using specific Drive images for each film
const NODES = [
    {
        year: '2011',
        title: 'Thor',
        badge: 'Antagonista',
        color: '#4a7c59',
        image: '/loki-images/thor.webp',
        desc: 'Inicia como antagonista movido pela rejeição paterna e origem como filho de Frost Giant — a fissura que moldará toda sua trajetória.',
        side: 'left',
    },
    {
        year: '2012',
        title: 'Os Vingadores',
        badge: 'Vilão Central',
        color: '#2d6a4f',
        image: '/loki-images/Avengers-Wallpaper-4-715x402.jpg',
        desc: 'Vilão central liderando exército alienígena. Sua ambição catalisa a formação dos Vingadores — criando laços que guiarão o MCU por décadas.',
        side: 'right',
    },
    {
        year: '2013',
        title: 'Thor: Mundo Sombrio',
        badge: 'Aliado Ambíguo',
        color: '#1b6349',
        image: '/loki-images/9bc8a4e7-5d87-4ff8-a493-3ff0cc29da08_xl.jpeg',
        desc: 'Aliado ambíguo após perder Frigga. Demonstra lealdade genuína pela primeira vez. Finge a própria morte — primeiro ato de uma jornada de reinvenção.',
        side: 'left',
    },
    {
        year: '2017',
        title: 'Thor: Ragnarok',
        badge: 'Trickster Herói',
        color: '#268d33',
        image: '/loki-images/thorrag048.jpg',
        desc: 'Salva o povo de Asgard ao lado de Thor. O trickster escolhe o lado dos heróis sem abandonar seu estilo único — metamorfose do caráter.',
        side: 'right',
    },
    {
        year: '2018',
        title: 'Vingadores: Guerra Infinita',
        badge: 'Sacrifício Final',
        color: '#16be51',
        image: '/loki-images/thor-loki-death.avif',
        desc: 'Sacrifica a própria vida em defesa do irmão Thor diante do Thanos. O trickster morre como herói — sua última encenação era a verdade.',
        side: 'left',
    },
    {
        year: '2021–23',
        title: 'Loki (Série Disney+)',
        badge: 'Guardião do Multiverso',
        color: '#ffd700',
        image: '/loki-images/7633018.jpg',
        desc: 'Capturado pela TVA, reescreve sua jornada, confronta variantes e se sacrifica para tecer e guardar o multiverso — tornando-se o único ser a suportar o peso de toda a criação.',
        side: 'right',
    },
];

const TreeTimeline = () => {
    const containerRef = useRef(null);
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        const timers = NODES.map((_, i) =>
            setTimeout(() => setVisible(v => [...v, i]), i * 300 + 400)
        );
        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <section id="linha-do-tempo" style={{
            padding: '8rem 0 6rem',
            background: 'var(--color-dark)',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Subtle background */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'url("/loki-images/wp2875707.jpg")',
                backgroundSize: 'cover', backgroundPosition: 'center',
                opacity: 0.05,
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Evolução Narrativa</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--color-light)', marginTop: '0.5rem', letterSpacing: '-0.02em' }}>A Árvore da Jornada de Loki</h2>
                    <div style={{ width: '50px', height: '3px', background: 'var(--color-accent)', margin: '1.25rem auto 0' }} />
                    <p style={{ color: 'var(--color-gray)', maxWidth: '500px', margin: '1rem auto 0', fontWeight: 300, lineHeight: 1.7 }}>
                        Como galhos de Yggdrasil, cada aparição de Loki ramifica e expande o universo narrativo do MCU.
                    </p>
                </motion.div>

                {/* Tree layout */}
                <div ref={containerRef} style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
                    {/* Central trunk SVG */}
                    <svg
                        viewBox="0 0 80 1100"
                        style={{
                            position: 'absolute',
                            left: 'calc(50% - 40px)',
                            top: 0,
                            width: '80px',
                            height: '100%',
                            pointerEvents: 'none',
                            zIndex: 0,
                        }}
                        preserveAspectRatio="none"
                    >
                        {/* Main trunk */}
                        <motion.path
                            d="M40 0 C38 100, 42 200, 40 350 C38 500, 42 700, 40 1100"
                            stroke="url(#trunkGrad)"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 3.5, ease: 'easeInOut' }}
                        />
                        {/* Branch left - node 1 */}
                        <motion.path d="M40 160 C20 160, 0 165, -60 160" stroke="#4a7c59" strokeWidth="2" fill="none" opacity="0.6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.5 }} />
                        {/* Branch right - node 2 */}
                        <motion.path d="M40 310 C60 310, 80 315, 140 310" stroke="#2d6a4f" strokeWidth="2" fill="none" opacity="0.6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.9 }} />
                        {/* Branch left - node 3 */}
                        <motion.path d="M40 470 C20 470, 0 475, -60 470" stroke="#1b6349" strokeWidth="2" fill="none" opacity="0.6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 1.3 }} />
                        {/* Branch right - node 4 */}
                        <motion.path d="M40 635 C60 635, 80 640, 140 635" stroke="#268d33" strokeWidth="2" fill="none" opacity="0.6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 1.7 }} />
                        {/* Branch left - node 5 */}
                        <motion.path d="M40 800 C20 800, 0 805, -60 800" stroke="#16be51" strokeWidth="2" fill="none" opacity="0.6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 2.1 }} />
                        {/* Branch right - node 6 */}
                        <motion.path d="M40 960 C60 960, 80 965, 140 960" stroke="#ffd700" strokeWidth="3" fill="none" opacity="0.7" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 2.5 }} />

                        <defs>
                            <linearGradient id="trunkGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#1b4332" />
                                <stop offset="50%" stopColor="#268d33" />
                                <stop offset="100%" stopColor="#ffd700" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Nodes */}
                    {NODES.map((node, i) => {
                        const isLeft = node.side === 'left';
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.8, delay: i * 0.15 }}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 80px 1fr',
                                    alignItems: 'center',
                                    marginBottom: '4rem',
                                    position: 'relative',
                                    zIndex: 1,
                                }}
                            >
                                {/* Left panel */}
                                <div style={{ paddingRight: '2rem', order: 0 }}>
                                    {isLeft ? <TreeCard node={node} align="right" /> : <div />}
                                </div>

                                {/* Center node dot */}
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: 1 }}>
                                    <motion.div
                                        whileHover={{ scale: 1.4 }}
                                        animate={{ boxShadow: [`0 0 10px ${node.color}`, `0 0 30px ${node.color}`, `0 0 10px ${node.color}`] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        style={{
                                            width: '20px', height: '20px',
                                            borderRadius: '50%',
                                            background: node.color,
                                            border: '3px solid var(--color-dark)',
                                            flexShrink: 0,
                                        }}
                                    />
                                </div>

                                {/* Right panel */}
                                <div style={{ paddingLeft: '2rem', order: 2 }}>
                                    {!isLeft ? <TreeCard node={node} align="left" /> : <div />}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const TreeCard = ({ node, align }) => (
    <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        style={{
            background: 'var(--glass-bg)',
            border: `1px solid ${node.color}33`,
            borderRadius: '16px',
            overflow: 'hidden',
            backdropFilter: 'blur(20px)',
            boxShadow: `0 15px 40px rgba(0,0,0,0.5), 0 0 20px ${node.color}11`,
            textAlign: align,
        }}
    >
        {/* Image */}
        <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
            <img src={node.image} alt={node.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.85))' }} />
            {/* Badge */}
            <span style={{
                position: 'absolute', top: '0.75rem',
                ...(align === 'right' ? { right: '0.75rem' } : { left: '0.75rem' }),
                background: `${node.color}22`,
                border: `1px solid ${node.color}55`,
                color: node.color,
                fontSize: '0.68rem', fontWeight: 700,
                padding: '0.2rem 0.7rem',
                borderRadius: '100px',
                letterSpacing: '0.05em', textTransform: 'uppercase',
                backdropFilter: 'blur(8px)',
            }}>{node.badge}</span>
            <span style={{
                position: 'absolute', bottom: '0.75rem',
                ...(align === 'right' ? { left: '0.75rem' } : { right: '0.75rem' }),
                color: node.color, fontWeight: 800, fontSize: '1.3rem',
                textShadow: `0 0 20px ${node.color}`,
            }}>{node.year}</span>
        </div>

        {/* Text */}
        <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
            <h3 style={{ color: 'var(--color-light)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{node.title}</h3>
            <p style={{ color: 'var(--color-gray)', fontSize: '0.82rem', lineHeight: 1.7, fontWeight: 300 }}>{node.desc}</p>
        </div>
    </motion.div>
);

export default TreeTimeline;
