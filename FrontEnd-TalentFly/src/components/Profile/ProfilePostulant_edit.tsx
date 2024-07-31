import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import NavbarPostulant from '../Navbar/NavbarPostulant';
import { Link } from "react-router-dom";

Chart.register(ArcElement);

function ProfilePostulant_edit() {
  const [skills, setSkills] = useState({
    experiencia: 40,
    powerSkill: 30,
    competenciasTecnicas: 30
  });

  const [user, setUser] = useState({
    nick: "Alex Marambio",
    email: "alexm@tfmail.cl",
    description: "Soy un programador hace 4 años. Me gusta el café, los juegos, animales, hacer videos en youtube. Busco trabajo de programador o diseñador web y videojuegos. Soy excelente estudiante.",
    studies: "Ingeniería Civil Informática - Universidad Diego Portales",
    avatar: "https://i.pravatar.cc/150?u=alexmuñoz",
    experience: "1 año"
  });

  const [usermedal, setUserMedal] = useState([
    {
      logo: "https://github.com/AlexMarambio/FrontEnd-TalentFly/blob/alex2.0/imagestalentflymedal/medalla-excel.png?raw=true",
      topic: "Excel",
      level: "Middle",
      score: 70
    },
    {
      logo: "https://github.com/AlexMarambio/FrontEnd-TalentFly/blob/alex2.0/imagestalentflymedal/medalla-python.png?raw=true",
      topic: "Python",
      level: "Basic",
      score: 80
    },
    {
      logo: "https://github.com/AlexMarambio/FrontEnd-TalentFly/blob/alex2.0/imagestalentflymedal/medalla-ts.png?raw=true",
      topic: "Typescript",
      level: "Middle",
      score: 70
    },
    {
      logo: "https://github.com/AlexMarambio/FrontEnd-TalentFly/blob/alex2.0/imagestalentflymedal/medalla-cpp.png?raw=true",
      topic: "c++",
      level: "Senior",
      score: 100
    },
    {
      logo: "https://github.com/AlexMarambio/FrontEnd-TalentFly/blob/alex2.0/imagestalentflymedal/medalla-docker.png?raw=true",
      topic: "Docker",
      level: "Junior",
      score: 40
    }
  ]);

  const [company, setCompany] = useState([
    {
      companyName: "TalentFly",
      quizLevel: "Senior",
      percentage: 100,
      slogan: "Looking for new employees"
    },
    {
      companyName: "Google",
      quizLevel: "Junior",
      percentage: 70,
      slogan: "Looking for good employees"
    },
    {
      companyName: "Apple",
      quizLevel: "Junior",
      percentage: 75,
      slogan: "Looking for good employees"
    },
    {
      companyName: "Amazon",
      quizLevel: "Junior",
      percentage: 70,
      slogan: "Looking for good employees"
    },
    {
      companyName: "Funeraria Ivan Martínez",
      quizLevel: "Novato",
      percentage: 60,
      slogan: "Buscando buenos empleados"
    }
  ]);

  const data = {
    labels: ['Experience', 'Power Skill', 'Technical Competencies'],
    datasets: [{
      data: [skills.experiencia, skills.powerSkill, skills.competenciasTecnicas],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6387', '#36A2EC', '#FFCE54']
    }]
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSkills(prevSkills => ({
      ...prevSkills,
      [name]: Number(value)
    }));
  };

  return (
    <div className="App">
      <nav className="relative h-28">
        <video autoPlay muted loop className="absolute w-full h-full object-cover">
          <source src="https://talenfly.com/wp-content/uploads/2021/12/pexels-weldi-studio-design-8675550.mp4" type="video/mp4" />
        </video>
        <div className="relative flex items-center justify-center h-full">
          <img src="https://talenfly.com/wp-content/uploads/2021/12/Logo_Talenfly-300x83.png" alt="Logo" className="h-16" />
          <NavbarPostulant />
        </div>
      </nav>

      <div className="text-center m-4">
        <h1 className='text-5xl text-[#7a69de] mb-6 font-bold'>Bienvenido {user.nick}!</h1>
        <form className='block rounded-3xl userCardTF mx-auto lg:flex'>
          <div className='relative bg-[#CEE9F5] shadow-lg rounded-3xl overflow-hidden border-2'>
            <div className='relative z-10 p-8'>
              <img src={user.avatar} alt="Avatar" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <input type="text" name="nick" value={user.nick} onChange={handleInputChange} className="w-full text-xl font-semibold mb-4" />
              <input type="text" name="email" value={user.email} onChange={handleInputChange} className="w-full text-left mb-4" placeholder="Correo" />
              <textarea name="description" value={user.description} onChange={handleInputChange} className="w-full text-left mt-4" placeholder="Descripción" />
              <div className='bg-[#C6D7E8] rounded-2xl p-4 mt-7'>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                  {usermedal.map((medal, index) => (
                    <li key={index} className="text-center">
                      <img src={medal.logo} alt="Medal" className="w-13 h-16 mx-auto mb-2" />
                      <h3 className="text-m font-semibold">{medal.topic}</h3>
                      <p className="text-gray-700 text-sm">Nivel: {medal.level}</p>
                      <p className="text-gray-700 text-sm">Puntuación: {medal.score}%</p>
                    </li>
                  ))}
                </ul>
              </div>
              <button className='bg-[#7a69de]  text-white py-2 px-4 rounded-full mt-4 hover:bg-[#645FCB]  transition ease-in-out delay-100 hover:scale-110 duration-150'>
                  <Link to="/profile2"> ✔ </Link>
                  
              </button>
            </div>
          </div>

          <div className="ml-16 max-w-sm bg-[#f5f1ce] shadow-lg rounded-3xl p-8">
            <h2 className="text-xl mt-4 mb-8 font-semibold">Habilidades</h2>
            <Doughnut data={data} />
            <div className="mt-4 space-y-4">
              <div className='text-left'>
                <label>Experiencia</label>
                <input type="number" name="experiencia" value={skills.experiencia} onChange={handleSkillChange} className="ml-2 p-1 rounded" />
              </div>
              <div className='text-left'>
                <label>Power Skill</label>
                <input type="number" name="powerSkill" value={skills.powerSkill} onChange={handleSkillChange} className="ml-2 p-1 rounded" />
              </div>
              <div className='text-left'>
                <label>Competencias Técnicas</label>
                <input type="number" name="competenciasTecnicas" value={skills.competenciasTecnicas} onChange={handleSkillChange} className="ml-2 p-1 rounded" />
              </div>
            </div>
          </div>
        </form>

        <div className='block bg-[#cee9f5] shadow-lg rounded-lg p-8 userCardTF mx-auto mt-8 mb-8'>
          <input type="text" name="studies" value={user.studies} onChange={handleInputChange} className="w-full text-left" placeholder="Perfil profesional" />
        </div>

        <div className='bg-[#cee9f5] shadow-lg rounded-lg p-8 userCardTF mx-auto'>
          <input type="text" name="experience" value={user.experience} onChange={handleInputChange} className="w-full text-left" placeholder="Experiencia laboral" />
          <div className='block lg:flex lg:justify-between mt-4'>
            <div className='flex'>
              <img src='https://avatars.githubusercontent.com/u/25259582?v=4' className='w-28 mt-4' alt="Company Logo"/>
              <p className='mt-4 ml-8'><strong>6 meses</strong> trabajando en TIBI4 como diseñador gráfico y programador front-end</p>
            </div>
            <div className='mt-auto'>
              <button className='bg-blue-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-indigo-500 transition ease-in-out delay-100'>Agregar CV</button>
            </div>
          </div>
        </div>
      </div>

      <div className='block rounded-3xl userCardTF mx-auto lg:flex m-4'>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10'>
          {company.map((comp, index) => (
            <li key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">{comp.companyName}</h2>
              <p className="text-gray-700">{comp.slogan}</p>
              <p className="text-gray-700">Looking for: {comp.percentage}% {comp.quizLevel}</p>
              <button className='bg-[#7a69de] text-white py-2 px-4 rounded-full mt-4 hover:bg-[#645FCB] transition ease-in-out delay-100 hover:scale-110 duration-150'>Postular</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfilePostulant_edit;
