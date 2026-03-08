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
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--glass-border)',
                padding: '3rem',
                borderRadius: '16px',
                maxWidth: '900px',
                margin: '0 auto',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}>
                <p style={{
                    fontSize: '1.5rem',
                    lineHeight: 1.8,
                    textAlign: 'center',
                    fontStyle: 'italic'
                }}>
                    "Entender qual é o papel de Loki na interconectividade do universo compartilhado do MCU (Marvel Cinematic Universe)."
                </p>
            </div>
        </SectionWrapper>
    );
};

export default Objective;
