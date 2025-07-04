import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 mb-6 bg-clip-text text-transparent leading-right ">
            Olá, Sou Kauan Lima
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Sou desenvolvedor full stack, formado em Análise e Desenvolvimento
            de Sistemas. Ao longo da minha jornada, venho me dedicando ao
            desenvolvimento de soluções práticas que me permitem evoluir
            tecnicamente e construir um portfólio sólido.
          </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
  <a
    href="#projects"
    className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] text-center w-full md:w-auto"
  >
    Ver projetos
  </a>

  <a
    href="#contact"
    className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/50 text-center w-full md:w-auto"
  >
    Fale comigo
  </a>

  <a
    href="/Kauan-Lima-Curriculo-Dev-BackEnd.pdf"
    download
    className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/50 text-center w-full md:w-auto"
  >
    Baixar Currículo
  </a>
</div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
