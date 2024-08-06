import React, { useState } from 'react';

interface JobOffer {
  id: number;
  title: string;
  salary: string;
  type: 'Full-time' | 'Part-time';
  remote: boolean;
  skillsRequired: string[];
  description: string;
}

interface JobOfferFormProps {
  onSubmit: (jobOffer: JobOffer) => void;
  initialData?: JobOffer;
}

const JobOfferForm: React.FC<JobOfferFormProps> = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [salary, setSalary] = useState(initialData?.salary || '');
  const [type, setType] = useState<JobOffer['type']>(initialData?.type || 'Full-time');
  const [remote, setRemote] = useState(initialData?.remote || false);
  const [skillsRequired, setSkillsRequired] = useState(initialData?.skillsRequired.join(', ') || '');
  const [description, setDescription] = useState(initialData?.description || '');

  const handleSubmit = () => {
    onSubmit({
      id: initialData?.id || Date.now(),
      title,
      salary,
      type,
      remote,
      skillsRequired: skillsRequired.split(',').map(skill => skill.trim()),
      description,
    });
    setTitle('');
    setSalary('');
    setType('Full-time');
    setRemote(false);
    setSkillsRequired('');
    setDescription('');
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg mt-16 mb-4">
      <h3 className="text-xl font-semibold mb-4">{initialData ? 'Editar Oferta' : 'Nueva Oferta'}</h3>
      
      <div className="mb-4">
        <label className="block text-gray-700">Título de la Oferta</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Renta Ofrecida</label>
        <input
          type="text"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Modalidad</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as JobOffer['type'])}
          className="w-full px-4 py-2 border rounded-lg"
        >
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Remoto</label>
        <input
          type="checkbox"
          checked={remote}
          onChange={(e) => setRemote(e.target.checked)}
          className="mr-2"
        />
        <span>{remote ? 'Sí' : 'No'}</span>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Conocimientos Requeridos</label>
        <input
          type="text"
          value={skillsRequired}
          onChange={(e) => setSkillsRequired(e.target.value)}
          placeholder="Separar con comas"
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Descripción del Trabajo</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        {initialData ? 'Guardar Cambios' : 'Publicar Oferta'}
      </button>
    </div>
  );
};

export default JobOfferForm;
