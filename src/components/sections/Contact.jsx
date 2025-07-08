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
      .then(() => {
        alert("Mensagem enviada!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Ops! Algo deu errado. Por favor, tente novamente."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20
                 bg-white dark:bg-[#0a0a0a]" // fundo claro e escuro
    >
      <RevealOnScroll>
        <div className="w-[320px] sm:w-[400px] md:w-[500px] px-4">
          <h2
            className="
    text-3xl font-bold mb-8 
    bg-gradient-to-r from-blue-900 to-blue-950
    dark:from-blue-600 dark:to-cyan-500 
    bg-clip-text text-transparent text-center
  "
          >
            Entre em contato
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
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
                w-full rounded px-4 py-3
                bg-gray-100 text-gray-900
                border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-700
                dark:bg-[#121212] dark:text-gray-200 dark:border-gray-700
                dark:focus:ring-blue-500
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
                w-full rounded px-4 py-3
                bg-gray-100 text-gray-900
                border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-700
                dark:bg-[#121212] dark:text-gray-200 dark:border-gray-700
                dark:focus:ring-blue-500
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
              placeholder="Sua mensagem"
              className="
                w-full rounded px-4 py-3
                bg-gray-100 text-gray-900
                border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-700
                dark:bg-[#121212] dark:text-gray-200 dark:border-gray-700
                dark:focus:ring-blue-500
                transition
              "
            />
            <button
              type="submit"
              className="
                w-full bg-blue-900 text-white py-3 px-6 rounded font-medium
                transition relative overflow-hidden
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(21,39,121,0.6)]
                dark:bg-blue-600 dark:hover:shadow-[0_0_15px_rgba(37,99,235,0.6)]
              "
            >
              Enviar mensagem
            </button>
          </form>

          <div className="mt-8 flex justify-center space-x-8 text-blue-900 dark:text-blue-600 transition">
            <a
              href="https://github.com/kauannlima"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-blue-700 dark:hover:text-blue-400"
            >
              {/* SVG GitHub - sem alterações */}
            </a>

            <a
              href="https://www.linkedin.com/in/kauanlima-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-700 dark:hover:text-blue-400"
            >
              {/* SVG LinkedIn - sem alterações */}
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
