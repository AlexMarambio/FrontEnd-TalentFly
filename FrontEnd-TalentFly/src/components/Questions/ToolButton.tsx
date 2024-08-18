import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ToolButtonProps {
  toolName: string;
}

const ToolButton: React.FC<ToolButtonProps> = ({ toolName }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Quiz`);
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 m-2 text-white bg-[#7a69de] rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
    >
      {toolName}
    </button>
  );
};

export default ToolButton;
