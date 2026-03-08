import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, bg = 'var(--bg-color)' }) => (
    <section id={id} style={{
        padding: '6rem 0',
        background: bg,
        position: 'relative',
        overflow: 'hidden'
    }}>
        <div className="container">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                {children}
            </motion.div>
        </div>
    </section>
);

const Objective = () => {
    return (
        <SectionWrapper id="objetivo">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '3rem', letterSpacing: '0.1em' }}>OBJETIVO</h2>
                <div style={{ width: '60px', height: '4px', background: 'var(--color-accent)', margin: '0 auto' }}></div>
            </div>

            <div style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                padding: '4rem 2rem',
                borderRadius: '24px',
                maxWidth: '900px',
                margin: '0 auto',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    left: '-50px',
                    width: '100px',
                    height: '100px',
                    background: 'var(--color-accent)',
                    filter: 'blur(60px)',
                    opacity: 0.2,
                    borderRadius: '50%'
                }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                    <img
                        src="/loki-images/loki-the-god-of-mischief-2023-n8.jpg"
                        alt="Loki MCU"
                        style={{
                            width: '100%',
                            maxWidth: '400px',
                            borderRadius: '16px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                            objectFit: 'cover'
                        }}
                    />
                    <p style={{
                        fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                        lineHeight: 1.6,
                        textAlign: 'center',
                        fontStyle: 'italic',
                        fontWeight: 300,
                        letterSpacing: '0.03em',
                        color: 'var(--text-color)',
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                    }}>
                        "Entender qual é o papel de Loki na interconectividade do universo compartilhado do MCU (Marvel Cinematic Universe)."
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Objective;
