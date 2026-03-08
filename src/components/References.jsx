import { motion } from 'framer-motion';

const refsData = [
    // Artigo article order (ABNT)
    {
        text: 'ALZAMORA, G.; TARCIA, L. Convergência e transmídia: galáxias semânticas e narrativas emergentes em jornalismo. Brazilian Journalism Research, Brasília, v. 8, n. 1, p. 22-35, 2012.',
        url: 'https://bjr.sbpjor.org.br/bjr/article/view/355',
    },
    {
        text: 'BONATELLI, L. F. Do semanal ao binge-publishing no SVOD: Análise das diferenças na narrativa das séries Sombra e Ossos e Loki. 2024. Dissertação (Mestrado) – UNESP, Bauru, 2024.',
        url: 'https://repositorio.unesp.br/',
    },
    {
        text: 'CAMPBELL, J. O herói de mil faces. São Paulo: Pensamento, 2007.',
        url: 'https://www.amazon.com.br/her%C3%B3i-mil-faces-Joseph-Campbell/dp/8576572273',
    },
    {
        text: 'CAMPOS, H. de. Da Transcriação: poética e semiótica da operação tradutora. Belo Horizonte: FALE/UFMG, 2011.',
        url: 'https://www.letras.ufmg.br/',
    },
    {
        text: 'JENKINS, H. Cultura da convergência. 2. ed. São Paulo: Aleph, 2009.',
        url: 'https://www.aleph.com.br/',
    },
    {
        text: 'KUKKONEN, K. Navigating infinite earths: Readers, mental models, and the multiverse of superhero comics. Storyworlds: A Journal of Narrative Studies, Lincoln, v. 2, n. 1, p. 39-58, 2010.',
        url: 'https://www.jstor.org/stable/25663111',
    },
    {
        text: 'MASSAROLO, J. C. Narrativa transmídia: a arte de construir mundos. In: ENCONTRO ANUAL DA SOCINE, 15., 2011, Rio de Janeiro. Anais [...]. São Paulo: Socine, 2011. p. 61-75.',
        url: 'https://www.socine.org.br/',
    },
    {
        text: 'ORLANDI, E. P. Análise de Discurso: princípios e procedimentos. 12. ed. Campinas: Pontes, 2015.',
        url: 'https://www.ponteseditores.com.br/produtos/analise-de-discurso-principios-e-procedimentos/',
    },
    {
        text: 'PÊCHEUX, M. O discurso: estrutura ou acontecimento. 8. ed. Campinas: Pontes, 2015.',
        url: 'https://www.ponteseditores.com.br/',
    },
    {
        text: 'RUIZ, G. O UNIVERSO TRIDIMENSIONAL DA MARVEL. 2020. TCC (Jornalismo) - ECA, USP, São Paulo, 2020.',
        url: 'https://www.teses.usp.br/',
    },
    {
        text: 'SCOLARI, C. A. Narrativas Transmedia: Cuando todos los medios cuentan. Barcelona: Deusto, 2013.',
        url: 'https://www.deusto.es/es/inicio/publicaciones/ficha/isbn/9788423413591',
    },
    // Filmografia
    {
        text: 'LOKI. Criador: Michael Waldron. [S.l.]: Marvel Studios, 2021–2023. Série de TV. Disney+.',
        url: 'https://www.disneyplus.com/series/loki/6pARMvILBGzK',
        isFilmo: true,
    },
    {
        text: 'OS VINGADORES. Direção: Joss Whedon. Produção: Kevin Feige. [EUA]: Marvel Studios, 2012.',
        url: 'https://www.marvel.com/movies/the-avengers',
        isFilmo: true,
    },
    {
        text: 'THOR. Direção: Kenneth Branagh. Produção: Kevin Feige. [EUA]: Marvel Studios, 2011.',
        url: 'https://www.marvel.com/movies/thor',
        isFilmo: true,
    },
    {
        text: 'THOR: MUNDO SOMBRIO. Direção: Alan Taylor. Produção: Kevin Feige. [EUA]: Marvel Studios, 2013.',
        url: 'https://www.marvel.com/movies/thor-the-dark-world',
        isFilmo: true,
    },
    {
        text: 'THOR: RAGNAROK. Direção: Taika Waititi. Produção: Kevin Feige. [EUA]: Marvel Studios, 2017.',
        url: 'https://www.marvel.com/movies/thor-ragnarok',
        isFilmo: true,
    },
    {
        text: 'VINGADORES: GUERRA INFINITA. Direção: Anthony e Joe Russo. Produção: Kevin Feige. [EUA]: Marvel Studios, 2018.',
        url: 'https://www.marvel.com/movies/avengers-infinity-war',
        isFilmo: true,
    },
];

