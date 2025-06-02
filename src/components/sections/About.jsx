import { RevealOnScroll } from "../RevealOnScroll";
import ashly from "../../assets/ashly.jpg";
import fb from "../../assets/1.png";
import ig from "../../assets/2.png";
import icon from "../../assets/icon2.png";
import tiktok from "../../assets/3.png";

export const About = () => {
 


  return (
    <div className="=bg-green-900">
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent text-center">
              {" "}
              About Us
            </h2>

            {/*======================================1ST USER=========================================================*/}
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <div className="flex items-center">
                <img className=" h-40 w-40 mr-5 rounded-[100px] border-3 border-solid border-yellow-600" src={ashly}> 
                </img>
                  <p className="mt-6 text-[30px] font-bold mb-8 bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent text-center">
                    Ashly Khen Garcia
                    
                  </p>
              </div>
              <br></br>
              <div>Connect with me 
                 <a href="https://www.facebook.com/ashly.khen.garcia" className="ml-3 ">
                      <button
                        type="button" className="  hover:scale-110 px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                          <img src={fb} alt="fb" className="mb-2 inline-block rounded h-8 w-8 hover:shadow-[0_2px_8px_rgba(255,160,0,0.4)]"/>
                      </button>
                  </a>
                  <a href="https://www.instagram.com/khen_ash/">
                      <button
                        type="button" className="  hover:scale-110 px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                          <img src={ig} alt="ig" className="mb-2 inline-block rounded h-8 w-8 hover:shadow-[0_2px_8px_rgba(255,160,0,0.4)]"/>
                      </button>
                  </a>
              </div>
              
              <p className="text-gray-300 mb-6">
              I'm a simple person who values kindness, and I love people who can lend a helping hand without looking down on others or comparing their accomplishments.



              </p>

            

              
            </div><br></br>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <div className="flex items-center">
                <img className=" h-40 w-40 mr-5 rounded-[100px] border-3 border-solid border-yellow-600" src={icon}> 
                </img>
                  <p className="mt-6 text-[30px] font-bold mb-8 bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent text-center">
                    Dried Manggo PH
                    
                  </p>
              </div>
              <br></br>
              <div>View our social media accounts 
                 <a href="https://www.facebook.com/profile.php?id=61576949702351" className="ml-3 ">
                      <button
                        type="button" className="  hover:scale-110 px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                          <img src={fb} alt="fb" className="mb-2 inline-block rounded h-8 w-8 hover:shadow-[0_2px_8px_rgba(255,160,0,0.4)]"/>
                      </button>
                  </a>
                  <a href="https://www.instagram.com/dried_manggo_blitss/">
                      <button
                        type="button" className="  hover:scale-110 px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                          <img src={ig} alt="ig" className="mb-2 inline-block rounded h-8 w-8 hover:shadow-[0_2px_8px_rgba(255,160,0,0.4)]"/>
                      </button>
                  </a>
                  <a href="https://www.tiktok.com/@dried.manggo.blits.bites?_t=ZS-8ws1hmfqWHv&_r=1">
                      <button
                        type="button" className="  hover:scale-110 px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                          <img src={tiktok} alt="tiktok" className="mb-2 inline-block rounded h-8 w-8 hover:shadow-[0_2px_8px_rgba(255,160,0,0.4)]"/>
                      </button>
                  </a>
              </div>
              
              

            

              
            </div><br></br>
            
            
          
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
};