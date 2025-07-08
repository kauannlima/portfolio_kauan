import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
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
    <nav className="fixed top-0 w-full z-40 bg-white/90 dark:bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-gray-200 dark:border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-mono text-xl font-bold text-gray-900 dark:text-white"
          >
            kauan<span className="text-blue-500">_</span>lima
          </a>

          {/* mobile toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={() => setIsDark((prev) => !prev)}
              type="button"
              aria-label="Toggle Dark Mode"
              className="
    bg-blue-900 text-white
    dark:bg-blue-600 dark:text-white
    py-1.5 px-3 rounded font-medium transition relative overflow-hidden
    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(21,39,121,0.6)]
    dark:hover:shadow-[0_0_15px_rgba(37,99,235,0.6)]
    text-center w-auto
  "
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            {/* hamburguer */}
            <div
              className="w-7 h-8 relative cursor-pointer text-gray-900 dark:text-white text-2xl select-none"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
          </div>

          {/* desktop menu + toggle */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Início
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Sobre
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Projetos
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Contato
            </a>

            <button
              onClick={() => setIsDark((prev) => !prev)}
              type="button"
              aria-label="Toggle Dark Mode"
              className="
    bg-blue-900 text-white
    dark:bg-blue-600 dark:text-white
    py-1.5 px-3 rounded font-medium transition relative overflow-hidden
    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(21,39,121,0.6)]
    dark:hover:shadow-[0_0_15px_rgba(37,99,235,0.6)]
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
