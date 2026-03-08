import { motion } from 'framer-motion';

const TimelineData = [
    {
        year: '2011',
        title: 'Thor',
        badge: 'Antagonista',
        description: 'Inicia como antagonista movido pela rejeição paterna e pela busca de identidade. Revela sua origem como filho de Frost Giant, abrindo a fissura que moldará toda sua trajetória.',
        color: '#4a7c59',
        image: '/loki-images/thor.webp',
        alt: 'Thor 2011',
    },
    {
        year: '2012',
        title: 'Vingadores',
        badge: 'Vilão Central',
        description: 'Vilão central, liderando um exército alienígena. Sua ambição de conquista e domínio funciona como catalisador que une, pela primeira vez, os heróis em torno de um propósito comum.',
        color: '#2d6a4f',
        image: '/loki-images/los_vengadores_disney_plus_cd769592.jpeg',
        alt: 'Vingadores 2012',
    },
    {
        year: '2013',
        title: 'Thor: Mundo Sombrio',
        badge: 'Aliado Ambíguo',
        description: 'Atua como aliado ambíguo de Thor após perder a mãe Frigga. Demonstra lealdade genuína pela primeira vez, prenunciando a evolução moral que lhe aguarda. Finge sua própria morte.',
        color: '#1b4332',
        image: '/loki-images/9bc8a4e7-5d87-4ff8-a493-3ff0cc29da08_xl.jpeg',
        alt: 'Thor Mundo Sombrio',
    },
    {
        year: '2017',
        title: 'Thor: Ragnarok',
        badge: 'Trickster Herói',
        description: 'Assume o papel de trickster-herói ao lado de Thor, ajudando a salvar o povo de Asgard. Sua lealdade é testada e, desta vez, ele responde como um herói — ainda que com seu próprio estilo.',
        color: '#268d33',
        image: '/loki-images/thorrag052.jpg',
        alt: 'Thor Ragnarok',
    },
    {
        year: '2018',
        title: 'Vingadores: Guerra Infinita',
        badge: 'Sacrifício Heroico',
        description: 'Diante do Thanos todo-poderoso, Loki faz sua escolha final e definitiva: sacrifica sua vida em defesa do irmão Thor. O trickster morre como herói — uma última encenação que, desta vez, era verdade.',
        color: '#16be51',
        image: '/loki-images/thor-loki-death.avif',
        alt: 'Vingadores Guerra Infinita - Morte de Loki',
    },
    {
        year: '2021–2023',
        title: 'LOKI (Série Disney+)',
        badge: 'Guardião do Multiverso',
        description: 'Reescreve completamente sua jornada ao ser capturado pela TVA. Confronta suas variantes, descobre o Tempo Eterno e, em ato supremo de heroísmo, sacrifica-se para tecer e guardar o multiverso — tornando-se o único ser que suporta o peso de toda a criação.',
        color: '#ffd700',
        image: '/loki-images/7633018.jpg',
        alt: 'Série Loki Disney+',
    },
];

const Timeline = () => (
    <section id="linha-do-tempo" style={{ padding: '8rem 0', background: 'var(--color-dark)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle BG */}
        <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url("/loki-images/wp3251912.jpg")',
            backgroundSize: 'cover', backgroundPosition: 'center',
            opacity: 0.04, zIndex: 0,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Evolução Narrativa</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--color-light)', marginTop: '0.5rem', letterSpacing: '-0.02em' }}>A Jornada de Loki no MCU</h2>
                    <div style={{ width: '50px', height: '3px', background: 'var(--color-accent)', margin: '1.25rem auto 0' }} />
                </div>

                {/* Timeline */}
                <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
                    {/* Vertical line */}
                    <div style={{
                        position: 'absolute', left: '50%', top: 0, bottom: 0,
                        width: '2px',
                        background: 'linear-gradient(to bottom, transparent, var(--color-accent) 15%, var(--color-accent) 85%, transparent)',
                        transform: 'translateX(-50%)',
                        zIndex: 0,
                    }} />

                    {TimelineData.map((item, i) => {
                        const isEven = i % 2 === 0;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.7, delay: i * 0.08 }}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 60px 1fr',
                                    marginBottom: '3rem',
                                    alignItems: 'start',
                                    position: 'relative',
                                    zIndex: 1,
                                }}
                            >
                                {/* Left area */}
                                <div style={{ paddingRight: '2rem', textAlign: 'right', order: isEven ? 0 : 2 }}>
                                    {isEven ? (
                                        <TimelineCard item={item} />
                                    ) : (
                                        <div style={{ height: '100%' }} />
                                    )}
                                </div>

                                {/* Center dot */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '1.5rem', order: 1 }}>
                                    <motion.div
                                        whileHover={{ scale: 1.3 }}
                                        style={{
                                            width: '18px', height: '18px',
                                            borderRadius: '50%',
                                            background: item.color,
                                            border: '3px solid var(--color-dark)',
                                            boxShadow: `0 0 20px ${item.color}`,
                                            zIndex: 2,
                                            cursor: 'default',
                                        }}
                                    />
                                </div>

                                {/* Right area */}
                                <div style={{ paddingLeft: '2rem', order: isEven ? 2 : 0 }}>
                                    {!isEven ? (
                                        <TimelineCard item={item} />
                                    ) : (
                                        <div style={{ height: '100%' }} />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    </section>
);

const TimelineCard = ({ item }) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        style={{
            background: 'var(--glass-bg)',
            border: `1px solid ${item.color}33`,
            borderRadius: '16px',
            overflow: 'hidden',
            backdropFilter: 'blur(20px)',
            boxShadow: `0 15px 40px rgba(0,0,0,0.4), inset 0 0 30px ${item.color}08`,
        }}
    >
        <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
            <img src={item.image} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8))' }} />
            <span style={{
                position: 'absolute', top: '0.75rem', left: '0.75rem',
                background: `${item.color}22`,
                border: `1px solid ${item.color}55`,
                color: item.color,
                fontSize: '0.7rem', fontWeight: 700,
                padding: '0.2rem 0.75rem',
                borderRadius: '100px',
                letterSpacing: '0.05em', textTransform: 'uppercase',
                backdropFilter: 'blur(8px)',
            }}>{item.badge}</span>
            <span style={{ position: 'absolute', bottom: '0.75rem', right: '0.75rem', color: item.color, fontWeight: 800, fontSize: '1.4rem' }}>{item.year}</span>
        </div>
        <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
            <h3 style={{ color: 'var(--color-light)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.6rem' }}>{item.title}</h3>
            <p style={{ color: 'var(--color-gray)', fontSize: '0.85rem', lineHeight: 1.7, fontWeight: 300 }}>{item.description}</p>
        </div>
    </motion.div>
);

export default Timeline;
