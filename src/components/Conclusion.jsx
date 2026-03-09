import { motion } from 'framer-motion';

const Conclusion = () => (
    <section id="conclusao" style={{ padding: '8rem 0', background: 'var(--color-dark)', position: 'relative', overflow: 'hidden' }}>

        {/* GRANDIOSE Yggdrasil background — fills the section */}
        <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeOut' }}
            style={{
                position: 'absolute', inset: 0, zIndex: 0,
                backgroundImage: 'url("/loki-images/yggdrasil.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        />
        {/* Multiple overlay layers for depth */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.92) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'radial-gradient(ellipse at center, rgba(0,80,20,0.15) 0%, transparent 70%)' }} />

        {/* Animated glow particles */}
        {[...Array(8)].map((_, i) => (
            <motion.div
                key={i}
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.6, 0.2],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
                style={{
                    position: 'absolute',
                    left: `${10 + i * 12}%`,
                    bottom: `${15 + (i % 3) * 15}%`,
                    width: `${6 + (i % 3) * 4}px`,
                    height: `${6 + (i % 3) * 4}px`,
                    borderRadius: '50%',
                    background: i % 2 === 0 ? 'rgba(100, 255, 120, 0.7)' : 'rgba(230,194,0,0.6)',
                    filter: 'blur(2px)',
                    zIndex: 2,
                    pointerEvents: 'none',
                }}
            />
        ))}

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Considerações Finais</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', marginTop: '0.5rem', letterSpacing: '-0.02em', textShadow: '0 0 40px rgba(100,255,120,0.3)' }}>o deus das histórias</h2>
                    <div style={{ width: '60px', height: '3px', background: 'var(--color-accent)', margin: '1.25rem auto 0' }} />
                </div>

                {/* Text block - glass card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        maxWidth: '800px',
                        margin: '0 auto 4rem',
                        background: 'rgba(0,0,0,0.55)',
                        backdropFilter: 'blur(24px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '24px',
                        padding: '3rem',
                        boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
                    }}
                >
                    <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.9, fontWeight: 300, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                        A principal ideia deste estudo é mostrar como a Marvel usa o personagem Loki para resolver os desafios de contar uma história tão grande e complexa. Ele deixa de ser só um personagem secundário e vira o centro de tudo, ajudando a organizar a mudança de uma história com começo, meio e fim para um universo cheio de realidades e linhas do tempo diferentes.
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontWeight: 300, fontSize: '1rem', marginBottom: '1.5rem' }}>
                        Loki se torna a chave que mantém o multiverso unido e faz com que ele continue funcionando. O MCU enfrenta seus desafios de engenharia narrativa por meio da construção estratégica de personagens.
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, fontWeight: 300, fontSize: '1rem' }}>
                        Loki encarna a passagem de uma fase pautada pela convergência heróica para uma era de ramificações, deslocamentos e reinvenções — tornando-se, definitivamente, o <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Deus das Histórias</span>, o Guardião de Yggdrasil.
                    </p>
                </motion.div>

                {/* Final quote + PDF download */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    style={{
                        textAlign: 'center',
                        maxWidth: '800px',
                        margin: '0 auto',
                        padding: '2.5rem 2rem',
                        background: 'rgba(0,0,0,0.5)',
                        border: '1px solid rgba(230,194,0,0.25)',
                        borderRadius: '20px',
                        backdropFilter: 'blur(15px)',
                    }}
                >
                    <img
                        src="/loki-images/loki-logo-freelogovectors.net_.png"
                        alt="Loki Logo"
                        style={{ width: '120px', display: 'block', margin: '0 auto 1.5rem', filter: 'drop-shadow(0 0 30px rgba(230,194,0,0.7)) brightness(1.2)' }}
                    />
                    <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.2rem)', fontStyle: 'italic', color: 'var(--color-accent)', lineHeight: 1.75, fontWeight: 300, marginBottom: '0.75rem' }}>
                        "Eu sei o que quero, que tipo de deus preciso ser — por você, por todos nós."
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', letterSpacing: '0.05em', marginBottom: '2rem' }}>Loki · Temporada 2 (2023)</p>

                    <a
                        href="/loki_text.pdf"
                        download="Loki-Multiverso-MCU.pdf"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            background: 'var(--color-accent)',
                            color: '#000',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            padding: '0.9rem 2.2rem',
                            borderRadius: '10px',
                            textDecoration: 'none',
                            letterSpacing: '0.02em',
                            transition: 'all 0.25s ease',
                            boxShadow: '0 0 30px rgba(230,194,0,0.3)',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#f5d000'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 0 50px rgba(230,194,0,0.6)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(230,194,0,0.3)'; }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                        Baixar Artigo Completo em PDF
                    </a>
                </motion.div>
            </motion.div>
        </div>
    </section>
);

export default Conclusion;
