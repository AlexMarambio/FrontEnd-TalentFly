import React, { useState } from 'react';

const RecruiterView = () => {
  const [jobOffers, setJobOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({
    title: '',
    salary: '',
    location: '',
    experienceLevel: ''
  });

  const [applicants] = useState([
    {
      nick: "Diego Pérez",
      quizLevel: "Senior",
      percentage: 100,
      email: "diego@mail.cl",
      description: "Soy un programador hace 4 años",
      studies: "Informatica UDP",
      avatar: "https://i.pravatar.cc/150?u=diegoperezca",
      experience: "6 décadas"
    },
    {
      nick: "Alex Muñoz",
      quizLevel: "Junior",
      percentage: 60,
      email: "alex@mail.cl",
      description: "Soy un programador hace 6 meses",
      studies: "Informatica Inacap",
      avatar: "https://i.pravatar.cc/150?u=alexmuñoz",
      experience: "1 año"
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOffer({ ...newOffer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJobOffers([...jobOffers, newOffer]);
    setNewOffer({ title: '', salary: '', location: '', experienceLevel: '' });
  };

  return (
    <div className="RecruiterView">
      <nav className="relative h-28 mb-10">
        <video autoPlay muted loop className="absolute w-full h-full object-cover">
          <source src="https://talenfly.com/wp-content/uploads/2021/12/pexels-rostislav-uzunov-9150545.mp4" type="video/mp4" />
        </video>
        <div className="relative flex items-center justify-center h-full">
          <img src="https://talenfly.com/wp-content/uploads/2021/12/Logo_Talenfly-300x83.png" alt="Logo" className="h-16" />
        </div>
      </nav>

      <div className="text-center">
        <h1 className="text-5xl text-purple-700 mb-6 font-semibold">Recruiter View</h1>
        <div className="max-w-lg mx-auto bg-[#e5d2f5] p-8 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl mb-4">Postulantes</h2>
          <ul>
            {applicants.map(applicant => (
              <li key={applicant.nick} className="bg-white p-4 rounded-lg shadow-md mb-4 text-left">
                <img src={applicant.avatar} alt="Avatar" className="w-12 h-12 rounded-full inline-block mr-4" />
                <div className="inline-block align-middle">
                  <h3 className="text-xl font-semibold">{applicant.nick}</h3>
                  <p>Correo: {applicant.email}</p>
                  <p>Nivel: {applicant.quizLevel} ({applicant.percentage}%)</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-lg mx-auto bg-[#e5d2f5] p-8 rounded-lg shadow-md">
          <h2 className="text-2xl mb-4">Crear Oferta Laboral</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-left text-sm font-bold mb-2">Título del puesto</label>
              <input type="text" name="title" value={newOffer.title} onChange={handleInputChange} className="w-full px-3 py-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block text-left text-sm font-bold mb-2">Renta ofrecida</label>
              <input type="text" name="salary" value={newOffer.salary} onChange={handleInputChange} className="w-full px-3 py-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block text-left text-sm font-bold mb-2">Ubicación</label>
              <select name="location" value={newOffer.location} onChange={handleInputChange} className="w-full px-3 py-2 border rounded" required>
                <option value="">Seleccione una opción</option>
                <option value="Remoto">Remoto</option>
                <option value="Presencial">Presencial</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-left text-sm font-bold mb-2">Nivel de experiencia</label>
              <select name="experienceLevel" value={newOffer.experienceLevel} onChange={handleInputChange} className="w-full px-3 py-2 border rounded" required>
                <option value="">Seleccione una opción</option>
                <option value="Junior">Junior</option>
                <option value="Middle">Middle</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
            <button type="submit" className="bg-purple-700 text-white py-2 px-4 rounded-full">Crear Oferta</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecruiterView;
