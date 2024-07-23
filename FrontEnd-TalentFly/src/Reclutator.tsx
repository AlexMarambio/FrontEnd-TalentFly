import React, { useState } from 'react';
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
        { name: 'React', percentage: 60 },
        { name: 'Psicologia Anal', percentage: 75 },
      ],
      validations: 300,
      ranking: 1,
      imgSrc: 'https://i.pravatar.cc/150?u=martinbenavides'
    },
  ];

const [sortedProfiles, setSortedProfiles] = useState<Profile[]>(profiles);
const [selectedSkill, setSelectedSkill] = useState<string>('');

const handleFilter = (skillName: string) => {
  const filteredProfiles = [...profiles].sort((a, b) => {
    const aSkill = a.skills.find(skill => skill.name === skillName);
    const bSkill = b.skills.find(skill => skill.name === skillName);
    const aPercentage = aSkill ? aSkill.percentage : 0;
    const bPercentage = bSkill ? bSkill.percentage : 0;
    return bPercentage - aPercentage;
  });
  setSortedProfiles(filteredProfiles);
  setSelectedSkill(skillName);
}


  return (

    <div>

      <div className='min-h-screen bg-purple-100 p-8'>

          <h1 className='text-3xl font-bold text-center mb-8'>
            Candidatos a reclutamiento
          </h1>
            <div className='flex justify-center mb-8'>

              <h1>  
                Filtrar por:
              </h1>

              <button onClick={() => handleFilter('React')}
                className={`bg-purple-500 text-white py-2 px-4 rounded-lg mx-2 ${selectedSkill === 'React' ? 'bg-purple-700' : ''}`}
              >
              React
              </button>
              
              <button onClick={() => handleFilter('SEM')}
              className={`bg-purple-500 text-white py-2 px-4 rounded-lg mx-2 ${selectedSkill === 'SEM' ? 'bg-purple-700' : ''}`}
              >
              SEM
              </button>

              <button onClick={() => handleFilter('Angular')}
              className={`bg-purple-500 text-white py-2 px-4 rounded-lg mx-2 ${selectedSkill === 'Angular' ? 'bg-purple-700' : ''}`}
              >
              Angular
              </button>

              <button onClick={() => handleFilter('MongoDB')}
              className={`bg-purple-500 text-white py-2 px-4 rounded-lg mx-2 ${selectedSkill === 'MongoDB' ? 'bg-purple-700' : ''}`}
              >
              MongoDB
              </button>

            </div>

          <div className='max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2'>
            {sortedProfiles.map((profile, index) => (
              <ProfileCard key={index} {...profile} />
          ))}
          </div>

      </div>

    </div>

  );
};

export default Reclutator;
