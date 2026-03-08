import { motion } from 'framer-motion';

const refs = [
    "ALZAMORA, G.; TARCIA, L. Convergência e transmídia: galáxias semânticas e narrativas emergentes em jornalismo. Brazilian Journalism Research, Brasília, v. 8, n. 1, p. 22-35, 2012.",
    "BONATELLI, L. F. Do semanal ao binge-publishing no SVOD: Análise das diferenças na narrativa das séries Sombra e Ossos e Loki. 2024. Dissertação (Mestrado) – UNESP, Bauru, 2024.",
    "CAMPBELL, J. O herói de mil faces. São Paulo: Pensamento, 2007.",
    "CAMPOS, H. de. Da Transcriação: poética e semiótica da operação tradutora. Belo Horizonte: FALE/UFMG, 2011.",
    "JENKINS, H. Cultura da convergência. 2. ed. São Paulo: Aleph, 2009.",
    "KUKKONEN, K. Navigating infinite earths: Readers, mental models, and the multiverse of superhero comics. Storyworlds: A Journal of Narrative Studies, Lincoln, v. 2, n. 1, p. 39-58, 2010.",
    "MASSAROLO, J. C. Narrativa transmídia: a arte de construir mundos. In: ENCONTRO ANUAL DA SOCINE, 15., 2011, Rio de Janeiro. Anais [...]. São Paulo: Socine, 2011. p. 61-75.",
    "ORLANDI, E. P. Análise de Discurso: princípios e procedimentos. 12. ed. Campinas: Pontes, 2015.",
    "PÊCHEUX, M. O discurso: estrutura ou acontecimento. 8. ed. Campinas: Pontes, 2015.",
    "RUIZ, G. O UNIVERSO TRIDIMENSIONAL DA MARVEL. 2020. TCC (Jornalismo) - ECA, USP, São Paulo, 2020.",
    "SCOLARI, C. A. Narrativas Transmedia: Cuando todos los medios cuentan. Barcelona: Deusto, 2013.",
    "LOKI. Criador: Michael Waldron. [S.l.]: Marvel Studios, 2021-2023. Série de TV.",
    "THOR. Direção: Kenneth Branagh. Produção: Kevin Feige. [EUA]: Marvel Studios, 2011."
];

const References = () => {
    return (
        <section id="referencias" style={{
            padding: '6rem 0',
            background: 'var(--bg-color)',
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
                        <h2 style={{ fontSize: '2.5rem', letterSpacing: '0.1em' }}>REFERÊNCIAS</h2>
                        <div style={{ width: '60px', height: '4px', background: 'var(--color-accent)', margin: '0 auto' }}></div>
                    </div>

                    <div style={{
                        maxWidth: '1000px',
                        margin: '0 auto',
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                        color: 'var(--color-gray)'
                    }}>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            {refs.map((ref, idx) => (
                                <li key={idx} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
                                    {ref}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default References;
