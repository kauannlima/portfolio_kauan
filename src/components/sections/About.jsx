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
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="w-150 mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Sobre Mim
          </h2>

          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Tenho foco em Java com Spring Boot no back-end e React no
              front-end, aplicando meus conhecimentos em projetos práticos que
              compõem meu portfólio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 transition-all">
                <h3 className="text-xl font-bold mb-4">Front-end</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 transition-all">
                <h3 className="text-xl font-bold mb-4">Back-end</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Estas são as principais tecnologias com as quais trabalho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Educação</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    Curso Superior de Tecnologia (CST) em Análise e
                    Desenvolvimento de Sistemas
                  </strong>{" "}
                  – Universidade Católica de Santos (2023–2025)
                </li>
                <li>
                  <strong>Cursos relevantes:</strong> Spring Framework, Java OO,
                  Front-end Web, Banco de Dados SQL, Controle de Versão com Git.
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Experiências</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Assistente de Help Desk em SOC Software de SST (2024–Presente)
                  </h4>
                  <p>
                    Auxilio clientes com dúvidas, abertura de chamados e suporte
                    na resolução de erros e validações de regras.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Auxiliar de Navegação em Unimar Agenciamentos Marítimos
                    (2022–2024)
                  </h4>
                  <p>
                    Controlei posições de navios, gerenciei relatórios via EDI e
                    cuidei de transbordo, faturas e atualização de contêineres.
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