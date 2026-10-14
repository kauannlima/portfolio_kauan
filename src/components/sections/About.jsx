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

  const experiences = [
    {
      period: "set 2025 – atual",
      role: "Desenvolvedor Full Stack",
      place: "Mamba Digital",
      description:
        "Responsável técnico pela arquitetura e evolução do CRM interno: domínio, modelagem de dados, regras de negócio e integrações. Implementei a autenticação com Keycloak, com RBAC por departamento, função e cliente, e os logs de auditoria. Desenvolvo serviços em Go e Node.js que sincronizam grandes volumes de dados de marketplaces como a Shopee e integram o CRM a HubSpot e Nutshell, com eventos em RabbitMQ e Kafka, além de dashboards em React e TypeScript para as áreas operacional, comercial e financeira.",
    },
    {
      period: "abr 2025 – ago 2025",
      role: "Assistente de Suporte Técnico",
      place: "SOC - Software de Saúde e Segurança do Trabalho",
      description:
        "Diagnóstico e resolução de inconsistências no sistema, com investigação de problemas, validação de regras de negócio e reprodução de cenários para o time de desenvolvimento. Ponte entre clientes, suporte e desenvolvimento, com as demandas organizadas em Kanban.",
    },
    {
      period: "ago 2024 – abr 2025",
      role: "Estagiário de Suporte Técnico",
      place: "SOC - Software de Saúde e Segurança do Trabalho",
      description:
        "Atendimento de chamados, análise inicial de problemas e apoio na identificação de inconsistências, com testes, validações e coleta de informações para o time responsável.",
    },
  ];

  const rowClass =
    "grid gap-2 border-t border-line py-6 md:grid-cols-[11rem_1fr] md:gap-8";

  return (
    <section id="about" className="py-24">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="mb-10 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Sobre mim
          </h2>

          <div className="grid gap-12 md:grid-cols-[1fr_16rem] md:gap-16">
            <div className="max-w-2xl space-y-5 text-base leading-8 text-muted">
              <p className="text-xl leading-8 text-ink">
                Comecei no suporte técnico, atendendo chamado e reproduzindo bug para o time de desenvolvimento. Foi lá que aprendi a olhar o sistema pelo lado de quem usa.
              </p>
              <p>
                Hoje sou o responsável técnico pelo CRM interno da Mamba Digital: desenho a arquitetura, modelo os dados e ligo o sistema a outros serviços. No backend trabalho com Java e Spring Boot, Go e Node.js, com RabbitMQ e Kafka quando a conversa é por eventos. No front, React com TypeScript e Vue.js.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-1 md:content-start">
              <div>
                <h3 className="mb-3 font-bold text-ink">Back-end</h3>
                <ul className="space-y-1 text-muted">
                  {backendSkills.map((tech, key) => (
                    <li key={key}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-bold text-ink">Front-end</h3>
                <ul className="space-y-1 text-muted">
                  {frontendSkills.map((tech, key) => (
                    <li key={key}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <h3 className="mb-6 mt-20 text-2xl font-bold tracking-tight text-ink">
            Experiência profissional
          </h3>

          {experiences.map((item) => (
            <div key={item.role} className={rowClass}>
              <p className="text-sm leading-7 text-muted tabular-nums">
                {item.period}
              </p>
              <div className="max-w-2xl">
                <h4 className="font-semibold leading-7 text-ink">
                  {item.role}
                </h4>
                <p className="mb-2 text-sm leading-7 text-accent">
                  {item.place}
                </p>
                <p className="text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          <h3 className="mb-6 mt-16 text-2xl font-bold tracking-tight text-ink">
            Formação
          </h3>

          <div className={rowClass}>
            <p className="text-sm leading-7 text-muted tabular-nums">
              2023 – 2025
            </p>
            <div className="max-w-2xl">
              <h4 className="font-semibold leading-7 text-ink">
                Curso Superior de Tecnologia (CST) em Análise e
                Desenvolvimento de Sistemas
              </h4>
              <p className="mb-4 text-sm leading-7 text-accent">
                Universidade Católica de Santos
              </p>
              <a
                href="https://drive.google.com/drive/folders/1RhiSJDXJ7zUi8ABsQGX_QebzAxzt_fdE?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline decoration-line decoration-2 underline-offset-8 transition-colors hover:text-accent hover:decoration-accent"
              >
                Ver certificações
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
