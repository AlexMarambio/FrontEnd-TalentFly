import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import NavbarPostulant from '../Navbar/NavbarPostulant';
import { Link } from "react-router-dom";

Chart.register(ArcElement);

function ProfilePostulant() {
  const [skills, setSkills] = useState({
    experiencia: 40,
    powerSkill: 30,
    competenciasTecnicas: 30
  });

  const data = {
    labels: ['Experience', 'Power Skill', 'Technical Competencies'],
    datasets: [{
      data: [skills.experiencia, skills.powerSkill, skills.competenciasTecnicas],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6387', '#36A2EC', '#FFCE54']
    }]
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSkills(prevSkills => ({
      ...prevSkills,
      [name]: Number(value)
    }));
  };

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

  const [user, setUser] = useState([
    {
      nick: "Alex Marambio",
      email: "alexm@tfmail.cl",
      description: "Soy un programador hace 4 años. Me gusta el café, los juego, animales, hacer videos en youtube. Busco trabajo de programador o diseñador web y videojuegos. Soy excelente estudiante.",
      studies: "Ingeniería Civil Informática - Universidad Diego Portales",
      avatar: "https://i.pravatar.cc/150?u=alexmuñoz",
      experience: "1 año"
    }
  ]);

  const [company, setCompany] = useState([
    {
      comapanyName: "TalentFly",
      quizLevel: "Senior",
      percentage: 100,
      slogan: "Looking for new employees"
    },
    {
      comapanyName: "Google",
      quizLevel: "Junior",
      percentage: 70,
      slogan: "Looking for good employees"
    },
    {
      comapanyName: "Apple",
      quizLevel: "Junior",
      percentage: 75,
      slogan: "Looking for good employees"
    },
    {
      comapanyName: "Amazon",
      quizLevel: "Junior",
      percentage: 70,
      slogan: "Looking for good employees"
    },
    {
      comapanyName: "Funeraria Ivan Martínez",
      quizLevel: "Novato",
      percentage: 60,
      slogan: "Buscando buenos empleados"
    }
  ]);

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
      {
        user.map(u => (
          <div key={u.nick} className="text-center m-4">
            <h1 className='text-5xl text-[#7a69de] mb-6 font-bold'>Bienvenido {u.nick}!</h1>
            <form className='block  rounded-3xl userCardTF  mx-auto lg:flex'>
            <div className='relative bg-[#CEE9F5] shadow-lg rounded-3xl overflow-hidden border-2'>
              <div>
                <img src="https://img.freepik.com/vector-gratis/fondo-banner-onda-azul-que-fluye-moderno_1035-19862.jpg" className='absolute top-0 left-0 w-full object-cover z-0 '/>
              </div>
              <div className='relative z-10 p-8'>
                <img src={u.avatar} alt="Avatar" className="w-32 h-32 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-24">{u.nick}</h3>
                <p className='text-left'><strong>Correo:</strong> {u.email}</p>
                <p className='text-left'>{u.description}</p>
                <div className='bg-[#C6D7E8] rounded-2xl p-4 mt-7'>
                  <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {
                      usermedal.map((medal, index) => (
                        <ul key={index} className="">
                          <img src={medal.logo} alt="Medal" className="w-13 h-16 mx-auto mb-2" />
                          <h3 className="text-m font-semibold">{medal.topic}</h3>
                          <p className="text-gray-700 text-sm">Nivel: {medal.level}</p>
                          <p className="text-gray-700 text-sm">Puntuación: {medal.score}%</p>
                        </ul>
                      ))
                    }
                  </ul>
                </div>
                <button className='bg-[#7a69de]  text-white py-2 px-4 rounded-full mt-4 hover:bg-[#645FCB]  transition ease-in-out delay-100 hover:scale-110 duration-150'>
                  <Link to="/profile2_edit"> ✏ </Link>
                  
                </button>
              </div>
            </div>

              <div className="ml-16 max-w-sm  bg-[#f5f1ce] shadow-lg rounded-3xl p-8">
                <h2 className="text-xl mt-4 mb-8 font-semibold">Habilidades</h2>
                <Doughnut data={data} />
                <div className="mt-4 space-y-4">
                  <div className='text-left'>
                    <label>Experiencia</label>
                    <input type="number" name="experiencia" value={skills.experiencia} onChange={handleChange} className="ml-2 p-1 rounded fiftypx" />
                  </div>
                  <div className='text-left'>
                    <label>Power Skill</label>
                    <input type="number" name="powerSkill" value={skills.powerSkill} onChange={handleChange} className="ml-2 p-1 rounded fiftypx" />
                  </div>
                  <div className='text-left'>
                    <label>Competencias Técnicas</label>
                    <input type="number" name="competenciasTecnicas" value={skills.competenciasTecnicas} onChange={handleChange} className="ml-2 p-1 rounded fiftypx" />
                  </div>
                </div>
              </div>
            </form>
            <div className='block  bg-[#cee9f5] shadow-lg rounded-lg p-8 userCardTF  mx-auto mt-8 mb-8'>
              <p className='text-left'><strong>Perfil profesional:</strong> {u.studies}</p>
            </div>
            <div className=' bg-[#cee9f5] shadow-lg rounded-lg p-8 userCardTF  mx-auto'>
              <p className='text-left'><strong>Experiencia laboral:</strong> {u.experience}</p>
              <div className='block lg:flex lg:justify-between'>
                <div className='flex'>
                  <img src='https://avatars.githubusercontent.com/u/25259582?v=4' className='w-28 mt-4'/>
                  <p className='mt-4 ml-8'><strong>6 meses</strong> trabajando en TIBI4 como diseñador gráfico y programador front-end</p>
                </div>
                <div className='mt-auto'>
                    <button className='bg-blue-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-indigo-500  transition ease-in-out delay-100'>Agregar CV</button>
                </div>
              </div>
            </div>

          </div>
        ))
      }
      <div className='block rounded-3xl  userCardTF  mx-auto lg:flex m-4'>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  mt-10'>
          {
            company.map((comp, index) => (
              <form key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold">{comp.comapanyName}</h2>
                <p className="text-gray-700">{comp.slogan}</p>
                <p className="text-gray-700">Looking for: {comp.percentage}% {comp.quizLevel}</p>
                <button className='bg-[#7a69de] text-white py-2 px-4 rounded-full mt-4 hover:bg-[#645FCB]  transition ease-in-out delay-100 hover:scale-110 duration-150'>Postular</button>
              </form>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default ProfilePostulant;