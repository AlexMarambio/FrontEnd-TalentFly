import React, { useState } from 'react';
import ToolButton from './ToolButton';
import NavbarPostulant from '../Navbar/NavbarPostulant';

const tools = ['Excel', 'Python', 'C++', 'JavaScript', 'React', 'TypeScript', 'TailwindCSS', 'Godot', 'HTML'];

const levels = [
  { label: 'Junior', color: 'bg-green-500' },
  { label: 'Semi-Senior', color: 'bg-yellow-500' },
  { label: 'Senior', color: 'bg-orange-500' },
  { label: 'Master', color: 'bg-red-500' },
];

const ToolsPage: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level);
  };

  return (
    <div className='App'>
      <nav className="relative h-28">
        <video autoPlay muted loop className="absolute w-full h-full object-cover">
          <source src="https://talenfly.com/wp-content/uploads/2021/12/pexels-rostislav-uzunov-9150545.mp4" type="video/mp4" />
        </video>
        <div className="relative flex items-center justify-center h-full">
          <img src="https://talenfly.com/wp-content/uploads/2021/12/Logo_Talenfly-300x83.png" alt="Logo" className="h-16" />
          <NavbarPostulant />
        </div>
      </nav>
      
      <div className="container mx-auto my-10 p-6">
        <h1 className="text-3xl font-bold mb-6">¿ACERCA DE QUÉ QUIERES REALIZAR EL QUIZ?</h1>
        <h3 className="text-xl mb-6">Puedes realizar un quiz en una herramienta para demostrar tus conocimientos y poder competir en las ofertas laborales según tus resultados.</h3>
        <div className='bg-gray-100 p-10 rounded-3xl '>
          <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Selecciona tu nivel:</h2>
              <div className="flex justify-center space-x-4">
                {levels.map(level => (
                  <button
                    key={level.label}
                    onClick={() => handleLevelSelect(level.label)}
                    className={`px-4 py-2 mt-5 rounded-3xl text-white font-semibold transition-all duration-300 ${
                      selectedLevel === level.label ? `${level.color} scale-110` : `${level.color} opacity-70`
                    }`}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 mb-4">
            {tools.map(tool => (
              <ToolButton key={tool} toolName={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