const References = () => (
    <section id="referencias" style={{ padding: '8rem 0', background: 'var(--bg-color)', position: 'relative' }}>
        <div className="container">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
            >
                {/* Header */}
                <div style={{ marginBottom: '4rem' }}>
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Fontes Consultadas</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--color-light)', marginTop: '0.5rem', letterSpacing: '-0.02em' }}>Referências Bibliográficas</h2>
                    <div style={{ width: '50px', height: '3px', background: 'var(--color-accent)', marginTop: '1.25rem' }} />
                </div>

                {/* Bibliographic refs */}
                <div style={{ maxWidth: '860px', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '4rem' }}>
                    {refsData.filter(r => !r.isFilmo).map((ref, i) => (
                        <RefCard key={i} item={ref} />
                    ))}
                </div>

                {/* Filmografia header */}
                <div style={{ marginBottom: '2rem' }}>
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Material Audiovisual</span>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-light)', marginTop: '0.4rem' }}>Filmografia</h3>
                    <div style={{ width: '40px', height: '2px', background: 'var(--color-accent)', marginTop: '0.75rem' }} />
                </div>

                <div style={{ maxWidth: '860px', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {refsData.filter(r => r.isFilmo).map((ref, i) => (
                        <RefCard key={i} item={ref} />
                    ))}
                </div>

                {/* Instagram + Credit */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    style={{
                        marginTop: '6rem',
                        paddingTop: '4rem',
                        borderTop: '1px solid var(--glass-border)',
                        textAlign: 'center',
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                        <a href="https://www.instagram.com/alexascencioai" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', transition: 'transform 0.2s ease' }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="26" height="26" fill="#fff" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </div>
                            <div>
                                <p style={{ color: 'var(--color-light)', fontWeight: 600, fontSize: '0.9rem' }}>Alex Ascencio</p>
                                <p style={{ color: 'var(--color-accent)', fontSize: '0.8rem' }}>@alexascencioai</p>
                            </div>
                        </a>

                        <a href="https://www.instagram.com/thiagoo_bandeira" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', transition: 'transform 0.2s ease' }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="26" height="26" fill="#fff" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </div>
                            <div>
                                <p style={{ color: 'var(--color-light)', fontWeight: 600, fontSize: '0.9rem' }}>Thiago Bandeira</p>
                                <p style={{ color: 'var(--color-accent)', fontSize: '0.8rem' }}>@thiagoo_bandeira</p>
                            </div>
                        </a>
                    </div>

                    <p style={{ color: 'var(--color-gray)', fontSize: '0.82rem', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                        Rádio TV do UNASP EC · Orientadora: Andreia Moura
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.78rem', letterSpacing: '0.06em' }}>
                        © 2026 Alex Ascencio
                    </p>
                </motion.div>
            </motion.div>
        </div>
    </section>
);

const RefCard = ({ item }) => (
    <motion.a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        whileHover={{ x: 5 }}
        style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start',
            padding: '1rem 1.4rem',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            borderRadius: '12px',
            backdropFilter: 'blur(15px)',
            textDecoration: 'none',
            transition: 'all 0.22s ease',
            cursor: 'pointer',
        }}
        onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(230,194,0,0.04)';
            e.currentTarget.style.borderColor = 'rgba(230,194,0,0.22)';
        }}
        onMouseLeave={e => {
            e.currentTarget.style.background = 'var(--glass-bg)';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
        }}
    >
        <div style={{ flex: 1 }}>
            <p style={{ color: 'var(--color-gray)', fontSize: '0.85rem', lineHeight: 1.65, fontFamily: 'var(--font-body)', fontWeight: 400 }}>
                {item.text}
            </p>
        </div>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(230,194,0,0.4)" strokeWidth="1.5" style={{ flexShrink: 0, marginTop: '0.3rem' }}>
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    </motion.a>
);

export default References;
