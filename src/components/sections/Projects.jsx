import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Code, ExternalLink } from "lucide-react";

//Imagens
import cardapioImg from "../../assets/projects/Cardapio-Dev.png";
import encurtaImg from "../../assets/projects/Encurta-Dev.png";
import miniblog from "../../assets/projects/Miniblog.png";
import reactgram from "../../assets/projects/ReactGram.png";

export const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const techClasses = `
    rounded-2xl border border-[#0f5c73]/15 bg-[#0f5c73]/8 px-3 py-1 text-sm text-[#0c4152]
    transition hover:-translate-y-0.5 hover:border-[#0f5c73]/28 hover:bg-[#0f5c73]/12
    dark:border-cyan-300/12 dark:bg-cyan-300/8 dark:text-cyan-100 dark:hover:border-cyan-300/25 dark:hover:bg-cyan-300/12
  `;

  const projectCardClass =
    "rounded-md border border-slate-200/80 bg-white/82 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-[#0f5c73]/20 dark:border-white/8 dark:bg-[rgba(17,26,32,0.82)] dark:hover:border-cyan-300/18";

  const linkClass =
    "flex items-center gap-1 text-[#0c4152] transition-colors hover:text-[#0f5c73] dark:text-cyan-200 dark:hover:text-cyan-100";

  return (
    <section
      id="projects"
      className="flex min-h-screen items-center justify-center bg-transparent py-24"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
         
          <h2 className="mb-4 bg-gradient-to-r from-[#0c4152] via-[#0f5c73] to-[#5a8ea0] bg-clip-text text-center text-3xl font-bold text-transparent dark:from-cyan-200 dark:via-cyan-300 dark:to-teal-300">
            Projetos em destaque
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-center text-slate-600 dark:text-slate-300">
            Projetos que representam melhor meu momento atual: APIs, produtos
            completos e aplicacoes com preocupacao real com fluxo e uso.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* REACTGRAM */}
            <div className={projectCardClass}>
              <img
                src={reactgram}
                alt="Reactgram"
                className="mb-4 h-48 w-full cursor-pointer rounded-md object-cover"
                onClick={() => openModal(reactgram)}
              />
              
              <p className="mb-4 text-sm italic text-slate-500 dark:text-slate-400">
                Clique na imagem para ampliar
              </p>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                Reactgram
              </h3>
              <p className="mb-4 leading-7 text-slate-700 dark:text-slate-300">
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
              <div className="flex flex-wrap gap-4 items-center my-4">
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

            {/* MINIBLOG */}
            <div className={projectCardClass}>
              <img
                src={miniblog}
                alt="MiniBlog"
                className="mb-4 h-48 w-full cursor-pointer rounded-md object-cover"
                onClick={() => openModal(miniblog)}
              />
             
              <p className="mb-4 text-sm italic text-slate-500 dark:text-slate-400">
                Clique na imagem para ampliar
              </p>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                MiniBlog
              </h3>
              <p className="mb-4 leading-7 text-slate-700 dark:text-slate-300">
                Blog minimalista feito com React e Firebase, com foco em CRUD de
                posts, autenticação de usuários e uma interface simples,
                responsiva e funcional.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "React",
                  "Firebase",
                  "Tailwind CSS",
                  "Auth Firebase",
                ].map((tech, key) => (
                  <span key={key} className={techClasses}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 items-center my-4">
                <a
                  href="https://github.com/kauannlima/miniblog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <Code size={16} /> GitHub
                </a>
                <a
                  href="https://miniblog-ivory.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <ExternalLink size={16} /> Ver online
                </a>
              </div>
            </div>

            {/* CARDÁPIO DEV */}
            <div className={projectCardClass}>
              <img
                src={cardapioImg}
                alt="Cardápio Dev"
                className="mb-4 h-48 w-full cursor-pointer rounded-md object-cover"
                onClick={() => openModal(cardapioImg)}
              />
             
              <p className="mb-4 text-sm italic text-slate-500 dark:text-slate-400">
                Clique na imagem para ampliar
              </p>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                Cardápio Dev
              </h3>
              <p className="mb-4 leading-7 text-slate-700 dark:text-slate-300">
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
              <div className="flex flex-wrap gap-4 items-center my-4">
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
              <img
                src={encurtaImg}
                alt="Encurta Dev"
                className="mb-4 h-48 w-full cursor-pointer rounded-md object-cover"
                onClick={() => openModal(encurtaImg)}
              />
             
              <p className="mb-4 text-sm italic text-slate-500 dark:text-slate-400">
                Clique na imagem para ampliar
              </p>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                EncurtaDev
              </h3>
              <p className="mb-4 leading-7 text-slate-700 dark:text-slate-300">
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
              <div className="flex flex-wrap gap-4 items-center my-4">
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
