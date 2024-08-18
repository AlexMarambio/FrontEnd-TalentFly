import React from 'react';
import ToolButton from './ToolButton';

const tools = ['Excel', 'Python','C++','JavaScript','React', 'TypeScript', 'TailwindCSS', 'Godot', 'HTML'];

const ToolsPage: React.FC = () => {
  return (
    <div className="container mx-auto my-10 p-6">
      <h1 className="text-3xl font-bold mb-6">Selecciona una herramienta</h1>
      <h3 className="text-xl mb-6">Puedes realizar un quiz en una herramienta para demostrar tus conocimientos y poder competir en las ofertas laborales según tus resultados.</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map(tool => (
          <ToolButton key={tool} toolName={tool} />
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
