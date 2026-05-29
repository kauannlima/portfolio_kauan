import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Kauan Lima />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[linear-gradient(180deg,#f8fbfc_0%,#eef4f6_100%)] dark:bg-[linear-gradient(180deg,#061017_0%,#020617_100%)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(15,92,115,0.22),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_55%)]" />
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400 select-none">
        portfolio em carregamento
      </div>
      <div className="mb-6 text-4xl font-mono font-bold text-slate-900 dark:text-slate-100 select-none">
        {text}
        <span className="ml-1 animate-blink text-slate-900 dark:text-slate-100">
          |
        </span>
      </div>

      <div className="mb-3 text-sm text-slate-600 dark:text-slate-300 select-none">
        organizando interface, projetos e contexto
      </div>

      <div className="relative h-[4px] w-[220px] overflow-hidden rounded-full bg-slate-300/80 dark:bg-slate-800">
        <div className="animate-loading-bar h-full w-[40%] bg-[#0f5c73] shadow-[0_0_20px_rgba(15,92,115,0.45)] dark:bg-cyan-300 dark:shadow-[0_0_20px_rgba(103,232,249,0.35)]"></div>
      </div>
    </div>
  );
};
