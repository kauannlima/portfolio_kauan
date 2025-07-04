import { Code, ExternalLink } from "lucide-react";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Projetos em destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Cardápio Dev</h3>
            <p className="text-gray-400 mb-4">
              Sistema de cardápio digital com funcionalidades para visualizar,
              cadastrar, editar e remover itens como pratos e bebidas, integrado
              a um backend via requisições HTTP.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "React",
                "Java",
                "Spring Boot",
                "PostgreSQL",
                "Spring Security",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
          hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center my-4">
              <a
                href="https://github.com/kauannlima/backend-cardapio"
                target="_blank"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Code size={16} />
                Back-end
              </a>
              <a
                href="https://github.com/kauannlima/frontend-cardapio"
                target="_blank"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Code size={16} />
                Front-end
              </a>
              <a
                href="https://frontend-cardapio.onrender.com/"
                target="_blank"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink size={16} />
                Projeto
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">EncurtaDev </h3>
            <p className="text-gray-400 mb-4">
              EncurtaDev é uma aplicação web para encurtar URLs de forma prática
              e eficiente. Conta com geração automática de QR Codes, interface
              simples e integração com o back-end para processamento e
              armazenamento das URLs.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["React", "Java", "TypeScript", "Spring Boot", "PostgreSQL"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
          hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-wrap gap-4 items-center my-4">
              <a
                href="https://github.com/kauannlima/encurta-dev"
                target="_blank"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Code size={16} />
                Back-end
              </a>
              <a
                href="https://github.com/kauannlima/encurta-dev-front"
                target="_blank"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Code size={16} />
                Front-end
              </a>
              <a
                href="https://encurta-dev-front-klima.vercel.app/"
                target="_blank"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink size={16} />
                Projeto
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">E-commerce Java </h3>
            <p className="text-gray-400 mb-4">
              Projeto de e-commerce desenvolvido em Java com Apache Struts 2,
              oferecendo funcionalidades como navegação por produtos, adição ao
              carrinho e finalização de compras. Foi meu primeiro projeto
              utilizando o framework Struts, com o front-end integrado ao
              back-end por meio de páginas JSP, marcando uma nova etapa na minha
              evolução com aplicações Java baseadas em MVC tradicional.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Java", "Apache Struts 2", "MySql"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
          hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center my-4">
              <a
                href="https://github.com/kauannlima/ecommercejava"
                target="_blank"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Code size={16} />
                Repositório
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Finanças Spring</h3>
            <p className="text-gray-400 mb-4">
              Uma aplicação fullstack desenvolvida em Java com Spring Boot,
              permitindo o cadastro, visualização e remoção de receitas e
              despesas. Foi meu primeiro projeto completo integrando front-end e
              back-end, utilizando técnicas mais antigas de conexão entre as
              camadas, o que demonstra claramente minha evolução ao longo dos
              estudos.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["JavaScript", "Java", "Spring Boot", "MySql"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
          hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-wrap gap-4 items-center my-4">
              <a
                href="https://github.com/kauannlima/financas-spring"
                target="_blank"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Code size={16} />
                Repositório
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
