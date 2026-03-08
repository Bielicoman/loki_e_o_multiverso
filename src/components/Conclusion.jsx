import { motion } from 'framer-motion';

const Conclusion = () => {
    return (
        <section id="conclusao" style={{
            padding: '6rem 0',
            background: 'var(--color-secondary)',
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
                        <h2 style={{ fontSize: '2.5rem', letterSpacing: '0.1em', color: 'var(--color-accent)' }}>CONSIDERAÇÕES FINAIS</h2>
                        <div style={{ width: '60px', height: '4px', background: 'var(--color-accent)', margin: '0 auto' }}></div>
                    </div>

                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        fontSize: '1.2rem',
                        lineHeight: 1.8,
                        background: 'var(--glass-bg)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid var(--glass-border)',
                        padding: '3rem',
                        borderRadius: '16px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <img src="/loki-scepter.png" alt="Cetro do Loki" style={{ width: '120px', marginBottom: '2rem', filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.4))' }} />
                        <p className="mb-2" style={{ width: '100%', textAlign: 'justify' }}>
                            A principal ideia deste estudo é mostrar como a Marvel usa o personagem Loki para resolver os desafios de contar uma história tão grande e complexa. Ele deixa de ser só um personagem secundário e vira o centro de tudo, ajudando a organizar a mudança de uma história com começo, meio e fim para um universo cheio de realidades e linhas do tempo diferentes.
                        </p>
                        <p>
                            Loki se torna a chave que mantém o multiverso unido e faz com que ele continue funcionando. O MCU enfrenta seus desafios de engenharia narrativa por meio da construção estratégica de personagens. Loki encarna a passagem de uma fase pautada pela convergência heróica para uma era de ramificações, deslocamentos e reinvenções.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Conclusion;
