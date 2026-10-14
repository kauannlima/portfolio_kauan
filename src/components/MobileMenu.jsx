export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const navItems = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 z-40 flex w-full flex-col justify-center overflow-hidden bg-paper px-6
        transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "invisible h-0 opacity-0 pointer-events-none"
        }
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute right-6 top-4 cursor-pointer text-3xl text-ink"
        aria-label="Fechar o Menu"
      >
        &times;
      </button>

      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className="border-b border-line py-5 text-3xl font-bold tracking-tight text-ink transition-colors hover:text-accent"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};
