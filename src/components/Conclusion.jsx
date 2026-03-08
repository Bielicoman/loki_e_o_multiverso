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

                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        style={{
                            maxWidth: '900px',
                            margin: '0 auto',
                            fontSize: '1.25rem',
                            lineHeight: 1.8,
                            background: 'var(--glass-bg)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid var(--glass-border)',
                            padding: '4rem 2rem',
                            borderRadius: '24px',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            color: 'var(--text-color)',
                            fontWeight: 300
                        }}
                    >
                        <img src="/loki-images/loki-logo-freelogovectors.net_.png" alt="Loki Logo" style={{ width: '150px', marginBottom: '2.5rem', filter: 'drop-shadow(0 0 25px rgba(230, 194, 0, 0.5))' }} />
                        <p className="mb-2" style={{ width: '100%', textAlign: 'justify', letterSpacing: '0.02em' }}>
                            A principal ideia deste estudo é mostrar como a Marvel usa o personagem Loki para resolver os desafios de contar uma história tão grande e complexa. Ele deixa de ser só um personagem secundário e vira o centro de tudo, ajudando a organizar a mudança de uma história com começo, meio e fim para um universo cheio de realidades e linhas do tempo diferentes.
                        </p>
                        <p style={{ width: '100%', textAlign: 'justify', letterSpacing: '0.02em', color: 'var(--color-gray)' }}>
                            Loki se torna a chave que mantém o multiverso unido e faz com que ele continue funcionando. O MCU enfrenta seus desafios de engenharia narrativa por meio da construção estratégica de personagens. Loki encarna a passagem de uma fase pautada pela convergência heróica para uma era de ramificações, deslocamentos e reinvenções.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Conclusion;
