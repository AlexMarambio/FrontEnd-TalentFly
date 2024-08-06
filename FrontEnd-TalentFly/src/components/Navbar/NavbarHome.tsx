import React from "react";
import logo from "../../assets/logos/logo2.png";
import { Link } from "react-router-dom";

interface Props {}

const NavbarHome = (props: Props) => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
            <Link to="" className="text-black hover:text-darkBlue">
                <img src={logo} alt="logo" />
            </Link>
          
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-back">
          <div className="hover:text-darkBlue">
            <Link to="/login">Iniciar Sesión</Link>
            </div>
          <Link to
            ="/register"
            className="px-8 py-3 font-bold rounded text-white bg-[#796AD9] hover:opacity-70"
          >
            Registrate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;