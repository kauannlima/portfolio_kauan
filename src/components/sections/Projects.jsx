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
    bg-blue-900/10 text-blue-900 
    dark:bg-blue-500/20 dark:text-blue-400 
    py-1 px-3 rounded-full text-sm 
    hover:bg-blue-900/20 dark:hover:bg-blue-500/30 
    hover:shadow-[0_2px_8px_rgba(21,39,121,0.2)] dark:hover:shadow-[0_2px_8px_rgba(37,99,235,0.3)] 
    transition
  `;

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-[#0a0a0a]"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-900 to-blue-950 dark:from-blue-600 dark:to-cyan-500 bg-clip-text text-transparent text-center">
            Projetos em destaque
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* REACTGRAM */}
            <div className="p-6 rounded-xl border border-gray-300 dark:border-white/10 bg-white/80 dark:bg-[#121212] hover:-translate-y-1 hover:border-blue-900/30 dark:hover:border-blue-600/30 shadow transition">
              <img
                src={reactgram}
                alt="Reactgram"
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => openModal(reactgram)}
              />
              <p className="text-sm text-gray-700 dark:text-gray-400 italic mb-4">
                Clique na imagem para ampliar
              </p>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-200">
                Reactgram
              </h3>
              <p className="text-gray-800 dark:text-gray-300 mb-4">
                Aplicação de rede social feita com React e Node.js, permitindo
                cadastro de usuários, upload de fotos, curtidas, comentários e
                feed de postagens. Back-end com autenticação JWT e integração
                com banco de dados.
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
                  className="flex items-center gap-1 text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <Code size={16} /> Back-end
                </a>
                <a
                  href="https://github.com/kauannlima/reactgram-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <Code size={16} /> Front-end
                </a>
              </div>
            </div>

            {/* MINIBLOG */}
            <div className="p-6 rounded-xl border border-gray-300 dark:border-white/10 bg-white/80 dark:bg-[#121212] hover:-translate-y-1 hover:border-blue-900/30 dark:hover:border-blue-600/30 shadow transition">
              <img
                src={miniblog}
                alt="MiniBlog"
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => openModal(miniblog)}
              />
              <p className="text-sm text-gray-700 dark:text-gray-400 italic mb-4">
                Clique na imagem para ampliar
              </p>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-200">
                MiniBlog
              </h3>
              <p className="text-gray-800 dark:text-gray-300 mb-4">
                Blog minimalista feito com React e Firebase, com foco em CRUD de
                posts, autenticação de usuários e uma interface simples,
                responsiva e funcional. Conta com busca por tags, dashboard e
                controle total dos conteúdos.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "React",
                  "Firebase",
                  "Tailwind CSS",
                  "Firestore",
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
                  className="flex items-center gap-1 text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <Code size={16} /> GitHub
                </a>
                <a
                  href="https://miniblog-ivory.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={16} /> Ver online
                </a>
              </div>
            </div>

            {/* CARDÁPIO DEV */}
            <div className="p-6 rounded-xl border border-gray-300 dark:border-white/10 bg-white/80 dark:bg-[#121212] hover:-translate-y-1 hover:border-blue-900/30 dark:hover:border-blue-600/30 shadow transition">
              <img
                src={cardapioImg}
                alt="Cardápio Dev"
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => openModal(cardapioImg)}
              />
              <p className="text-sm text-gray-700 dark:text-gray-400 italic mb-4">
                Clique na imagem para ampliar
              </p>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-200">
                Cardápio Dev
              </h3>
              <p className="text-gray-800 dark:text-gray-300 mb-4">
                Sistema de cardápio digital com funcionalidades para visualizar,
                cadastrar, editar e remover itens como pratos e bebidas,
                integrado a um backend via requisições HTTP.
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
                  className="flex items-center gap-1 text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <Code size={16} /> Back-end
                </a>
                <a
                  href="https://github.com/kauannlima/frontend-cardapio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <Code size={16} /> Front-end
                </a>
              </div>
            </div>

            {/* ENCURTADEV */}
            <div className="p-6 rounded-xl border border-gray-300 dark:border-white/10 bg-white/80 dark:bg-[#121212] hover:-translate-y-1 hover:border-blue-900/30 dark:hover:border-blue-600/30 shadow transition">
              <img
                src={encurtaImg}
                alt="Encurta Dev"
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => openModal(encurtaImg)}
              />
              <p className="text-sm text-gray-700 dark:text-gray-400 italic mb-4">
                Clique na imagem para ampliar
              </p>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-200">
                EncurtaDev
              </h3>
              <p className="text-gray-800 dark:text-gray-300 mb-4">
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
                  className="flex items-center gap-1 text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <Code size={16} /> Back-end
                </a>
                <a
                  href="https://github.com/kauannlima/encurta-dev-front"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
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
            className="max-w-full max-h-[90vh] rounded-lg border-4 border-white"
          />
        </div>
      )}
    </section>
  );
};
