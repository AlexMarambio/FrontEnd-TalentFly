import React from 'react';
import './PercentageCircle.css';

interface Question {
  Q: string;
  Choices: { value: string; label: string }[];
  Correct: string;
}

interface ResultPageProps {
  //userName: string;
  //subject: string;
  //photoUrl: string;
  answers: { [key: string]: string };
  questions: Question[];
  finalScore?: number; // Propiedad opcional para mostrar el puntaje final
  handleRestart?: () => void; // Función opcional para reiniciar el cuestionario
}

const Answers: React.FC<ResultPageProps> = ({answers, questions, finalScore, handleRestart }) => {
  const correctAnswers = questions.filter(q => answers[q.Q] === q.Correct).length;
  const totalQuestions = questions.length;
  const score = (correctAnswers / totalQuestions) * 100;

  const getColor = (percentage: number) => {
    if (percentage <= 30) return 'red';
    if (percentage <= 65) return 'orange';
    return 'green';
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">


        <h1 className="text-2xl font-bold mb-2">Nombre del usuario</h1>
        <p className="text-gray-600 mb-4">Curso</p>
        <div className="percentage-circle" style={{ borderColor: getColor(score) }}>
          <span>{Math.round(score)}%</span>
        </div>
        {finalScore !== undefined && (
          <p className="text-lg mt-4">Puntaje Final: {Math.round(finalScore)}</p>
        )}
        {handleRestart && (
          <button onClick={handleRestart} className="mt-4 bg-[#8877e4] text-white py-2 px-4 rounded-md">
            Reiniciar
          </button>
        )}
      </div>
    </div>
  );
};

export default Answers;

/*
<img
          src={photoUrl}
          alt="User"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
*/