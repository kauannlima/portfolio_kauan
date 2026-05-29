import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "TypeScript",
    "JavaScript",
  ];

  const backendSkills = [
    "Java",
    "Spring Boot",
    "Apache Struts 2",
    "Node.js",
    "PostgreSQL",
    "MySQL",
  ];

  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center bg-transparent py-24"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
            Perfil profissional
          </p>
          <h2
            className="
              mb-4 text-center text-3xl font-bold
              bg-gradient-to-r from-[#0c4152] via-[#0f5c73] to-[#5a8ea0]
              dark:from-cyan-200 dark:via-cyan-300 dark:to-teal-300
              bg-clip-text text-transparent text-center
            "
          >
            Sobre Mim
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-center text-slate-600 dark:text-slate-300">
            Trabalho melhor quando consigo unir regra de negocio, integracao e
            uma interface objetiva, sem excesso visual.
          </p>

          <div
            className="
              rounded-[2rem] border border-slate-200/80 bg-white/82 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1 dark:border-white/8 dark:bg-[rgba(17,26,32,0.82)]
            "
          >
            <p className="mb-8 text-base leading-8 text-slate-700 dark:text-slate-300">
              Tenho foco em desenvolvimento back-end com Java e Spring Boot,
              assim como front-end com React. Estou constantemente estudando e
              me aprimorando para me tornar um desenvolvedor fullstack completo.
              Aplicando esses conhecimentos em projetos práticos e desafiadores,
              construo um portfólio sólido que demonstra minha capacidade de
              criar aplicações completas, eficientes e modernas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-6 transition-all dark:border-white/8 dark:bg-white/4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                  Interface
                </p>
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                  Front-end
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="
                        rounded-full border border-[#0f5c73]/15 bg-[#0f5c73]/8 px-3 py-1 text-sm text-[#0c4152]
                        transition hover:-translate-y-0.5 hover:border-[#0f5c73]/30 hover:bg-[#0f5c73]/12
                        dark:border-cyan-300/12 dark:bg-cyan-300/8 dark:text-cyan-100 dark:hover:border-cyan-300/25 dark:hover:bg-cyan-300/12
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-6 transition-all dark:border-white/8 dark:bg-white/4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                  Estrutura e dados
                </p>
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                  Back-end
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="
                        rounded-full border border-[#0f5c73]/15 bg-[#0f5c73]/8 px-3 py-1 text-sm text-[#0c4152]
                        transition hover:-translate-y-0.5 hover:border-[#0f5c73]/30 hover:bg-[#0f5c73]/12
                        dark:border-cyan-300/12 dark:bg-cyan-300/8 dark:text-cyan-100 dark:hover:border-cyan-300/25 dark:hover:bg-cyan-300/12
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-slate-600 dark:text-slate-400">
              Essas stacks concentram os projetos em que venho evoluindo com
              mais consistencia nos ultimos ciclos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div
              className="
                rounded-[2rem] border border-slate-200/80 bg-white/82 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1 dark:border-white/8 dark:bg-[rgba(17,26,32,0.82)]
              "
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                Formacao
              </p>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                🏫 Educação
              </h3>

              <div className="flex h-full flex-col pb-2 text-slate-700 dark:text-slate-300">
                <div>
                  <p className="leading-7">
                    <strong>
                      Curso Superior de Tecnologia (CST) em Análise e
                      Desenvolvimento de Sistemas
                    </strong>{" "}
                    – Universidade Católica de Santos (2023–2025)
                  </p>
                </div>
                <div className="flex-grow"></div>{" "}
                <div>
                  <a
                    href="https://drive.google.com/drive/folders/1RhiSJDXJ7zUi8ABsQGX_QebzAxzt_fdE?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mx-auto mt-8 block w-full rounded-full bg-[#0c4152] px-6 py-3 text-center font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#0f5c73] sm:w-auto dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200
                    "
                  >
                    Ver Certificações
                  </a>
                </div>
              </div>
            </div>

            <div
              className="
                rounded-[2rem] border border-slate-200/80 bg-white/82 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1 dark:border-white/8 dark:bg-[rgba(17,26,32,0.82)]
              "
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                Vivencia profissional
              </p>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                💼 Experiências
              </h3>
              <div className="space-y-5 text-slate-700 dark:text-slate-300">
                <div className="rounded-[1.25rem] border border-slate-200/70 bg-slate-50/80 p-4 dark:border-white/8 dark:bg-white/4">
                  <h4 className="font-semibold">
                    Assistente de Help Desk em SOC Software de SST (2024–2025)
                  </h4>
                  <p className="mt-2 leading-7">
                    Prestei suporte a clientes, esclarecendo dúvidas, abrindo
                    chamados e auxiliando na resolução de erros e validações de
                    regras de negócio.
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-slate-200/70 bg-slate-50/80 p-4 dark:border-white/8 dark:bg-white/4">
                  <h4 className="font-semibold">
                    Auxiliar de Navegação em Unimar Agenciamentos Marítimos
                    (2022–2024)
                  </h4>
                  <p className="mt-2 leading-7">
                    Controlei posições de navios, gerenciei relatórios via EDI e
                    cuidei de transbordo, faturas e atualização de contêineres.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
