import React from 'react';
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
  // Aquí podrías definir la información de la empresa, como el nombre y la descripción.
  const companyInfo = {
    name: 'Tech Innovators Ltd.',
    description: 'Tech Innovators Ltd. is a leading tech company specializing in innovative software solutions and cutting-edge technologies. We are always on the lookout for top talent to join our dynamic team.',
    imgSrc: 'https://i.pravatar.cc/150?u=companylogo'
  };

  // Lista de postulantes para mostrar en el perfil de la empresa
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

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center">
          <img src={companyInfo.imgSrc} alt={companyInfo.name} className="w-32 h-32 rounded-full mr-4" />
          <div>
            <h1 className="text-3xl font-bold">{companyInfo.name}</h1>
            <p className="text-gray-600 mt-2">{companyInfo.description}</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Postulantes Destacados</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {profiles.map((profile, index) => (
              <PostulantCard key={index} {...profile} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
