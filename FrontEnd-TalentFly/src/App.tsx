import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

function App() {
  const [skills, setSkills] = useState({
    experiencia: 40,
    powerSkill: 30,
    competenciasTecnicas: 30
  });

  const data = {
    labels: ['Experiencia', 'Power Skill', 'Competencias Técnicas'],
    datasets: [{
      data: [skills.experiencia, skills.powerSkill, skills.competenciasTecnicas],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
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
      medal: "https://static.vecteezy.com/system/resources/thumbnails/021/979/332/small/gold-medal-with-red-ribbon-in-flat-style-free-png.png",
      topic: "Excel",
      level: "Middle",
      score: 70
    },
    {
      medal: "https://static.vecteezy.com/system/resources/thumbnails/021/979/332/small/gold-medal-with-red-ribbon-in-flat-style-free-png.png",
      topic: "Python",
      level: "Basic",
      score: 80
    },
    {
      medal: "https://static.vecteezy.com/system/resources/thumbnails/021/979/332/small/gold-medal-with-red-ribbon-in-flat-style-free-png.png",
      topic: "Typescript",
      level: "Middle",
      score: 70
    },
    {
      medal: "https://static.vecteezy.com/system/resources/thumbnails/021/979/332/small/gold-medal-with-red-ribbon-in-flat-style-free-png.png",
      topic: "c++",
      level: "Senior",
      score: 100
    },
    {
      medal: "https://static.vecteezy.com/system/resources/thumbnails/021/979/332/small/gold-medal-with-red-ribbon-in-flat-style-free-png.png",
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
      studies: "Informatica UDP",
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
      <nav className="relative h-28 mb-10">
        <video autoPlay muted loop className="absolute w-full h-full object-cover">
          <source src="https://talenfly.com/wp-content/uploads/2021/12/pexels-rostislav-uzunov-9150545.mp4" type="video/mp4" />
        </video>
        <div className="relative flex items-center justify-center h-full">
          <img src="https://talenfly.com/wp-content/uploads/2021/12/Logo_Talenfly-300x83.png" alt="Logo" className="h-16" />
        </div>
      </nav>
      {
        user.map(u => (
          <div key={u.nick} className="text-center">
            <h1 className='text-5xl text-purple-700 mb-6 font-semibold'>Welcome {u.nick}</h1>
            <form className='block bg-[#e5d2f5] p-8 rounded-lg shadow-md userCardTF  mx-auto lg:flex'>
              <div>
                <img src={u.avatar} alt="Avatar" className="w-32 h-32 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-7">{u.nick}</h3>
                <p className='text-left'><strong>Correo:</strong> {u.email}</p>
                <p className='text-left'><strong>Perfil profesional:</strong> {u.studies}</p>
                <p className='text-left'><strong>Experiencia laboral:</strong> {u.experience}</p>
                <p className='text-left'>{u.description}</p>
                <div className='bg-[#dcb8f9] rounded-lg p-4 mt-7'>
                  <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {
                      usermedal.map((medal, index) => (
                        <ul key={index} className="">
                          <img src={medal.medal} alt="Medal" className="w-13 h-16 mx-auto mb-2" />
                          <h3 className="text-m font-semibold">{medal.topic}</h3>
                          <p className="text-gray-700 text-sm">Nivel: {medal.level}</p>
                          <p className="text-gray-700 text-sm">Puntuación: {medal.score}%</p>
                        </ul>
                      ))
                    }
                  </ul>
                </div>
              </div>

              <div className="ml-16 max-w-sm">
                <h2 className="text-xl mb-4">Distribución de Habilidades</h2>
                <Doughnut data={data} />
                <div className="mt-4 space-y-4">
                  <div>
                    <label>Experiencia</label>
                    <input type="number" name="experiencia" value={skills.experiencia} onChange={handleChange} className="ml-2 p-1 rounded" />
                  </div>
                  <div>
                    <label>Power Skill</label>
                    <input type="number" name="powerSkill" value={skills.powerSkill} onChange={handleChange} className="ml-2 p-1 rounded" />
                  </div>
                  <div>
                    <label>Competencias Técnicas</label>
                    <input type="number" name="competenciasTecnicas" value={skills.competenciasTecnicas} onChange={handleChange} className="ml-2 p-1 rounded" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        ))
      }

      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 mt-10'>
        {
          company.map((comp, index) => (
            <form key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">{comp.comapanyName}</h2>
              <p className="text-gray-700">{comp.slogan}</p>
              <p className="text-gray-700">Looking for: {comp.percentage}% {comp.quizLevel}</p>
              <button className='bg-purple-700 text-white py-2 px-4 rounded-full mt-4'>Apply</button>
            </form>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
