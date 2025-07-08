import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-white dark:bg-[#0a0a0a]"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 mt-16 md:mt-0">
          <h1
            className="
    text-5xl md:text-7xl font-bold 
    bg-gradient-to-r 
    from-blue-900 to-blue-950 
    dark:from-blue-600 dark:to-cyan-500 
    mb-6 bg-clip-text text-transparent leading-tight
  "
          >
            Olá, Sou Kauan Lima
          </h1>

          <p className="text-gray-900 dark:text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            Sou desenvolvedor full stack, formado em Análise e Desenvolvimento
            de Sistemas. Ao longo da minha jornada, venho me dedicando ao
            desenvolvimento de soluções práticas que me permitem evoluir
            tecnicamente e construir um portfólio sólido.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="#projects"
              className="
                bg-blue-900 text-white 
                dark:bg-blue-600 dark:text-white
                py-3 px-6 rounded font-medium transition relative overflow-hidden
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(21,39,121,0.6)]
                dark:hover:shadow-[0_0_15px_rgba(37,99,235,0.6)]
                text-center w-full md:w-auto
              "
            >
              Ver projetos
            </a>

            <a
              href="#contact"
              className="
                border border-blue-900/60 text-blue-900
                dark:border-blue-600/60 dark:text-blue-600
                py-3 px-6 rounded font-medium transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(21,39,121,0.3)]
                dark:hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]
                hover:bg-blue-900/20 dark:hover:bg-blue-600/20
                text-center w-full md:w-auto
              "
            >
              Fale comigo
            </a>

            <a
              href="/Kauan-Lima-Curriculo-Dev-BackEnd.pdf"
              download
              className="
                border border-blue-900/60 text-blue-900
                dark:border-blue-600/60 dark:text-blue-600
                py-3 px-6 rounded font-medium transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(21,39,121,0.3)]
                dark:hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]
                hover:bg-blue-900/20 dark:hover:bg-blue-600/20
                text-center w-full md:w-auto
              "
            >
              Baixar Currículo
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
