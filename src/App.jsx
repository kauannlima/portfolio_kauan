import { useState } from "react";
import "./App.css";
import "./index.css";
import { NavBar } from "./components/NavBar";
import { MobileMenu } from "./components/MobileMenu";

//sections
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-ink">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
