import { useState } from 'react';
import { motion } from 'framer-motion';

// ── Data ──────────────────────────────────────────────────────────────────────

const refs = [
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
        text: 'RUIZ, G. O UNIVERSO TRIDIMENSIONAL DA MARVEL. 2020. TCC (Jornalismo) – ECA, USP, São Paulo, 2020.',
        url: 'https://www.teses.usp.br/',
    },
    {
        text: 'SCOLARI, C. A. Narrativas Transmedia: Cuando todos los medios cuentan. Barcelona: Deusto, 2013.',
        url: 'https://www.deusto.es/es/inicio/publicaciones/ficha/isbn/9788423413591',
    },
];

const filmo = [
    {
        text: 'THOR. Direção: Kenneth Branagh. Produção: Kevin Feige. [EUA]: Marvel Studios, 2011. Disponível em: https://www.marvel.com/movies/thor',
        url: 'https://www.marvel.com/movies/thor',
        year: '2011',
    },
    {
        text: 'OS VINGADORES. Direção: Joss Whedon. Produção: Kevin Feige. [EUA]: Marvel Studios, 2012. Disponível em: https://www.marvel.com/movies/the-avengers',
        url: 'https://www.marvel.com/movies/the-avengers',
        year: '2012',
    },
    {
        text: 'THOR: MUNDO SOMBRIO. Direção: Alan Taylor. Produção: Kevin Feige. [EUA]: Marvel Studios, 2013. Disponível em: https://www.marvel.com/movies/thor-the-dark-world',
        url: 'https://www.marvel.com/movies/thor-the-dark-world',
        year: '2013',
    },
    {
        text: 'THOR: RAGNAROK. Direção: Taika Waititi. Produção: Kevin Feige. [EUA]: Marvel Studios, 2017. Disponível em: https://www.marvel.com/movies/thor-ragnarok',
        url: 'https://www.marvel.com/movies/thor-ragnarok',
        year: '2017',
    },
    {
        text: 'VINGADORES: GUERRA INFINITA. Direção: Anthony e Joe Russo. Produção: Kevin Feige. [EUA]: Marvel Studios, 2018. Disponível em: https://www.marvel.com/movies/avengers-infinity-war',
        url: 'https://www.marvel.com/movies/avengers-infinity-war',
        year: '2018',
    },
    {
        text: 'VINGADORES: ULTIMATO. Direção: Anthony e Joe Russo. Produção: Kevin Feige. [EUA]: Marvel Studios, 2019. Disponível em: https://www.marvel.com/movies/avengers-endgame',
        url: 'https://www.marvel.com/movies/avengers-endgame',
        year: '2019',
    },
    {
        text: 'LOKI — TEMPORADA 1. Criador: Michael Waldron. [EUA]: Marvel Studios / Disney+, 2021. Série de TV. Disponível em: https://www.disneyplus.com/series/loki/6pARMvILBGzK',
        url: 'https://www.disneyplus.com/series/loki/6pARMvILBGzK',
        year: '2021',
    },
    {
        text: 'HOMEM-FORMIGA E A VESPA: QUANTUMANIA. Direção: Peyton Reed. Produção: Kevin Feige. [EUA]: Marvel Studios, 2023. Disponível em: https://www.marvel.com/movies/ant-man-and-the-wasp-quantumania',
        url: 'https://www.marvel.com/movies/ant-man-and-the-wasp-quantumania',
        year: '2023',
    },
    {
        text: 'LOKI — TEMPORADA 2. Criador: Eric Martin. [EUA]: Marvel Studios / Disney+, 2023. Série de TV. Disponível em: https://www.disneyplus.com/series/loki/6pARMvILBGzK',
        url: 'https://www.disneyplus.com/series/loki/6pARMvILBGzK',
        year: '2023',
    },
];

// ── Copy button ───────────────────────────────────────────────────────────────

const CopyBtn = ({ text }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };
    return (
        <button
            onClick={handleCopy}
            title="Copiar citação"
            style={{
                flexShrink: 0,
                background: copied ? 'rgba(82,183,136,0.18)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${copied ? 'rgba(82,183,136,0.5)' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '8px',
                color: copied ? '#52b788' : 'rgba(255,255,255,0.4)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                padding: '0.35rem 0.7rem',
                transition: 'all 0.22s ease',
                whiteSpace: 'nowrap',
                alignSelf: 'flex-start',
                marginTop: '0.1rem',
            }}
        >
            {copied ? (
                <>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Copiado
                </>
            ) : (
                <>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                    </svg>
                    Copiar
                </>
            )}
        </button>
    );
};

