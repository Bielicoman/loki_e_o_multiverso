import { useState } from 'react';
import { motion } from 'framer-motion';

// ── Bibliographic references ──────────────────────────────────────────────────

const refs = [
    {
        text: 'ALZAMORA, G.; TARCIA, L. Convergência e transmídia: galáxias semânticas e narrativas emergentes em jornalismo. Brazilian Journalism Research, Brasília, v. 8, n. 1, p. 22-35, 2012.',
        url: null,
    },
    {
        text: 'BONATELLI, L. F. Do semanal ao binge-publishing no SVOD: Análise das diferenças na narrativa das séries Sombra e Ossos e Loki. 2024. Dissertação (Mestrado em Mídia e Tecnologia) – Faculdade de Arquitetura, Artes, Comunicação e Design, Universidade Estadual Paulista "Júlio de Mesquita Filho", Bauru, 2024. Disponível em: https://repositorio.unesp.br/handle/11449/255651. Acesso em: 10 jun. 2025.',
        url: 'https://repositorio.unesp.br/handle/11449/255651',
    },
    {
        text: 'CAMPBELL, J. O herói de mil faces. São Paulo: Pensamento, 2007.',
        url: null,
    },
    {
        text: 'CAMPOS, H. de. Da Transcriação: poética e semiótica da operação tradutora. Belo Horizonte: FALE/UFMG, 2011.',
        url: null,
    },
    {
        text: 'FERREIRA, A. D. D. Uma nova linha no Multiverso: A Transcriação do Universo Marvel dos Quadrinhos para o Cinema. In: JORNADAS INTERNACIONAIS DE HISTÓRIAS EM QUADRINHOS, 5., 2018, São Paulo. Anais [...]. São Paulo: ECA-USP, 2018.',
        url: null,
    },
    {
        text: 'FONTENELE, A. V. Narrativa Transmídia: Um Passeio pelo Universo Marvel Cinematográfico. 2017. Trabalho de Conclusão de Curso (Graduação em Comunicação Social) – Universidade Federal do Ceará, Fortaleza, 2017. Disponível em: https://jornadas.eca.usp.br/anais/4asjornadas/q_midia/amanda_venancio_fontenele.pdf. Acesso em: 10 jun. 2025.',
        url: 'https://jornadas.eca.usp.br/anais/4asjornadas/q_midia/amanda_venancio_fontenele.pdf',
    },
    {
        text: 'JENKINS, H. Cultura da convergência. 2. ed. São Paulo: Aleph, 2009.',
        url: null,
    },
    {
        text: 'KUKKONEN, K. Navigating infinite earths: Readers, mental models, and the multiverse of superhero comics. Storyworlds: A Journal of Narrative Studies, Lincoln, v. 2, n. 1, p. 39-58, 2010. Disponível em: https://www.researchgate.net/publication/236821867_Navigating_Infinite_Earths_Readers_Mental_Models_and_the_Multiverse_of_Superhero_Comics. Acesso em: 10 jun. 2025.',
        url: 'https://www.researchgate.net/publication/236821867_Navigating_Infinite_Earths_Readers_Mental_Models_and_the_Multiverse_of_Superhero_Comics',
    },
    {
        text: 'LONG, G. A. Transmedia storytelling: Business, Aesthetics and Production at the Jim Henson Company. 2007. Thesis (Master of Science in Comparative Media Studies) – Massachusetts Institute of Technology, Cambridge, 2007. Disponível em: https://cmsw.mit.edu/wp/wp-content/uploads/2016/10/147703402-Geoffrey-Long-Transmedia-Storytelling-Business-Aesthetics-and-Production-at-the-Jim-Henson-Company.pdf. Acesso em: 10 jun. 2025.',
        url: 'https://cmsw.mit.edu/wp/wp-content/uploads/2016/10/147703402-Geoffrey-Long-Transmedia-Storytelling-Business-Aesthetics-and-Production-at-the-Jim-Henson-Company.pdf',
    },
    {
        text: 'MASSAROLO, J. C. Narrativa transmídia: a arte de construir mundos. In: ENCONTRO ANUAL DA SOCINE, 15., 2011, Rio de Janeiro. Anais [...]. São Paulo: Socine, 2011. p. 61-75.',
        url: null,
    },
    {
        text: 'MURRAY, J. Hamlet no Holodeck: o futuro da narrativa no ciberespaço. São Paulo: Editora Unesp, 2003.',
        url: null,
    },
    {
        text: 'NOGUEIRA, E. DA MITOLOGIA, AO CINEMA: Um olhar sobre as mudanças do Figurino de Loki nos mitos e no UCM. 2024. Trabalho de Conclusão de Curso (Graduação em Cinema e Audiovisual) – Universidade Federal de Pelotas, Pelotas, 2024. Disponível em: https://acervosvirtualis.ufpel.edu.br/tccscinema/wp-content/uploads/sites/24/tainacan-items/16/11398/1796452586173086173080_Eduarda_Nogueira_5010_2023_2.pdf. Acesso em: 10 jun. 2025.',
        url: 'https://acervosvirtualis.ufpel.edu.br/tccscinema/wp-content/uploads/sites/24/tainacan-items/16/11398/1796452586173086173080_Eduarda_Nogueira_5010_2023_2.pdf',
    },
    {
        text: 'ORLANDI, E. P. Análise de Discurso: princípios e procedimentos. 12. ed. Campinas: Pontes, 2015.',
        url: null,
    },
    {
        text: 'PÊCHEUX, M. O discurso: estrutura ou acontecimento. 8. ed. Campinas: Pontes, 2015.',
        url: null,
    },
    {
        text: 'RUIZ, G. O UNIVERSO TRIDIMENSIONAL DA MARVEL. 2020. Trabalho de Conclusão de Curso (Graduação em Jornalismo) - Escola de Comunicações e Artes, Universidade de São Paulo, São Paulo, 2020. Disponível em: https://bdta.abcd.usp.br/directbitstream/f3e44f44-0c0a-4d4a-9259-1ab6b9ebb932/tc4627-guilherme-ruiz-universo.pdf. Acesso em: 10 jun. 2025.',
        url: 'https://bdta.abcd.usp.br/directbitstream/f3e44f44-0c0a-4d4a-9259-1ab6b9ebb932/tc4627-guilherme-ruiz-universo.pdf',
    },
    {
        text: 'SCOLARI, C. A. Narrativas Transmedia: Cuando todos los medios cuentan. Barcelona: Deusto, 2013.',
        url: null,
    },
];

