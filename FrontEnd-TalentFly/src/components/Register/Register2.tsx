import React, { useEffect, useState } from 'react';
import { initAuthToggle } from './authToggle';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [isPostulante, setIsPostulante] = useState(true);

  useEffect(() => {
    initAuthToggle();
  }, []);

  const toggleRole = () => {
    setIsPostulante(!isPostulante);
  };

  return (
    <div className="m-0 p-0 box-border font-">
      <div className="flex items-center justify-center flex-col h-screen">
        <div className="bg-white rounded-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] relative overflow-hidden w-[768px] max-w-full min-h-[480px]" id="container">
          <div className="form-container sign-up absolute top-0 h-full transition-all ease-in-out duration-[600ms] left-0 w-1/2 opacity-0 z-10">
            <form className="bg-white flex items-center justify-center flex-col px-10 h-full">
              <h1>Create Account</h1>
              <span>or use your email for registration</span>
              <input className="bg-[#eee] border-none my-2 px-4 py-2 text-sm rounded-lg w-full outline-none" type="text" placeholder="Name" />
              <input className="bg-[#eee] border-none my-2 px-4 py-2 text-sm rounded-lg w-full outline-none" type="email" placeholder="Email" />
              <input className="bg-[#eee] border-none my-2 px-4 py-2 text-sm rounded-lg w-full outline-none" type="password" placeholder="Password" />
              <button className="bg-[#512da8] text-white text-xs px-11 py-2 border border-transparent rounded-lg font-semibold tracking-wide uppercase mt-2 cursor-pointer" id="registerBtn">Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in absolute top-0 h-full transition-all ease-in-out duration-[600ms] left-0 w-1/2 z-20">
            <form className="bg-white flex items-center justify-center flex-col px-10 h-full">
              <h1 className='text-xl mb-7'>{isPostulante ? 'Registrate como Postulante!' : 'Registrate como Reclutador!'}</h1>
              <input className="bg-[#eee] border-none my-2 px-4 py-2 text-sm rounded-lg w-full outline-none" type="text" placeholder="Nombre" />
              <input className="bg-[#eee] border-none my-2 px-4 py-2 text-sm rounded-lg w-full outline-none" type="text" placeholder="Apellidos" />
              <input className="bg-[#eee] border-none my-2 px-4 py-2 text-sm rounded-lg w-full outline-none" type="email" placeholder="Email" />
              <input className="bg-[#eee] border-none my-2 px-4 py-2 text-sm rounded-lg w-full outline-none" type="password" placeholder="Contraseña" />
              <Link to="login" className="text-[#333] text-sm mt-3 mb-2">Ya tienes una cuenta?</Link>
              <button className="bg-[#512da8] text-white text-xs px-11 py-2 border border-transparent rounded-lg font-semibold tracking-wide uppercase mt-2 cursor-pointer" id="loginBtn">Sign In</button>
            </form>
          </div>
          <div className="toggle-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all ease-in-out duration-[600ms] rounded-[150px_0_0_100px] z-[1000]">
            <div className="toggle bg-[#512da8] h-full bg-gradient-to-r from-[#5c6bc0] to-[#512da8] text-white relative left-[-100%] w-[200%] transform transition-all ease-in-out duration-[600ms]">
              <div className="toggle-panel absolute w-1/2 h-full flex items-center justify-center flex-col px-8 text-center top-0 transform transition-all ease-in-out duration-[600ms] left-[-200%]">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button className="bg-transparent border border-white text-xs px-11 py-2 rounded-lg font-semibold tracking-wide uppercase mt-2 cursor-pointer hidden" id="loginBtn">Sign In</button>
              </div>
              <div className="toggle-panel absolute w-1/2 h-full flex items-center justify-center flex-col px-8 text-center top-0 transform transition-all ease-in-out duration-[600ms] right-0">
                <h1>Hello, Friend!</h1>
                <p>Register with your personal details to use all of site features</p>
                <button className="bg-transparent border border-white text-xs px-11 py-2 rounded-lg font-semibold tracking-wide uppercase mt-2 cursor-pointer hidden" id="registerBtn">Sign Up</button>
              </div>
            </div>
          </div>
          <button
            className="absolute top-5 right-5 bg-[#512da8] text-white text-xs px-4 py-2 rounded-lg font-semibold tracking-wide uppercase cursor-pointer"
            onClick={toggleRole}
          >
            {isPostulante ? 'Cambiar a Reclutador' : 'Cambiar a Postulante'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
