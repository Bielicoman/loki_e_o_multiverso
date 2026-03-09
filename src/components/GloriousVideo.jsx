const GloriousVideo = () => (
    <section
        id="glorioso-proposito"
        style={{ position: 'relative', background: '#000', padding: '3rem 0' }}
    >
        <div style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: '0 5%',
            borderRadius: '24px',
            overflow: 'hidden',
        }}>
            <video
                src="/glorioso-proposito.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                    width: '100%',
                    display: 'block',
                    maxHeight: '80vh',
                    objectFit: 'contain',
                    background: '#000',
                    borderRadius: '20px',
                    boxShadow: '0 30px 80px rgba(0,0,0,0.7)',
                }}
            />
        </div>

    </section>
);

export default GloriousVideo;
