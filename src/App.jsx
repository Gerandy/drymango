import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Cart state
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-zinc-900 text-gray-100`}
      >
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          onCartClick={() => setShowCart(true)}
          cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        />
        <MobileMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          onCartClick={() => setShowCart(true)}
          cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        />
        <Home />
        <Projects
          cart={cart}
          setCart={setCart}
          showCart={showCart}
          setShowCart={setShowCart}
        />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;