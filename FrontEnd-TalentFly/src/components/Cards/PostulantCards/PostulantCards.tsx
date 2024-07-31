import React from 'react';

interface Skill {
  name: string;
  percentage: number;
}

interface ProfileCardProps {
  name: string;
  role: string;
  level: string;
  skills: Skill[];
  validations: number;
  ranking: number;
  imgSrc: string;
}

const PostulantCard: React.FC<ProfileCardProps> = ({ name, role, level, skills, validations, ranking, imgSrc }) => {
  return (

    <div className="bg-gray-100 shadow-lg rounded-3xl p-4 ">
        <img src={imgSrc} alt={name} className="w-20 h-32 rounded-3xl absolute" />
      <div className="block items-center bg-white p-4 rounded-2xl mt-6 ">
    <div className=''>
           <div className="ml-4 translate-x-16">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">{role}</p>
          <p className="text-sm text-purple-500">{level}</p>
        </div>
        <div className="mt-4 flex justify-around text-gray-600 mx-6 translate-x-9">
        <span>{validations} Validaciones</span>
        <span>Ranking: {ranking}</span>
        </div> 
    </div>
        
    </div>
      
      <div className="mt-4 bg-white p-4 rounded-2xl shadow-md">
        {skills.map((skill, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between text-gray-700">
              <span>{skill.name}</span>
              <span>{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-purple-500 h-2.5 rounded-full"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <button className="bg-purple-500 text-white py-2 px-4 rounded-lg">Solicitar entrevista</button>
      </div>
    </div>
  );
};

export default PostulantCard;