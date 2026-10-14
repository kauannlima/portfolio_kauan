import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  const textLinkClass =
    "font-medium text-ink underline decoration-line decoration-2 underline-offset-8 transition-colors hover:text-accent hover:decoration-accent";

  return (
    <section id="home" className="flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-5xl px-4">
        <RevealOnScroll>
          <div className="mt-16 md:mt-0">
            <h1 className="mb-8 text-6xl font-bold leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-8xl">
              Olá, sou
              <br />
              Kauan Lima
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-8 text-muted">
              Sou desenvolvedor full stack, com um pé bem mais firme no backend. Trabalho com Java e Spring Boot, Go e Node.js, e faço o front em React quando o sistema precisa de uma cara.
            </p>

            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
              <a
                href="#projects"
                className="rounded-md bg-accent px-6 py-3 font-medium text-on-accent transition-opacity hover:opacity-85"
              >
                Ver projetos
              </a>

              <a href="#contact" className={textLinkClass}>
                Fale comigo
              </a>

              <a
                href="/Kauan-Lima-Curriculo-Dev.pdf"
                download
                className={textLinkClass}
              >
                Baixar currículo
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
