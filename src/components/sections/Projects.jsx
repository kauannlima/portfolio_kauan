import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Code, ExternalLink } from "lucide-react";

//Imagens
import cardapioImg from "../../assets/projects/Cardapio-Dev.png";
import encurtaImg from "../../assets/projects/Encurta-Dev.png";
import ansiedadeImg from "../../assets/projects/AnsiedadeDev.png";
import reactgram from "../../assets/projects/ReactGram.png";

export const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const techClasses =
    "rounded-md border border-line px-2.5 py-1 text-sm text-muted";

  const projectCardClass = "rounded-md border border-line p-6";

  const linkClass =
    "flex items-center gap-1 font-medium text-accent underline-offset-4 hover:underline";

  return (
    <section
      id="projects"
      className="py-24"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
         
          <h2 className="mb-10 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Projetos em destaque
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* REACTGRAM */}
            <div className={projectCardClass}>
              <button
                type="button"
                onClick={() => openModal(reactgram)}
                aria-label="Ampliar imagem de Reactgram"
                className="mb-5 block w-full cursor-zoom-in"
              >
                <img
                  src={reactgram}
                  alt="Reactgram"
                  className="h-48 w-full rounded-md border border-line object-cover"
                />
              </button>
              
              <h3 className="mb-2 text-xl font-bold text-ink">
                Reactgram
              </h3>
              <p className="mb-4 leading-7 text-muted">
                Aplicação de rede social feita com React e Node.js, permitindo
                cadastro de usuários, upload de fotos, curtidas, comentários e
                feed de postagens.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["React", "Node.js", "Express", "MongoDB", "JWT"].map(
                  (tech, key) => (
                    <span key={key} className={techClasses}>
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-5">
                <a
                  href="https://github.com/kauannlima/reactgram-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <Code size={16} /> Back-end
                </a>
                <a
                  href="https://github.com/kauannlima/reactgram-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <Code size={16} /> Front-end
                </a>
              </div>
            </div>

        {/* ANSIEDADE.DEV */}
<div className={projectCardClass}>
  <button
    type="button"
    onClick={() => openModal(ansiedadeImg)}
    aria-label="Ampliar imagem de ansiedade.dev"
    className="mb-5 block w-full cursor-zoom-in"
  >
    <img
      src={ansiedadeImg}
      alt="ansiedade.dev"
      className="h-48 w-full rounded-md border border-line object-cover"
    />
  </button>

  <h3 className="mb-2 text-xl font-bold text-ink">
    ansiedade.dev
  </h3>
  <p className="mb-4 leading-7 text-muted">
    Timer online com experiências visuais que acompanham a contagem:
    foguete, planta, tijolos e fotos. Funciona offline como PWA, sem
    backend e sem cadastro, com tudo salvo no próprio navegador.
  </p>
  <div className="flex flex-wrap gap-2 mt-2">
    {[
      "Astro",
      "React",
      "TypeScript",
      "CSS",
      "PWA",
      "Vitest",
    ].map((tech, key) => (
      <span key={key} className={techClasses}>
        {tech}
      </span>
    ))}
  </div>
  <div className="mt-5 flex flex-wrap items-center gap-5">
    <a
      href="https://ansiedade.dev"
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      <ExternalLink size={16} /> Acessar site
    </a>
  </div>
</div>

            {/* CARDÁPIO DEV */}
            <div className={projectCardClass}>
              <button
                type="button"
                onClick={() => openModal(cardapioImg)}
                aria-label="Ampliar imagem de Cardápio Dev"
                className="mb-5 block w-full cursor-zoom-in"
              >
                <img
                  src={cardapioImg}
                  alt="Cardápio Dev"
                  className="h-48 w-full rounded-md border border-line object-cover"
                />
              </button>
             
              <h3 className="mb-2 text-xl font-bold text-ink">
                Cardápio Dev
              </h3>
              <p className="mb-4 leading-7 text-muted">
                Sistema de cardápio digital com funcionalidades para visualizar,
                cadastrar, editar e remover itens como pratos e bebidas,
                integrado a um backend.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "React",
                  "Java",
                  "Spring Boot",
                  "PostgreSQL",
                  "Spring Security",
                ].map((tech, key) => (
                  <span key={key} className={techClasses}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-5">
                <a
                  href="https://github.com/kauannlima/backend-cardapio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <Code size={16} /> Back-end
                </a>
                <a
                  href="https://github.com/kauannlima/frontend-cardapio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <Code size={16} /> Front-end
                </a>
              </div>
            </div>

            {/* ENCURTADEV */}
            <div className={projectCardClass}>
              <button
                type="button"
                onClick={() => openModal(encurtaImg)}
                aria-label="Ampliar imagem de Encurta Dev"
                className="mb-5 block w-full cursor-zoom-in"
              >
                <img
                  src={encurtaImg}
                  alt="Encurta Dev"
                  className="h-48 w-full rounded-md border border-line object-cover"
                />
              </button>
             
              <h3 className="mb-2 text-xl font-bold text-ink">
                EncurtaDev
              </h3>
              <p className="mb-4 leading-7 text-muted">
                EncurtaDev é uma aplicação web para encurtar URLs com geração
                automática de QR Codes, interface simples e integração com o
                back-end.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "React",
                  "Java",
                  "TypeScript",
                  "Spring Boot",
                  "PostgreSQL",
                ].map((tech, key) => (
                  <span key={key} className={techClasses}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-5">
                <a
                  href="https://github.com/kauannlima/encurta-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <Code size={16} /> Back-end
                </a>
                <a
                  href="https://github.com/kauannlima/encurta-dev-front"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <Code size={16} /> Front-end
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {selectedImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-zoom-out"
        >
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-[90vh] rounded-md border-4 border-white"
          />
        </div>
      )}
    </section>
  );
};