// ── Filmography ───────────────────────────────────────────────────────────────

const filmo = [
    { text: 'LOKI. Criador: Michael Waldron. [S.l.]: Marvel Studios, 2021-2023. Série de TV.', url: 'https://www.disneyplus.com/series/loki/6pARMvILBGzK', year: '2021–23' },
    { text: 'THOR. Direção: Kenneth Branagh. Produção: Kevin Feige. [EUA]: Marvel Studios, 2011.', url: null, year: '2011' },
    { text: 'THOR: ragnarok. Direção: Taika Waititi. Produção: Kevin Feige. [EUA]: Marvel Studios, 2017.', url: null, year: '2017' },
    { text: 'OS vingadores. Direção: Joss Whedon. Produção: Kevin Feige. [EUA]: Marvel Studios, 2012.', url: null, year: '2012' },
    { text: 'VINGADORES: guerra Infinita. Direção: Anthony Russo e Joe Russo. Produção: Kevin Feige. [EUA]: Marvel Studios, 2018.', url: null, year: '2018' },
    { text: 'VINGADORES: ultimato. Direção: Anthony Russo e Joe Russo. Produção: Kevin Feige. [EUA]: Marvel Studios, 2019.', url: null, year: '2019' },
];

// ── Complementary sources ─────────────────────────────────────────────────────

const complementary = [
    {
        text: 'EI NERD. FINAL ÉPICO! LOKI É O MAIS PODEROSO DO UCM, ENTENDA O FINAL - Análise EP. 06x02 Loki. Youtube, 11 Nov. 2023. Disponível em: <https://youtu.be/w3edu5CPKec>.',
        url: 'https://youtu.be/w3edu5CPKec',
    },
    {
        text: 'TRÊS teorias sobre o multiverso. National Geographic Brasil, jan. 2023. Disponível em: https://www.nationalgeographicbrasil.com/espaco/2023/01/tres-teorias-sobre-o-multiverse. Acesso em: 10 jun. 2025.',
        url: 'https://www.nationalgeographicbrasil.com/espaco/2023/01/tres-teorias-sobre-o-multiverse',
    },
    {
        text: 'TECMUNDO. Como formatar trabalhos com normas ABNT no Google Docs? – #AssistênciaTec 081. Youtube, 21 Out. 2023. Disponível em: <https://youtu.be/25lvSMeuPo4>.',
        url: 'https://youtu.be/25lvSMeuPo4',
    },
];

