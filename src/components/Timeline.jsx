import { motion } from 'framer-motion';

const TimelineData = [
    {
        year: "2011",
        title: "Thor",
        description: "Inicia como antagonista movido pela rejeição e busca por identidade.",
        color: "#062011",
        image: "/loki-images/thor.webp"
    },
    {
        year: "2012",
        title: "Vingadores",
        description: "Vilão central, simbolizando a ameaça externa que une os heróis.",
        color: "#0a3512",
        image: "/loki-images/los_vengadores_disney_plus_cd769592.jpeg"
    },
    {
        year: "2013",
        title: "Thor: Mundo Sombrio",
        description: "Atua como aliado ambíguo, vive a perda da mãe e mostra traços de redenção.",
        color: "#184522",
        image: "/loki-images/thor-wallpaper-5.jpg"
    },
    {
        year: "2017",
        title: "Thor: Ragnarok",
        description: "Assume o papel de trickster-herói, ajuda na salvação de Asgard e fortalece laços com Thor.",
        color: "#268d33",
        image: "/loki-images/Thor-ragnarok.jpg"
    },
    {
        year: "2018",
        title: "Vingadores: Guerra Infinita",
        description: "Faz sua escolha final como herói, sacrificando-se em defesa do irmão.",
        color: "#16be51",
        image: "/loki-images/thor-loki-death.avif"
    },
    {
        year: "2021",
        title: "LOKI (Série)",
        description: "Reescreve sua jornada, confronta suas variantes e torna-se o guardião do multiverso.",
        color: "#ffd700", // Gold climax
        image: "/loki-images/7633018.jpg"
    }
];

const Timeline = () => {
    return (
        <section id="linha-do-tempo" style={{
            padding: '6rem 0',
            background: 'var(--color-dark)',
            position: 'relative'
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', letterSpacing: '0.1em', color: 'var(--color-light)' }}>APARIÇÕES DE LOKI</h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--color-accent)', margin: '0 auto' }}></div>
                </div>

                <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                    {/* Central Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: 0,
                        bottom: 0,
                        width: '4px',
                        background: 'var(--glass-border)',
                        borderRadius: '2px'
                    }}></div>

                    {TimelineData.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '4rem',
                                    flexDirection: isEven ? 'row' : 'row-reverse'
                                }}
                            >
                                {/* Content Box */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    style={{
                                        width: 'calc(50% - 3rem)',
                                        textAlign: isEven ? 'right' : 'left',
                                        background: 'var(--glass-bg)',
                                        padding: '2rem',
                                        borderRadius: '20px',
                                        border: `1px solid ${item.color}55`,
                                        backdropFilter: 'blur(20px)',
                                        boxShadow: `0 15px 30px rgba(0,0,0,0.3), inset 0 0 20px ${item.color}11`,
                                        position: 'relative'
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                            objectFit: 'cover',
                                            borderRadius: '12px',
                                            marginBottom: '1.5rem',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                                        }}
                                    />
                                    <span style={{ color: 'var(--color-accent)', fontWeight: 600, display: 'block', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>{item.year}</span>
                                    <h3 style={{ marginBottom: '1rem', color: 'var(--color-light)', fontSize: '1.4rem' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--text-color)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.description}</p>
                                </motion.div>

                                {/* Node Dot */}
                                <div style={{
                                    position: 'absolute',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    background: item.color,
                                    border: '4px solid var(--color-dark)',
                                    zIndex: 2,
                                    boxShadow: `0 0 15px ${item.color}`
                                }}></div>

                                {/* Empty Space for alignment */}
                                <div style={{ width: 'calc(50% - 3rem)' }}></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
