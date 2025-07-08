import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Olá Mundo />";

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
    <div className="fixed inset-0 z-50 bg-white dark:bg-black flex flex-col items-center justify-center">
      <div className="mb-6 text-4xl font-mono font-bold text-gray-900 dark:text-gray-100 select-none">
        {text}
        <span className="animate-blink ml-1 text-gray-900 dark:text-gray-100">
          |
        </span>
      </div>

      <div className="w-[200px] h-[3px] bg-gray-300 dark:bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-900 dark:bg-blue-500 shadow-[0_0_15px_rgba(21,39,121,0.6)] dark:shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-loading-bar"></div>
      </div>
    </div>
  );
};
