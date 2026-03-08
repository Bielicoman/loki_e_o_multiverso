import { motion } from 'framer-motion';

const Multiverse = () => {
    return (
        <section id="multiverso" style={{
            padding: '6rem 0',
            background: 'url("/loki-images/lokiseason2-episode6-endingexplained.jpg") center/cover no-repeat, var(--bg-color)',
            backgroundBlendMode: 'overlay',
            position: 'relative'
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', letterSpacing: '0.1em' }}>O QUE É O MULTIVERSO DO MCU?</h2>
                        <div style={{ width: '60px', height: '4px', background: 'var(--color-accent)', margin: '0 auto' }}></div>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        style={{
                            maxWidth: '900px',
                            margin: '0 auto',
                            fontSize: '1.25rem',
                            lineHeight: 1.8,
                            background: 'var(--glass-bg)',
                            padding: '3rem 2rem',
                            borderRadius: '24px',
                            border: '1px solid var(--glass-border)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                        }}
                    >
                        <p className="mb-2" style={{ color: 'var(--text-color)', fontWeight: 300 }}>
                            O multiverso da MCU é o conjunto de realidades paralelas que coexistem com o universo principal. Cada uma dessas realidades possui suas próprias versões de personagens, histórias e eventos.
                        </p>

                        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', color: 'var(--color-gray)', fontWeight: 300, lineHeight: 1.7 }}>
                            <li className="mb-1">
                                <strong style={{ color: 'var(--color-light)' }}>A teoria do multiverso quântico:</strong> defende a existência de realidades paralelas originadas a partir de diferentes escolhas e colapsos de função de onda. (Ex: Homem Formiga e Vespa: Quantumania)
                            </li>
                            <li className="mb-1">
                                <strong style={{ color: 'var(--color-light)' }}>A teoria ficcional/filosófica:</strong> explora a multiplicidade de mundos possíveis dentro da linguagem narrativa e especulativa. (Ex: Homem Aranha: Sem volta pra casa)
                            </li>
                        </ul>

                        <div style={{
                            background: 'rgba(230, 194, 0, 0.05)',
                            borderLeft: '4px solid var(--color-accent)',
                            padding: '2rem',
                            borderRadius: '0 16px 16px 0',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <p style={{ fontStyle: 'italic', color: 'var(--color-accent)', fontWeight: 300, letterSpacing: '0.02em', lineHeight: 1.6 }}>
                                "A Marvel chama essa junção de teoria da realidade ramificada, em que cada escolha ou evento pode criar uma nova linha do tempo, originando um novo universo. Essa estrutura permite múltiplas narrativas conectadas, mantendo a coerência dentro de um universo compartilhado."
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Multiverse;
