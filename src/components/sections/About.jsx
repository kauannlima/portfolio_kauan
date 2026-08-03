import { BriefcaseBusiness, MoveUpRight, School } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
const frontendSkills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Vue.js"
];

const backendSkills = [
  "Java",
  "Spring Boot",
  "Go",
  "Node.js",
  "APIs REST",
  "Microsserviços"
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
            Acredito em soluções que equilibram regras de negócio, integrações e interfaces objetivas, criando experiências funcionais sem excesso de complexidade visual.
          </p>

          <div
            className="
              rounded-md border border-slate-200/80 bg-white/82 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1 dark:border-white/8 dark:bg-[rgba(17,26,32,0.82)]
            "
          >
            <p className="mb-8 text-base leading-8 text-slate-700 dark:text-slate-300">
             Atuo no desenvolvimento Full Stack com foco em backend utilizando Java e Spring Boot, além da construção de aplicações frontend com React e TypeScript. Tenho experiência na criação de APIs, integrações entre sistemas e desenvolvimento de soluções escaláveis, aplicando boas práticas de engenharia de software e arquitetura.

Busco constantemente evoluir tecnicamente, explorando novos desafios e construindo aplicações eficientes, modernas e alinhadas às necessidades reais dos usuários e do negócio.
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
                    Desenvolvedor Full Stack | Mamba Digital (2025 – presente)
                  </h4>
                  <p className=" leading-7 text-sm text-slate-700 dark:text-slate-300">
Atuação no desenvolvimento e evolução de sistemas internos e CRM corporativo, utilizando Node.js, Go e React. Experiência com arquitetura de sistemas, modelagem de dados, integrações com serviços externos e soluções orientadas a eventos utilizando RabbitMQ e Kafka.                  </p>
                </div>

                <div className=" flex flex-col ">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">
Assistente de Suporte Técnico | SOC - Software de Saúde e Segurança do Trabalho (2024 – 2025)                  </h4>
                  <p className=" leading-7 text-sm text-slate-700 dark:text-slate-300">
Atuação no suporte técnico ao sistema, realizando análise de inconsistências, validação de regras de negócio e apoio ao time de desenvolvimento. 
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
