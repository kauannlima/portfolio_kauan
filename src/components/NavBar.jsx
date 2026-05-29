import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  const navItems = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Sobre" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];

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

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-slate-200/75 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-[rgba(6,16,23,0.72)]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="flex items-center gap-3 text-slate-900 dark:text-white"
          >
            <span className="font-mono text-xl font-bold tracking-tight">
              kauan<span className="text-[#0f5c73] dark:text-cyan-300">_</span>lima
            </span>
            <span className="hidden rounded-full border border-slate-300/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 md:inline-flex dark:border-white/10 dark:text-slate-400">
              full stack
            </span>
          </a>

          {/* mobile toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={() => setIsDark((prev) => !prev)}
              type="button"
              aria-label="Toggle Dark Mode"
              className="
    rounded-full border border-[#0f5c73]/15 bg-[#0c4152] px-3 py-2 text-white
    transition hover:-translate-y-0.5 hover:bg-[#0f5c73]
    dark:border-cyan-300/20 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200
    text-center w-auto
  "
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            {/* hamburguer */}
            <div
              className="relative h-8 w-7 cursor-pointer select-none text-2xl text-slate-900 dark:text-white"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
          </div>

          {/* desktop menu + toggle */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-[0.18em] uppercase text-slate-600 transition-colors hover:text-[#0f5c73] dark:text-slate-300 dark:hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={() => setIsDark((prev) => !prev)}
              type="button"
              aria-label="Toggle Dark Mode"
              className="
    rounded-full border border-[#0f5c73]/15 bg-[#0c4152] px-3 py-2 text-white
    transition hover:-translate-y-0.5 hover:bg-[#0f5c73]
    dark:border-cyan-300/20 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200
    text-center w-auto
  "
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
