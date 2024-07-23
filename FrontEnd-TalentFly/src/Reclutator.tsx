import React, { useState, useRef } from 'react';
import ProfileCard from './components/ProfileCard';

interface Skill {
  name: string;
  percentage: number;
}

interface Profile {
  name: string;
  role: string;
  level: string;
  skills: Skill[];
  validations: number;
  ranking: number;
  imgSrc: string;
}

const Reclutator: React.FC = () => {
  const profiles: Profile[] = [
    {
      name: 'Colomba Jara',
      role: 'Full Stack Developer',
      level: 'Nivel medio',
      skills: [
        { name: 'React', percentage: 90 },
        { name: 'Angular', percentage: 70 },
        { name: 'MongoDB', percentage: 85 },
      ],
      validations: 85,
      ranking: 208,
      imgSrc: 'https://i.pravatar.cc/150?u=ColombaJara'
    },
    {
      name: 'Jorge Castillo',
      role: 'UX/UI Designer',
      level: 'Nivel avanzado',
      skills: [
        { name: 'SEO', percentage: 85 },
        { name: 'Adobe XD', percentage: 90 },
        { name: 'Wordpress', percentage: 70 },
      ],
      validations: 231,
      ranking: 45,
      imgSrc: 'https://i.pravatar.cc/150?u=alexmuñoz'
    },
    {
      name: 'Diego Muñoz',
      role: 'SEO/SEM Specialist',
      level: 'Nivel básico',
      skills: [
        { name: 'SEO', percentage: 80 },
        { name: 'SEM', percentage: 95 },
        { name: 'Digital Content Manager', percentage: 75 },
      ],
      validations: 146,
      ranking: 31,
      imgSrc: 'https://i.pravatar.cc/150?u=Diegomunoz'
    },
    {
      name: 'Aarón pozas',
      role: 'Front Stack Specialist',
      level: 'Nivel básico',
      skills: [
        { name: 'C++', percentage: 90 },
        { name: 'React', percentage: 80 },
        { name: 'ElasticSearch', percentage: 75 },
      ],
      validations: 146,
      ranking: 31,
      imgSrc: 'https://i.pravatar.cc/150?u=aronpoza'
    },
    {
      name: 'Diego Perez',
      role: 'UX/UI Designer',
      level: 'Nivel básico',
      skills: [
        { name: 'C++', percentage: 90 },
        { name: 'React', percentage: 80 },
        { name: 'ElasticSearch', percentage: 75 },
      ],
      validations: 146,
      ranking: 31,
      imgSrc: 'https://i.pravatar.cc/150?u=diegope'
    },
    {
      name: 'Martin Benavides',
      role: 'UX/UI Designer',
      level: 'Nivel básico',
      skills: [
        { name: 'Pornhub', percentage: 100 },
        { name: 'Angular', percentage: 60 },
        { name: 'Psicologia Anal', percentage: 75 },
      ],
      validations: 300,
      ranking: 1,
      imgSrc: 'https://i.pravatar.cc/150?u=martinbenavides'
    },
  ];

const [highlightedProfile, setHighlightedProfile] = useState<string | null>(null);
const profileRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

//const [selectedSkill, setSelectedSkill] = useState<string>('');

const handleFilter = (skillName: string) => {
  const profile = profiles.find(profile => profile.skills.some(skill => skill.name === skillName));
  if (profile) {
    const profileId = `${profile.name}-${skillName}`;
    setHighlightedProfile(profileId);
    profileRefs.current[profileId]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

const getProfileId = (profileName: string, skillName: string) => {
  return `${profileName}-${skillName}`;
};


  return (

    <div> {/* Div principal */}
        <nav className="relative h-28"> {/* Adjusted height to make the navbar bigger */}
        <video autoPlay muted loop className="absolute w-full h-full object-cover">
          <source src="https://talenfly.com/wp-content/uploads/2021/12/pexels-rostislav-uzunov-9150545.mp4" type="video/mp4" />
        </video>
        <div className="relative flex items-center justify-center h-full">
          <img src="https://talenfly.com/wp-content/uploads/2021/12/Logo_Talenfly-300x83.png" alt="Logo" className="h-16" /> {/* Adjusted size of the logo */}
        </div>
      </nav>

      <div className='min-h-screen bg-purple-100 p-8'>  {/* Div para encajar las tarjetas de usuarios */}

          <h1 className='text-3xl font-bold text-center mb-8'>
            Candidatos a reclutamiento
          </h1>
            <div className='flex justify-center mb-8'>   {/* Barra de busqueda */}

              <h1 className='font-bold'>  
                Filtrar por:
              </h1>

              <button onClick={() => handleFilter('React')}
                className='bg-purple-500 text-white py-2 px-4 rounded-lg mx-2'>
              React
              </button>
              
              <button onClick={() => handleFilter('SEM')}
              className='bg-purple-500 text-white py-2 px-4 rounded-lg mx-2'>
              SEM
              </button>

              <button onClick={() => handleFilter('Angular')}
              className='bg-purple-500 text-white py-2 px-4 rounded-lg mx-2'>
              Angular
              </button>

              <button onClick={() => handleFilter('MongoDB')}
              className='bg-purple-500 text-white py-2 px-4 rounded-lg mx-2'>
              MongoDB
              </button>

              <button onClick={() => setHighlightedProfile(null)}
              className='bg-purple-500 text-white py-2 px-4 rounded-lg mx-2'>
              Ver Todos
              </button>

            </div>

         {/* Salseo */}
        <div className='max-w-6xl mx-auto'> 

          <h2 className='text-2xl font-semibold'> React </h2>

          <div className="flex overflow-x-auto space-x-4 pb-4">
          {profiles
            .filter(profile => profile.skills.some(skill => skill.name === 'React'))
            .map((profile, index) => (
              <div
                key={index}
                ref={el => profileRefs.current[getProfileId(profile.name, 'React')] = el}
              >
                <ProfileCard {...profile} highlight={highlightedProfile === getProfileId(profile.name, 'React')} />
              </div>
            ))}
        </div>
          
          <h2 className='text-2xl font-semibold'> Angular </h2>

          <div className="flex overflow-x-auto space-x-4 pb-4">
          {profiles
            .filter(profile => profile.skills.some(skill => skill.name === 'Angular'))
            .map((profile, index) => (
              <div
                key={index}
                ref={el => profileRefs.current[getProfileId(profile.name, 'Angular')] = el}
              >
                <ProfileCard {...profile} highlight={highlightedProfile === getProfileId(profile.name, 'Angular')} />
              </div>
            ))}
        </div>

          <h2 className='text-2xl font-semibold'> MongoDB </h2>

          <div className="flex overflow-x-auto space-x-4 pb-4">
            {profiles
              .filter(profile => profile.skills.some(skill => skill.name === 'MongoDB'))
              .map((profile, index) => (
                <div
                  key={index}
                  ref={el => profileRefs.current[getProfileId(profile.name, 'MongoDB')] = el}
                >
                  <ProfileCard {...profile} highlight={highlightedProfile === getProfileId(profile.name, 'MongoDB')} />
                </div>
              ))}
        </div>

          <h2 className='text-2xl font-semibold'> Otros </h2>

          <div className="flex overflow-x-auto space-x-4 pb-4">
            {profiles
              .filter(profile => 
                !profile.skills.some(skill => 
                  ['React', 'Angular', 'MongoDB'].includes(skill.name)))
              .map((profile, index) => (
                <div
                  key={index}
                  ref={el => profileRefs.current[getProfileId(profile.name, 'Otros')] = el}
                >
                  <ProfileCard {...profile} highlight={highlightedProfile === getProfileId(profile.name, 'Otros')} />
                </div>
              ))
            }
          </div>

        </div>  {/* Fin salseo */}

      </div>

    </div>

  );
};

export default Reclutator;
