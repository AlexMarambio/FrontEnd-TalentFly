import React, { useState, useEffect } from 'react';
import Question from './components/Questions';
import questionsData from './data.json';
import Circle from './components/Circle';

interface QuestionData {
  Q: string;
  Choices: string;
  Correct: string;
}

interface ProcessedQuestionData {
  Q: string;
  Choices: { value: string; label: string }[];
  Correct: string;
}

const App: React.FC = () => {
  const [questions, setQuestions] = useState<ProcessedQuestionData[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [finalScore, setFinalScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const processQuestions = (data: QuestionData[]): ProcessedQuestionData[] => {
      return data.map(question => {
        const choices = question.Choices.split(' | ').map(choice => {
          const [value, label] = choice.split(': ');
          return { value, label };
        });
        return { ...question, Choices: choices, Correct: question.Correct };
      });
    };

    setQuestions(processQuestions(questionsData));
  }, []);

  const handleOptionChange = (question: string, value: string) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [question]: value
    }));
    setError(null); // Clear error when an option is selected
  };

  const handleNextQuestion = () => {
    if (!answers[questions[currentQuestionIndex].Q]) {
      setError('Debes seleccionar una para avanzar.');
      return;
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
      const correctAnswers = questions.filter(
        (question) => answers[question.Q] === question.Correct
      ).length;
      const score = (correctAnswers / questions.length) * 100;
      setFinalScore(score);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setError(null); // Clear error when moving to the previous question
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setShowAnswers(false);
    setAnswers({});
  };

  return (
    <div className="flex flex-col h-screen">
      <nav className="relative h-28"> {/* Adjusted height to make the navbar bigger */}
        <video autoPlay muted loop className="absolute w-full h-full object-cover">
          <source src="https://talenfly.com/wp-content/uploads/2021/12/pexels-rostislav-uzunov-9150545.mp4" type="video/mp4" />
        </video>
        <div className="relative flex items-center justify-center h-full">
          <img src="https://talenfly.com/wp-content/uploads/2021/12/Logo_Talenfly-300x83.png" alt="Logo" className="h-16" /> {/* Adjusted size of the logo */}
        </div>
      </nav>

      <div className="progress-bar-container">
        <div className="w-full bg-gray-300 rounded-full h-2 shadow-inner">
          <div
            className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-width duration-500 ease-in-out"
            style={{
              width: `${showResults ? 100 : (currentQuestionIndex / questions.length) * 100}%`
            }}
          ></div>
        </div>
      </div>

      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="p-6 max-w-md w-full">
          {!showResults ? (
            !showAnswers && questions.length > 0 ? (
              <>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700">
                    Pregunta {currentQuestionIndex + 1} de {questions.length}
                  </p>
                </div>
                <div className={`space-y-5 rounded-3xl shadow-lg p-5 ${error ? 'border border-red-500' : 'border border-[#7a69de]'} bg-white`}>
                  <Question
                    {...questions[currentQuestionIndex]}
                    selectedOption={answers[questions[currentQuestionIndex].Q] || ''}
                    onOptionChange={value => handleOptionChange(questions[currentQuestionIndex].Q, value)}
                  />
                  {error && (
                    <p className="text-red-500">{error}</p>
                  )}
                </div>
                <div className="flex justify-between mt-4">
                  {currentQuestionIndex > 0 && (
                    <button
                      onClick={handlePreviousQuestion}
                      className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2"
                    >
                      Anterior
                    </button>
                  )}
                  <button
                    onClick={handleNextQuestion}
                    className={`bg-[#8877e4] text-white py-2 px-4 rounded-md ${currentQuestionIndex === 0 ? 'ml-auto' : ''}`}
                  >
                    {currentQuestionIndex < questions.length - 1 ? 'Siguiente' : 'Enviar'}
                  </button>
                </div>
              </>
            ) : (
              <div className={`mt-4 p-4 rounded-3xl shadow-lg bg-white ${error ? 'border border-red-500' : 'border border-[#7a69de]'}`}>
                <h2 className="text-lg font-bold mb-4">Respuestas Seleccionadas:</h2>
                <ul className="space-y-2">
                  {questions.map((question, index) => (
                    <li key={index} className='border-b border-gray-300 pb-2'>
                      <p className="font-semibold">{index + 1}. {question.Q}</p>
                      <p>Respuesta: {answers[question.Q]}</p>
                    </li>
                  ))}
                </ul>
                <div className='flex justify-between mt-4'>
                  <button onClick={handleRestart} className="bg-gray-500 text-white py-2 px-4 rounded-md">
                    Volver
                  </button>
                  <button onClick={handleNextQuestion} className="bg-[#8877e4] text-white py-2 px-4 rounded-md">
                    Confirmar
                  </button>
                </div>
              </div>
            )
          ) : (
            <Circle score={finalScore} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
