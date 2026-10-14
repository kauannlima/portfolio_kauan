import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  const navItems = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];
  const [isAtTop, setIsAtTop] = useState(true);

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");

      return savedTheme === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        isAtTop
          ? "border-b border-transparent bg-transparent"
          : "border-b border-line bg-paper"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="flex items-center gap-3 text-ink"
          >
            <span className="font-mono text-xl font-bold tracking-tight">
              kauannlima
            </span>
            
          </a>

          {/* mobile toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={() => setIsDark((prev) => !prev)}
              type="button"
              aria-label="Alternar tema claro e escuro"
              className="cursor-pointer rounded-md p-2 text-muted transition-colors hover:text-accent"
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            {/* hamburguer */}
            <button
              type="button"
              aria-label="Abrir o menu"
              aria-expanded={menuOpen}
              className="relative h-8 w-7 cursor-pointer select-none text-2xl text-ink"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </button>
          </div>

          {/* desktop menu + toggle */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={() => setIsDark((prev) => !prev)}
              type="button"
              aria-label="Alternar tema claro e escuro"
              className="cursor-pointer rounded-md p-2 text-muted transition-colors hover:text-accent"
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
