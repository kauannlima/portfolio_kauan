import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Mensagem enviada!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Ops! Algo deu errado. Por favor, tente novamente."));
  };

    return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="w-[200px] sm:w-[300px] md:w-[400px] px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Entre em contato
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/50"
                placeholder="Seu nome"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/50"
                placeholder="Seu e-mail"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <textarea
                name="message"
                id="message"
                required
                value={formData.message}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/50"
                placeholder="Sua mensagem"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Enviar mensagem
            </button>
          </form>
          <div className="mt-8 flex justify-center space-x-8 text-blue-500 hover:text-blue-400 transition">
            <a
              href="https://github.com/kauannlima"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-blue-600"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.932 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.404 11.5 11.5 0 013.003.404c2.291-1.552 3.298-1.23 3.298-1.23.653 1.649.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.624-5.475 5.922.43.37.814 1.102.814 2.222v3.293c0 .321.217.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/kauanlima-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-600"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452H16.9v-5.569c0-1.328-.025-3.037-1.85-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667H9.356V9h3.415v1.561h.05c.476-.9 1.637-1.85 3.37-1.85 3.6 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.978 1.978 0 110-3.956 1.978 1.978 0 010 3.956zm1.72 13.019H3.619V9h3.438v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.22.792 24 1.771 24h20.451C23.2 24 24 23.22 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};