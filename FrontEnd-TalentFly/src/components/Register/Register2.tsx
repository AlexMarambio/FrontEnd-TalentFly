import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountForm: React.FC = () => {
  const [isWorker, setUser] = useState(true);
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    linkedin: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    position: '',
    country: ''
  });
  const navigate = useNavigate();

  const handleToggle = () => {
    setUser(!isWorker);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isWorker) {
      navigate('/profile2', { state: formData });
    } else {
      navigate('/profile1', { state: formData });
    }
  };

  const clientImage = 'https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80';
  const workerImage = 'https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80';

  const backgroundImage = isWorker ? clientImage : workerImage;

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center min-h-screen">
          {isWorker && (
            <div
              className="hidden bg-cover my-18 lg:block lg:w-2/5 transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer rounded-l-lg"
              style={{ backgroundImage: `url(${backgroundImage})` }}
              onClick={handleToggle}
            />
          )}
          {isWorker && (
            <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
              <div className="w-full">
                <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                  Registrate como Postulante
                </h1>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Registrate como Postulante para que veas las ofertas y nuevas posibilidades que TalenFly ofrece para tí!
                </p>
                <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" onSubmit={handleSubmit}>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nombres</label>
                    <input
                      type="text"
                      name="nombres"
                      placeholder="Nombres"
                      value={formData.nombres}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Apellidos</label>
                    <input
                      type="text"
                      name="apellidos"
                      placeholder="Apellidos"
                      value={formData.apellidos}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">URL LinkedIn</label>
                    <input
                      type="text"
                      name="linkedin"
                      placeholder="www.linkedin.com/in/user"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Correo Electrónico</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="johnsnow@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Contraseña</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Ingresa tu Contraseña"
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirmar Contraseña</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirma tu Contraseña"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <button
                    className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    type="submit"
                  >
                    <span>Sign Up </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          )}
          {!isWorker && (
            <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
              <div className="w-full">
                <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                  Registrate como Reclutador
                </h1>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Registrate como Reclutador para que veas los talentos disponibles en TalenFly y contacta con los mejores para tu empresa!
                </p>
                <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" onSubmit={handleSubmit}>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nombre de Empresa</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Nombre de la Empresa"
                      value={formData.company}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Cargo</label>
                    <input
                      type="text"
                      name="position"
                      placeholder="Cargo"
                      value={formData.position}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">País</label>
                    <input
                      type="text"
                      name="country"
                      placeholder="País"
                      value={formData.country}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Correo Electrónico</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="johnsnow@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Contraseña</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Ingresa tu Contraseña"
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirmar Contraseña</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirma tu Contraseña"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <button
                    className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    type="submit"
                  >
                    <span>Sign Up </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          )}
          {!isWorker && (
            <div
              className="hidden bg-cover lg:block lg:w-2/5 transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer rounded-r-lg"
              style={{ backgroundImage: `url(${backgroundImage})` }}
              onClick={handleToggle}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default AccountForm;
