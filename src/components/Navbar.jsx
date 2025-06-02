import { useEffect } from "react"
import logo from "../assets/icon2.png"


export const Navbar = ({menuOpen, setMenuOpen, onCartClick, cartCount}) => {

  useEffect(() => {
     document.body.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen])

    return(
        <nav className="fixed top-0 w-full z-40 bg-[rgba(8, 0, 0, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white">
                    {" "}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center group cursor-pointer">
                          <img className="h-12 w-12 mr-2 group-hover:scale-105 rounded-lg" src={logo} alt="logo" />
                          <span className="text-gray-300 group-hover:text-yellow-500 transition-colors duration-400 group-hover:scale-105 mr-1">Dried Manggo PH</span>
                          
                        </div>
                    </div>                
                </a>
                <div className="w-7 h5 relative cursor-pointer z-40 md:hidden hover:scale-110" onClick={() => setMenuOpen((prev) => !prev)}>
                  &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                  <a href="#home" className="relative text-gray-300 hover:text-yellow-400 transition-colors hover:scale-110 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-100 hover:after:w-full">
                    {""}
                    Home{""}
                  </a>
                  <a href="#shop" className="relative text-gray-300 hover:text-yellow-400 transition-colors hover:scale-110 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-100 hover:after:w-full">
                    {""}
                    Shop{""}
                  </a>   
                  <a href="#about" className="relative text-gray-300 hover:text-yellow-400 transition-colors hover:scale-110 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-100 hover:after:w-full">
                    {""}
                    About{""}
                  </a>
                  <a href="#contact" className="relative text-gray-300 hover:text-yellow-400 transition-colors hover:scale-110 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-100 hover:after:w-full">
                    {""}
                    Contacts{""}
                  </a>
                
                
                <div className="flex items-center gap-4">
                  <button
                    onClick={onCartClick}
                    className="relative bg-yellow-500 text-white px-6 py-2 rounded shadow hover:bg-yellow-600 transition"
                  >
                    Cart
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-2">
                        {cartCount}
                      </span>
                    )}
                  </button>
                  </div>
                </div>
            </div>
          </div>
        </nav>
    ) 
}