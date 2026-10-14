import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const oberserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          oberserver.disconnect();
        }
      },
      {
        // threshold 0: seções mais altas que a tela (Projetos no celular) nunca chegavam a 20% visíveis
        threshold: 0,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) oberserver.observe(ref.current);

    return () => oberserver.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};
