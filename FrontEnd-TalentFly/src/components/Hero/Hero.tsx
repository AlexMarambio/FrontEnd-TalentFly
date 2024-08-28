import { useState, useEffect } from "react";
import hero1 from "../../assets/home/hero1.png";
import hero2 from "../../assets/home/hero2.png";
import { Link } from "react-router-dom";



const Hero = () => {
  const [showHero2, setShowHero2] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHero2((prevShowHero2) => !prevShowHero2);
    }, 4000); // Cambia entre las imágenes cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero">
      <div className="container flex flex-col-reverse mx-auto p-8 lg:flex-row">
        <div className="flex flex-col space-y-10 mb-44 m-10 lg:m-10 xl:m-20 lg:mt:16 lg:w-1/2 xl:mb-52">
          <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
          Plataforma de reclutamiento y validación de competencias y habilidades con IA!
          </h1>
          <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
          78% de las empresas no cuentan con un área para reclutar y validar competencias.
          </p>
          <div className="mx-auto lg:mx-0">
            <Link to="/login"
              className="py-5 px-10 text-2xl font-bold text-white bg-[#796AD9] rounded lg:py-4 hover:opacity-70"
            >
              Empezemos!
            </Link>
          </div>
        </div>
        <div className="relative mb-24 mx-auto md:w-180 md:px-10 lg:mb-0 lg:w-1/2 h-[600px] flex justify-center items-center">
          <img
            src={hero1}
            alt=""
            className={`absolute top-0 left-0 right-0 bottom-0 m-auto transition-opacity duration-1000 ${showHero2 ? "opacity-0" : "opacity-100"}`}
            style={{ height: 'calc(100% - 40px)', width: 'auto', maxHeight: '100%', maxWidth: '100%' }}
          />
          <img
            src={hero2}
            alt=""
            className={`absolute top-0 left-0 right-0 bottom-0 m-auto transition-opacity duration-1000 ${showHero2 ? "opacity-100" : "opacity-0"}`}
            style={{ height: 'calc(100% - 40px)', width: 'auto', maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
