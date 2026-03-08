import { motion } from 'framer-motion';

const refsData = [
    {
        text: 'ALZAMORA, G.; TARCIA, L. Convergência e transmídia: galáxias semânticas e narrativas emergentes em jornalismo.',
        source: 'Brazilian Journalism Research, Brasília, v. 8, n. 1, p. 22-35, 2012.',
        url: 'https://bjr.sbpjor.org.br/',
        icon: '📰',
    },
    {
        text: 'BONATELLI, L. F. Do semanal ao binge-publishing no SVOD: Análise das diferenças na narrativa das séries Sombra e Ossos e Loki.',
        source: '2024. Dissertação (Mestrado) – UNESP, Bauru, 2024.',
        url: 'https://repositorio.unesp.br/',
        icon: '📝',
    },
    {
        text: 'CAMPBELL, J. O herói de mil faces.',
        source: 'São Paulo: Pensamento, 2007.',
        url: 'https://www.amazon.com.br/her%C3%B3i-mil-faces-Joseph-Campbell/dp/8531512085',
        icon: '📚',
    },
    {
        text: 'CAMPOS, H. de. Da Transcriação: poética e semiótica da operação tradutora.',
        source: 'Belo Horizonte: FALE/UFMG, 2011.',
        url: 'https://www.letras.ufmg.br/',
        icon: '📚',
    },
    {
        text: 'JENKINS, H. Cultura da convergência.',
        source: '2. ed. São Paulo: Aleph, 2009.',
        url: 'https://www.amazon.com.br/Cultura-Converg%C3%AAncia-Henry-Jenkins/dp/8576572273',
        icon: '📺',
    },
    {
        text: 'KUKKONEN, K. Navigating infinite earths: Readers, mental models, and the multiverse of superhero comics.',
        source: 'Storyworlds: A Journal of Narrative Studies, Lincoln, v. 2, n. 1, p. 39-58, 2010.',
        url: 'https://www.jstor.org/',
        icon: '🌌',
    },
    {
        text: 'MASSAROLO, J. C. Narrativa transmídia: a arte de construir mundos.',
        source: 'In: ENCONTRO ANUAL DA SOCINE, 15., 2011, Rio de Janeiro. São Paulo: Socine, 2011. p. 61-75.',
        url: 'https://www.socine.org.br/',
        icon: '🎬',
    },
    {
        text: 'ORLANDI, E. P. Análise de Discurso: princípios e procedimentos.',
        source: '12. ed. Campinas: Pontes, 2015.',
        url: 'https://www.ponteseditores.com.br/',
        icon: '📖',
    },
    {
        text: 'PÊCHEUX, M. O discurso: estrutura ou acontecimento.',
        source: '8. ed. Campinas: Pontes, 2015.',
        url: 'https://www.ponteseditores.com.br/',
        icon: '🗣️',
    },
    {
        text: 'RUIZ, G. O UNIVERSO TRIDIMENSIONAL DA MARVEL.',
        source: '2020. TCC (Jornalismo) - ECA, USP, São Paulo, 2020.',
        url: 'https://biblioteca.fflch.usp.br/',
        icon: '🦸',
    },
    {
        text: 'SCOLARI, C. A. Narrativas Transmedia: Cuando todos los medios cuentan.',
        source: 'Barcelona: Deusto, 2013.',
        url: 'https://www.amazon.es/Narrativas-Transmedia-medios-cuentan-Posici\u00f3n/dp/8423413594',
        icon: '🌐',
    },
    {
        text: 'LOKI. Criador: Michael Waldron.',
        source: '[S.l.]: Marvel Studios, 2021-2023. Série de TV.',
        url: 'https://www.disneyplus.com/series/loki/6pARMvILBGzK',
        icon: '📡',
    },
    {
        text: 'THOR. Direção: Kenneth Branagh. Produção: Kevin Feige.',
        source: '[EUA]: Marvel Studios, 2011.',
        url: 'https://www.marvel.com/movies/thor',
        icon: '⚡',
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
                <div style={{ marginBottom: '4rem' }}>
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Fontes Consultadas</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--color-light)', marginTop: '0.5rem', letterSpacing: '-0.02em' }}>Referências Bibliográficas</h2>
                    <div style={{ width: '50px', height: '3px', background: 'var(--color-accent)', marginTop: '1.25rem' }} />
                </div>

                <div style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {refsData.map((ref, i) => (
                        <motion.a
                            key={i}
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.04 }}
                            whileHover={{ x: 6 }}
                            style={{
                                display: 'flex',
                                gap: '1rem',
                                alignItems: 'flex-start',
                                padding: '1.25rem 1.5rem',
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '14px',
                                backdropFilter: 'blur(15px)',
                                textDecoration: 'none',
                                transition: 'all 0.25s ease',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(230,194,0,0.05)';
                                e.currentTarget.style.borderColor = 'rgba(230,194,0,0.25)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(230,194,0,0.1)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'var(--glass-bg)';
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <span style={{ fontSize: '1.3rem', flexShrink: 0, marginTop: '0.1rem' }}>{ref.icon}</span>
                            <div style={{ flex: 1 }}>
                                <p style={{ color: 'var(--color-light)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '0.25rem', fontWeight: 400 }}>
                                    {ref.text}
                                </p>
                                <p style={{ color: 'var(--color-gray)', fontSize: '0.8rem', fontStyle: 'italic' }}>
                                    {ref.source}
                                </p>
                            </div>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(230,194,0,0.5)" strokeWidth="1.5" style={{ flexShrink: 0, marginTop: '0.25rem' }}>
                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

export default References;
