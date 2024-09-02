import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import PostulantCard from '../Cards/PostulantCards/PostulantCards';
import JobOfferForm from '../Cards/PostulantCards/JobOfferForm';
axios.defaults.withCredentials = true;

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

interface JobOffer {
  id: number;
  title: string;
  salary: string;
  type: 'Full-time' | 'Part-time';
  remote: boolean;
  skillsRequired: string[];
  description: string;
}

const CompanyProfile: React.FC = () => {
  const [companyInfo, setCompanyInfo] = useState({
    name: 'usuario',
    description: 'pais',
    imgSrc: ''
  });

  const [jobOffers, setJobOffers] = useState<JobOffer[]>([]);
  const [editingJobOffer, setEditingJobOffer] = useState<JobOffer | null>(null);

  const [experience, setExperience] = useState(50);
  const [technicalSkills, setTechnicalSkills] = useState(50);
  const [softSkills, setSoftSkills] = useState(50);

  const profileRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const response = await axios.get('http://localhost:8081/dashboard/reclutador');
        const firstItem = response.data[0]; // Accede al primer elemento del array
        console.log(firstItem.nombre_empresa); 
        const updatedInfo = {
          name: firstItem.nombre_empresa,
          description: firstItem.email,
          imgSrc: firstItem.pais
        };
        setCompanyInfo(updatedInfo);
        console.log('Updated Company Info:', updatedInfo); // Verifica que el estado se actualice correctamente
      } catch (error) {
        console.error('Error fetching company info:', error);
      }
    };

    fetchCompanyInfo();
  }, []);

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

  const handleAddJobOffer = (jobOffer: JobOffer) => {
    if (editingJobOffer) {
      setJobOffers(jobOffers.map(offer => offer.id === jobOffer.id ? jobOffer : offer));
    } else {
      setJobOffers([...jobOffers, jobOffer]);
    }
    setEditingJobOffer(null);
  };

  const handleEditJobOffer = (jobOffer: JobOffer) => {
    setEditingJobOffer(jobOffer);
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

  return (
    <div className="min-h-screen bg-gray-100 px-32 py-8">
      <div className=" mx-auto bg-white p-16 rounded-lg shadow-md">
        {/* Información de la empresa */}
        <div className="block text-center">
          <img src={companyInfo.imgSrc} alt={companyInfo.name} className="w-32 h-32 mx-auto rounded-16" />
          <div>
            <h1 className="text-3xl font-bold">{companyInfo.name}</h1>
            <p className="text-gray-600 mt-2">{companyInfo.description}</p>
          </div>
        </div>

        {/* Formulario de ofertas laborales */}
        <JobOfferForm onSubmit={handleAddJobOffer} initialData={editingJobOffer || undefined} />

        {/* Controles de ajuste */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Ajustes de filtrado</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <label className="w-48">Experiencia:</label>
              <input
                type="range"
                min="0"
                max="100"
                value={experience}
                onChange={(e) => setExperience(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
              <span className="ml-4">{experience}%</span>
            </div>
            <div className="flex items-center">
              <label className="w-48">Power Skills:</label>
              <input
                type="range"
                min="0"
                max="100"
                value={technicalSkills}
                onChange={(e) => setTechnicalSkills(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
              <span className="ml-4">{technicalSkills}%</span>
            </div>
            <div className="flex items-center">
              <label className="w-48">Habilidades Técnicas:</label>
              <input
                type="range"
                min="0"
                max="100"
                value={softSkills}
                onChange={(e) => setSoftSkills(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
              <span className="ml-4">{softSkills}%</span>
            </div>
          </div>
        </div>

        {/* Listado de ofertas laborales */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Tus Ofertas Laborales</h2>
          <ul>
            {jobOffers.map((offer) => (
              <li key={offer.id} className="p-4 bg-blue-100 shadow-lg rounded-lg mb-4">
                <h3 className="text-lg font-semibold">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>
                <p className="text-sm text-gray-500">{offer.remote ? 'Remoto' : 'Presencial'} - {offer.type}</p>
                <button onClick={() => handleEditJobOffer(offer)} className="text-blue-500 mt-2">Editar</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Postulantes destacados */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Postulantes Destacados</h2>
          <div className="flex justify-center mb-8">
            <h1 className='font-bold'>Filtrar por:</h1>
            <button onClick={() => handleFilter('React')} className='bg-gray-100 text-purple-500 px-4 rounded-md mx-2'>React</button>
            <button onClick={() => handleFilter('SEM')} className='bg-gray-100 text-purple-500 px-4 rounded-md mx-2'>SEM</button>
            <button onClick={() => handleFilter('Angular')} className='bg-gray-100 text-purple-500 px-4 rounded-md mx-2'>Angular</button>
            <button onClick={() => handleFilter('MongoDB')} className='bg-gray-100 text-purple-500 px-4 rounded-md mx-2'>MongoDB</button>
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
