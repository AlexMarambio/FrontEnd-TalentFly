import React, { useRef } from 'react';
import PostulantCard from '../Cards/PostulantCards/PostulantCards';

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

const CompanyProfile: React.FC = () => {
  const companyInfo = {
    name: 'Tech Innovators Ltd.',
    description: 'Tech Innovators Ltd. is a leading tech company specializing in innovative software solutions and cutting-edge technologies. We are always on the lookout for top talent to join our dynamic team.',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXzKDKAR1D6fayUg12DRFMZTXigK_4I8jeg&s'
  };

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
      name: 'Aarón Pozas',
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
  ];

  const profileRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleFilter = (skillName: string) => {
    const profile = profiles.find(profile => profile.skills.some(skill => skill.name === skillName));
    if (profile) {
      const profileId = `${profile.name}-${skillName}`;
      profileRefs.current[profileId]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const getProfileId = (profileName: string, skillName: string) => {
    return `${profileName}-${skillName}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 px-32 py-8">
      <div className=" mx-auto bg-white p-16 rounded-lg shadow-md">
        <div className="block text-center">
          <img src={companyInfo.imgSrc} alt={companyInfo.name} className="w-32 h-32 mx-auto rounded-16" />
          <div>
            <h1 className="text-3xl font-bold">{companyInfo.name}</h1>
            <p className="text-gray-600 mt-2">{companyInfo.description}</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Postulantes Destacados</h2>
          <div className="flex justify-center mb-8">
            <h1 className='font-bold'>Filtrar por:</h1>
            <button onClick={() => handleFilter('React')} className='bg-purple-500 text-white py-2 px-4 rounded-lg mx-2'>React</button>
            <button onClick={() => handleFilter('SEM')} className='bg-purple-500 text-white py-2 px-4 rounded-lg mx-2'>SEM</button>
            <button onClick={() => handleFilter('Angular')} className='bg-purple-500 text-white py-2 px-4 rounded-lg mx-2'>Angular</button>
            <button onClick={() => handleFilter('MongoDB')} className='bg-purple-500 text-white py-2 px-4 rounded-lg mx-2'>MongoDB</button>
          </div>

          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl font-semibold'>React</h2>
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {profiles.filter(profile => profile.skills.some(skill => skill.name === 'React')).map((profile, index) => (
                <div
                  key={index}
                  ref={el => profileRefs.current[getProfileId(profile.name, 'React')] = el}
                >
                  <PostulantCard {...profile} />
                </div>
              ))}
            </div>

            <h2 className='text-2xl font-semibold'>Angular</h2>
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {profiles.filter(profile => profile.skills.some(skill => skill.name === 'Angular')).map((profile, index) => (
                <div
                  key={index}
                  ref={el => profileRefs.current[getProfileId(profile.name, 'Angular')] = el}
                >
                  <PostulantCard {...profile} />
                </div>
              ))}
            </div>

            <h2 className='text-2xl font-semibold'>MongoDB</h2>
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {profiles.filter(profile => profile.skills.some(skill => skill.name === 'MongoDB')).map((profile, index) => (
                <div
                  key={index}
                  ref={el => profileRefs.current[getProfileId(profile.name, 'MongoDB')] = el}
                >
                  <PostulantCard {...profile} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
