export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const navItems = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Sobre" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 z-40 flex w-full flex-col items-center justify-center bg-[rgba(6,16,23,0.9)] backdrop-blur-xl
        transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute right-6 top-6 cursor-pointer text-3xl text-white focus:outline-none"
        aria-label="Fechar o Menu"
      >
        &times;
      </button>

      <div className="mb-8 rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">
        Navegacao
      </div>

      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className={`my-4 transform text-2xl font-semibold tracking-[0.16em] text-white uppercase transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {item.label}
        </a>
      ))}

      <p className="mt-8 max-w-xs text-center text-sm leading-6 text-slate-400">
        Portfolio com foco em projetos práticos, back-end consistente e UI sem excesso.
      </p>
    </div>
  );
};