// ── Single reference row ──────────────────────────────────────────────────────

const RefRow = ({ item, index, accent }) => (
    <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.04 }}
        style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start',
            padding: '0.95rem 1.2rem',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '10px',
            transition: 'border-color 0.2s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = `${accent}30`}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
    >
        {/* Number */}
        <span style={{
            flexShrink: 0,
            width: '26px',
            height: '26px',
            borderRadius: '6px',
            background: `${accent}18`,
            border: `1px solid ${accent}33`,
            color: accent,
            fontSize: '0.65rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '0.05rem',
        }}>{index + 1}</span>

        {/* Text */}
        <div style={{ flex: 1 }}>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', lineHeight: 1.7, fontWeight: 400 }}>
                {item.text}
            </p>
            <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    color: accent,
                    fontSize: '0.7rem',
                    marginTop: '0.45rem',
                    textDecoration: 'none',
                    opacity: 0.75,
                    transition: 'opacity 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.75'}
            >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                {item.url.replace(/^https?:\/\//, '').split('/')[0]}
            </a>
            {item.year && (
                <span style={{ marginLeft: '0.75rem', color: 'rgba(255,255,255,0.2)', fontSize: '0.68rem' }}>
                    {item.year}
                </span>
            )}
        </div>

        {/* Copy button */}
        <CopyBtn text={item.text} />
    </motion.div>
);

// ── Section header helper ─────────────────────────────────────────────────────

const SectionHead = ({ label, title, accent }) => (
    <div style={{ marginBottom: '2rem' }}>
        <span style={{ color: accent, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{label}</span>
        <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#fff', marginTop: '0.4rem', letterSpacing: '-0.02em' }}>{title}</h2>
        <div style={{ width: '40px', height: '2px', background: accent, marginTop: '1rem' }} />
    </div>
);

// ── Main component ────────────────────────────────────────────────────────────

const References = () => (
    <section id="referencias" style={{ padding: '8rem 0', background: 'var(--bg-color)', position: 'relative' }}>
        <div className="container">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}>

                {/* ── Bibliographic references ── */}
                <SectionHead label="Fontes Consultadas" title="Referências Bibliográficas" accent="var(--color-accent)" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '5rem', maxWidth: '900px' }}>
                    {refs.map((r, i) => <RefRow key={i} item={r} index={i} accent="#e6c200" />)}
                </div>

                {/* ── Filmography ── */}
                <SectionHead label="Material Audiovisual" title="Filmografia" accent="#52b788" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '5rem', maxWidth: '900px' }}>
                    {filmo.map((r, i) => <RefRow key={i} item={r} index={i} accent="#52b788" />)}
                </div>

                {/* ── Credits ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                    style={{ paddingTop: '3.5rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                        {[
                            { href: 'https://www.instagram.com/alexascencioai', img: '/loki-images/alex-profile.jpg', name: 'Alex Ascencio', handle: '@alexascencioai' },
                            { href: 'https://www.instagram.com/thiagoo_bandeira', img: '/loki-images/thiago-profile.jpg', name: 'Thiago Bandeira', handle: '@thiagoo_bandeira' },
                        ].map(({ href, img, name, handle }) => (
                            <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', transition: 'transform 0.2s ease' }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <img src={img} alt={name} style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(230,194,0,0.4)' }} />
                                <div style={{ textAlign: 'center' }}>
                                    <p style={{ color: 'var(--color-light)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.1rem' }}>{name}</p>
                                    <p style={{ color: 'var(--color-accent)', fontSize: '0.72rem' }}>{handle}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                    <p style={{ color: 'var(--color-gray)', fontSize: '0.8rem', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
                        Rádio TV do UNASP EC · Orientadora: Andreia Moura
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem', letterSpacing: '0.06em' }}>© 2026 Alex Ascencio</p>
                </motion.div>
            </motion.div>
        </div>
    </section>
);

export default References;