// ── Copy button ───────────────────────────────────────────────────────────────

const CopyBtn = ({ text }) => {
    const [copied, setCopied] = useState(false);
    const handle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };
    return (
        <button onClick={handle} title="Copiar citação" style={{
            flexShrink: 0, alignSelf: 'flex-start',
            background: copied ? 'rgba(82,183,136,0.18)' : 'rgba(255,255,255,0.04)',
            border: `1px solid ${copied ? 'rgba(82,183,136,0.5)' : 'rgba(255,255,255,0.1)'}`,
            borderRadius: '8px', color: copied ? '#52b788' : 'rgba(255,255,255,0.4)',
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.35rem',
            fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.04em',
            padding: '0.35rem 0.7rem', transition: 'all 0.22s ease', whiteSpace: 'nowrap',
        }}>
            {copied ? (
                <><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Copiado</>
            ) : (
                <><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg>Copiar</>
            )}
        </button>
    );
};

// ── Reference row ─────────────────────────────────────────────────────────────

const RefRow = ({ item, index, accent }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.03 }}
        style={{
            display: 'flex', gap: '0.85rem', alignItems: 'flex-start',
            padding: '0.9rem 1.1rem',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '10px',
            transition: 'border-color 0.2s ease',
            minWidth: 0, // prevent flex overflow
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = `${accent}30`}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
    >
        {/* Number badge */}
        <span style={{
            flexShrink: 0, width: '24px', height: '24px', borderRadius: '6px',
            background: `${accent}18`, border: `1px solid ${accent}33`,
            color: accent, fontSize: '0.62rem', fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>{index + 1}</span>

        {/* Text + link */}
        <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{
                color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', lineHeight: 1.7,
                fontWeight: 400, wordBreak: 'break-word', overflowWrap: 'anywhere',
            }}>
                {item.text}
            </p>
            {item.url && (
                <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                        color: accent, fontSize: '0.68rem', marginTop: '0.4rem',
                        textDecoration: 'none', opacity: 0.7, transition: 'opacity 0.15s',
                        wordBreak: 'break-all', overflowWrap: 'anywhere',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
                >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    {item.url}
                </a>
            )}
        </div>

        {/* Copy */}
        <CopyBtn text={item.text} />
    </motion.div>
);

// ── Section heading ───────────────────────────────────────────────────────────

const SectionHead = ({ label, title, accent }) => (
    <div style={{ marginBottom: '2rem' }}>
        <span style={{ color: accent, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{label}</span>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#fff', marginTop: '0.4rem', letterSpacing: '-0.02em' }}>{title}</h2>
        <div style={{ width: '36px', height: '2px', background: accent, marginTop: '0.9rem' }} />
    </div>
);

// ── Main component ────────────────────────────────────────────────────────────

const References = () => (
    <section id="referencias" style={{ padding: '8rem 0', background: 'var(--bg-color)', position: 'relative' }}>
        <div className="container">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}>

                {/* References */}
                <SectionHead label="Fontes Consultadas" title="Referências Bibliográficas" accent="var(--color-accent)" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '5rem', maxWidth: '860px' }}>
                    {refs.map((r, i) => <RefRow key={i} item={r} index={i} accent="#e6c200" />)}
                </div>

                {/* Filmography */}
                <SectionHead label="Material Audiovisual" title="Filmografia" accent="#52b788" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '5rem', maxWidth: '860px' }}>
                    {filmo.map((r, i) => <RefRow key={i} item={r} index={i} accent="#52b788" />)}
                </div>

                {/* Complementary */}
                <SectionHead label="Fontes Complementares Consultadas" title="Fontes Digitais" accent="#74c69d" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '5rem', maxWidth: '860px' }}>
                    {complementary.map((r, i) => <RefRow key={i} item={r} index={i} accent="#74c69d" />)}
                </div>

                {/* Credits */}
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
