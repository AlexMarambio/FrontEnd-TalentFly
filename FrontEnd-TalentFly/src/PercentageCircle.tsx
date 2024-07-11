import React from 'react';
import './PercentageCircle.css';

interface ResultPageProps {
  userName: string;
  subject: string;
  photoUrl: string;
  answers: { [key: string]: string };
  questions: {
    Q: string;
    Choices: { value: string; label: string }[];
    Correct: string;
  }[];
}

const Answers: React.FC<ResultPageProps> = ({ userName, subject, photoUrl, answers, questions }) => {
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
        <img
          src={photoUrl}
          alt="User"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{userName}</h1>
        <p className="text-gray-600 mb-4">{subject}</p>
        <div className="percentage-circle" style={{ borderColor: getColor(score) }}>
          <span>{Math.round(score)}%</span>
        </div>
      </div>
    </div>
  );
};

export default Answers;
