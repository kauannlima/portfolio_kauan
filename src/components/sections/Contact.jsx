import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Mensagem enviada!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Ops! Algo deu errado. Por favor, tente novamente."));
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center bg-transparent py-24"
    >
      <RevealOnScroll>
        <div className="w-full max-w-5xl px-4">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
            Vamos conversar
          </p>
          <h2
            className="
    mb-4 text-3xl font-bold
    bg-gradient-to-r from-[#0c4152] via-[#0f5c73] to-[#5a8ea0]
    dark:from-cyan-200 dark:via-cyan-300 dark:to-teal-300
    bg-clip-text text-transparent text-center
  "
          >
            Entre em contato
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-center text-slate-600 dark:text-slate-300">
            Se quiser trocar ideia sobre oportunidades, projetos ou estudos,
            voce pode me chamar pelo formulario ou pelos canais abaixo.
          </p>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <form
              className="space-y-6 rounded-[2rem] border border-slate-200/80 bg-white/82 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:border-white/8 dark:bg-[rgba(17,26,32,0.82)]"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Seu nome"
                className="
                  w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900
                  focus:outline-none focus:ring-2 focus:ring-[#0f5c73]/30
                  dark:border-white/8 dark:bg-white/4 dark:text-slate-200
                  dark:focus:ring-cyan-300/30
                  transition
                "
              />
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Seu e-mail"
                className="
                  w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900
                  focus:outline-none focus:ring-2 focus:ring-[#0f5c73]/30
                  dark:border-white/8 dark:bg-white/4 dark:text-slate-200
                  dark:focus:ring-cyan-300/30
                  transition
                "
              />
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Conte um pouco sobre o que voce precisa"
                className="
                  w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900
                  focus:outline-none focus:ring-2 focus:ring-[#0f5c73]/30
                  dark:border-white/8 dark:bg-white/4 dark:text-slate-200
                  dark:focus:ring-cyan-300/30
                  transition
                "
              />
              <button
                type="submit"
                className="
                  w-full rounded-full bg-[#0c4152] px-6 py-3 font-medium text-white
                  transition hover:-translate-y-0.5 hover:bg-[#0f5c73]
                  dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200
                "
              >
                Enviar mensagem
              </button>
            </form>

            <div className="rounded-[2rem] border border-slate-200/80 bg-white/82 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:border-white/8 dark:bg-[rgba(17,26,32,0.82)]">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">
                Contato direto
              </p>
              <div className="space-y-4">
                {contactLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-start justify-between gap-4 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4 transition hover:-translate-y-0.5 hover:border-[#0f5c73]/20 hover:bg-white dark:border-white/8 dark:bg-white/4 dark:hover:border-cyan-300/20 dark:hover:bg-white/6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 rounded-2xl bg-[#0f5c73]/10 p-3 text-[#0c4152] dark:bg-cyan-300/10 dark:text-cyan-200">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                            {item.value}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="mt-1 text-slate-400 transition group-hover:text-[#0f5c73] dark:group-hover:text-cyan-200"
                      />
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-dashed border-slate-300 bg-white/60 p-4 text-sm leading-7 text-slate-600 dark:border-white/10 dark:bg-white/3 dark:text-slate-300">
                Respondo melhor por e-mail, mas LinkedIn e GitHub tambem ficam
                abertos para networking e contexto tecnico.
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
