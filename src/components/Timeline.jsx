import { motion } from 'framer-motion';

const TimelineData = [
    {
        year: "2011",
        title: "Thor",
        description: "Inicia como antagonista movido pela rejeição e busca por identidade.",
        color: "#062011"
    },
    {
        year: "2012",
        title: "Vingadores",
        description: "Vilão central, simbolizando a ameaça externa que une os heróis.",
        color: "#0a3512"
    },
    {
        year: "2013",
        title: "Thor: Mundo Sombrio",
        description: "Atua como aliado ambíguo, vive a perda da mãe e mostra traços de redenção.",
        color: "#184522"
    },
    {
        year: "2017",
        title: "Thor: Ragnarok",
        description: "Assume o papel de trickster-herói, ajuda na salvação de Asgard e fortalece laços com Thor.",
        color: "#268d33"
    },
    {
        year: "2018",
        title: "Vingadores: Guerra Infinita",
        description: "Faz sua escolha final como herói, sacrificando-se em defesa do irmão.",
        color: "#16be51"
    },
    {
        year: "2021",
        title: "LOKI (Série)",
        description: "Reescreve sua jornada, confronta suas variantes e torna-se o guardião do multiverso.",
        color: "#ffd700" // Gold climax
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
                                <div style={{
                                    width: 'calc(50% - 3rem)',
                                    textAlign: isEven ? 'right' : 'left',
                                    background: 'var(--glass-bg)',
                                    padding: '1.5rem',
                                    borderRadius: '12px',
                                    border: `1px solid ${item.color}55`, // Transparency appended
                                    boxShadow: `0 4px 20px ${item.color}33`,
                                    position: 'relative'
                                }}>
                                    <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>{item.year}</span>
                                    <h3 style={{ marginBottom: '1rem', color: 'var(--color-light)' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--color-gray)', fontSize: '0.95rem' }}>{item.description}</p>
                                </div>

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
