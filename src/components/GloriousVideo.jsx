const GloriousVideo = () => (
    <section
        id="glorioso-proposito"
        style={{ position: 'relative', background: '#000', overflow: 'hidden' }}
    >
        <video
            src="/glorioso-proposito.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
                width: '100%',
                display: 'block',
                maxHeight: '85vh',
                objectFit: 'contain',
                background: '#000',
            }}
        />
        {/* Bottom gradient */}
        <div style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: '100px',
            background: 'linear-gradient(to top, var(--color-dark), transparent)',
            pointerEvents: 'none',
            zIndex: 5,
        }} />
    </section>
);

export default GloriousVideo;
