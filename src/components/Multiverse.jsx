import { motion } from 'framer-motion';

const Multiverse = () => {
    return (
        <section id="multiverso" style={{
            padding: '6rem 0',
            background: 'url("/yggdrasil.png") center/cover no-repeat, var(--bg-color)',
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

                    <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: 1.8 }}>
                        <p className="mb-2">
                            O multiverso da MCU é o conjunto de realidades paralelas que coexistem com o universo principal. Cada uma dessas realidades possui suas próprias versões de personagens, histórias e eventos.
                        </p>

                        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2rem', color: 'var(--color-gray)' }}>
                            <li className="mb-1">
                                <strong>A teoria do multiverso quântico:</strong> defende a existência de realidades paralelas originadas a partir de diferentes escolhas e colapsos de função de onda. (Ex: Homem Formiga e Vespa: Quantumania)
                            </li>
                            <li className="mb-1">
                                <strong>A teoria ficcional/filosófica:</strong> explora a multiplicidade de mundos possíveis dentro da linguagem narrativa e especulativa. (Ex: Homem Aranha: Sem volta pra casa)
                            </li>
                        </ul>

                        <div style={{
                            background: 'rgba(255, 215, 0, 0.1)',
                            borderLeft: '4px solid var(--color-accent)',
                            padding: '2rem',
                            borderRadius: '0 12px 12px 0'
                        }}>
                            <p style={{ fontStyle: 'italic' }}>
                                A Marvel chama essa junção de teoria da realidade ramificada, em que cada escolha ou evento pode criar uma nova linha do tempo, originando um novo universo. Essa estrutura permite múltiplas narrativas conectadas, mantendo a coerência dentro de um universo compartilhado.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Multiverse;
