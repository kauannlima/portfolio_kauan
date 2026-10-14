import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");

  const contactLinks = [
    {
      label: "E-mail",
      value: "kauanalmeidalima1405@gmail.com",
      href: "mailto:kauanalmeidalima1405@gmail.com",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/kauanlima-dev",
      href: "https://www.linkedin.com/in/kauanlima-dev",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: "github.com/kauannlima",
      href: "https://github.com/kauannlima",
      icon: Github,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  // placeholder com cor própria: herdando do texto, o Chrome só repintava ao focar o campo depois de trocar o tema
  const fieldClass =
    "w-full rounded-md border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted placeholder:opacity-100 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

  return (
    <section id="contact" className="py-24">
      <RevealOnScroll>
        <div className="mx-auto w-full max-w-5xl px-4">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Entre em contato
          </h2>

          <p className="mb-10 max-w-2xl text-lg leading-8 text-muted">
            Tem uma vaga, um projeto ou só quer trocar ideia sobre tecnologia? Manda mensagem pelo formulário ou me chama direto no e-mail, LinkedIn ou GitHub.
          </p>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="text"
                  name="name"
                  id="name"
                  aria-label="Seu nome"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Seu nome"
                  className={fieldClass}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  aria-label="Seu e-mail"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Seu e-mail"
                  className={fieldClass}
                />
              </div>
              <textarea
                name="message"
                id="message"
                aria-label="Sua mensagem"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Conte um pouco sobre o que você precisa"
                className={`${fieldClass} block resize-none`}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full cursor-pointer rounded-md bg-accent px-6 py-3 font-medium text-on-accent transition-opacity hover:opacity-85 disabled:cursor-default disabled:opacity-60"
              >
                {status === "sending" ? "Enviando mensagem" : "Enviar mensagem"}
              </button>

              <p role="status" className="min-h-6 text-sm text-muted">
                {status === "sent" && "Mensagem enviada. Respondo assim que puder."}
                {status === "error" &&
                  "A mensagem não foi enviada. Tente de novo ou escreva direto para o e-mail ao lado."}
              </p>
            </form>

            <div>
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 border-t border-line py-4 last:border-b"
                  >
                    <Icon size={18} className="shrink-0 text-accent" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-ink">
                        {item.label}
                      </p>
                      <p className="break-words text-sm text-muted transition-colors group-hover:text-accent">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
