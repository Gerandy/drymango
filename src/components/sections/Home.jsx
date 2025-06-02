import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent leading-right">
            Welcome to the Dried Manggo PH
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
           Welcome to Dried Manggo – Your Source of Premium Mango Delights!
At Good Mangoes, we bring you the finest mango products made from the sweetest, sun-ripened mangoes of the Philippines. From chewy dried mangoes to other tropical treats, our products are crafted with care to give you the perfect balance of flavor, freshness, and nutrition.
Taste the difference of real, high-quality mangoes — naturally sweet, always satisfying.


          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#shop"
              className="bg-yellow-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,160,0,0.4)]"
            >
              View Products
            </a>

            <a
              href="#contact"
              className="border border-amber-500/50 text-yellow-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,160,0,0.4)] hover:bg-amber-500/10 " 
            >
              Contact Us
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};