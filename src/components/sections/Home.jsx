import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-transparent"
    >
      <RevealOnScroll>
        <div className="relative z-10 mt-16 px-4 text-center md:mt-0">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
            Java, Spring Boot, React
          </p>
          <h1
            className="
    mb-6 text-5xl font-bold leading-tight md:text-7xl
    bg-gradient-to-r 
    from-[#0c4152] via-[#0f5c73] to-[#5a8ea0]
    dark:from-cyan-200 dark:via-cyan-300 dark:to-teal-300
    bg-clip-text text-transparent
  "
          >
            Desenvolvo produtos web com base forte em back-end e interface limpa.
          </h1>

          <p className="mx-auto mb-5 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            Sou Kauan Lima, desenvolvedor full stack formado em Análise e
            Desenvolvimento de Sistemas. Meu foco está em construir aplicações
            práticas, com estrutura sólida no back-end e uma camada visual que
            sirva ao produto, não ao efeito.
          </p>

          <p className="mx-auto mb-10 max-w-xl text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Portfólio centrado em APIs, fluxo real de uso e evolução constante.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="#projects"
              className="
                rounded-full bg-[#0c4152] px-6 py-3 font-medium text-white
                transition hover:-translate-y-0.5 hover:bg-[#0f5c73]
                dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200
                text-center w-full md:w-auto
              "
            >
              Ver projetos
            </a>

            <a
              href="#contact"
              className="
                rounded-full border border-[#0f5c73]/20 bg-white/60 px-6 py-3 font-medium text-[#0c4152]
                transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0f5c73]/35 hover:bg-white
                dark:border-cyan-300/20 dark:bg-white/4 dark:text-cyan-200 dark:hover:bg-white/8
                text-center w-full md:w-auto
              "
            >
              Fale comigo
            </a>

            <a
              href="/Kauan-Lima-Curriculo-Dev.pdf"
              download
              className="
                rounded-full border border-slate-300/90 bg-transparent px-6 py-3 font-medium text-slate-700
                transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white/70
                dark:border-white/12 dark:text-slate-200 dark:hover:bg-white/6
                text-center w-full md:w-auto
              "
            >
              Baixar Currículo
            </a>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 text-left sm:grid-cols-3">
            {[
              "Projetos completos com back-end autoral",
              "Stack principal em Java, Spring Boot e React",
              "Atenção a clareza, fluxo e manutenção",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white/70 px-4 py-4 text-sm leading-6 text-slate-600 shadow-[0_16px_40px_rgba(15,23,42,0.06)] dark:border-white/8 dark:bg-white/4 dark:text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
