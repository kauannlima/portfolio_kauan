import { BriefcaseBusiness, MoveUpRight, School } from "lucide-react";
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
              rounded-md border border-slate-200/80 bg-white/82 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1 dark:border-white/8 dark:bg-[rgba(17,26,32,0.82)]
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
              <div className="rounded-md border border-slate-200/80 bg-slate-50/80 p-6 transition-all dark:border-white/8 dark:bg-white/4">
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
                        rounded-2xl border border-[#0f5c73]/15 bg-[#0f5c73]/8 px-3 py-1 text-sm text-[#0c4152]
                        transition hover:-translate-y-0.5 hover:border-[#0f5c73]/30 hover:bg-[#0f5c73]/12
                        dark:border-cyan-300/12 dark:bg-cyan-300/8 dark:text-cyan-100 dark:hover:border-cyan-300/25 dark:hover:bg-cyan-300/12
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-md border border-slate-200/80 bg-slate-50/80 p-6 transition-all dark:border-white/8 dark:bg-white/4">
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
                        rounded-2xl border border-[#0f5c73]/15 bg-[#0f5c73]/8 px-3 py-1 text-sm text-[#0c4152]
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

            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8">
            <div
              className=" col-span-1 md:col-span-5
               flex flex-col justify-between rounded-md border border-slate-200/80 bg-white/82 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1 dark:border-white/8 dark:bg-[rgba(17,26,32,0.82)]
              "
            >
         <div>     <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                Formação
              </p>
             <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100 flex gap-2">
                 <School
                        size={30}
                        className=""
                      /> Educação
              </h3>

              <div className=" h-full  text-slate-700 dark:text-slate-300">
                <div>
                  <p className="leading-7">
                   <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                      Curso Superior de Tecnologia (CST) em Análise e
                      Desenvolvimento de Sistemas
                    </h4>
                                     <p className=" leading-7 text-sm text-slate-700 dark:text-slate-300">
Universidade Católica de Santos (2023–2025)</p>
                  </p>
                </div>
                
               
              </div></div>
               <div>
                  <a
                    href="https://drive.google.com/drive/folders/1RhiSJDXJ7zUi8ABsQGX_QebzAxzt_fdE?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mx-auto block w-full rounded-2xl bg-[#0c4152] px-6 py-3 text-center font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#0f5c73] sm:w-auto dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200
                    "
                  >
                    Ver Certificações
                  </a>
                </div>
            </div>

            <div
              className="  col-span-1 md:col-span-7
                rounded-md border border-slate-200/80 bg-white/82 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1 dark:border-white/8 dark:bg-[rgba(17,26,32,0.82)]
              "
            >
            
             <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100 flex gap-2">
                 <BriefcaseBusiness
                        size={30}
                        className=""
                      /> Experiência Profissional
              </h3>
              <div className="space-y-6 ">
                

                <div className=" flex flex-col  ">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                    Desenvolvedor Full Stack Júnior, Mamba Digital (2025–presente)
                  </h4>
                  <p className=" leading-7 text-sm text-slate-700 dark:text-slate-300">
                    Atuação no desenvolvimento full stack com Node.js, Golang e React, participando da criação de sistemas internos e CRM. Experiência com arquitetura de sistemas, bancos de dados, integração de serviços (RabbitMQ/Kafka)
                  </p>
                </div>

                <div className=" flex flex-col ">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                    Assistente de Help Desk em SOC Software de SST (2024–2025)
                  </h4>
                  <p className=" leading-7 text-sm text-slate-700 dark:text-slate-300">
              Suporte ao cliente e análise de inconsistências no sistema, com abertura e acompanhamento de chamados. Apoio ao time de desenvolvimento, validação de regras de negócio e organização de demandas via Kanban.
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
