import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { NavBar } from "./components/NavBar";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {""}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text=gray`}
      >
        <NavBar />
      </div>
    </>
  );
}

export default App;

//NÃO IREI USAR ROTAS PARA TORNAR O PORTFOLIO MAIS EFICIENTRE E LEVE POSSIVEL
