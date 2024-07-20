// src/components/Question.tsx
import React from 'react';

interface Choice {
  value: string;
  label: string;
}

interface QuestionProps {
  Q: string;
  Choices: Choice[];
  Correct: string;
  selectedOption: string;
  onOptionChange: (value: string) => void;
}

const Question: React.FC<QuestionProps> = ({ Q, Choices, selectedOption, onOptionChange }) => {
  return (
    <div className='space-y-6'>
      <h1 className="text-xl font-bold mb-4">{Q}</h1>
      {Choices.map(choice => (
        <div key={choice.value} className="flex items-center">
          <input
            id={`${Q}-${choice.value}`}
            name={Q}
            type="radio"
            value={choice.value}
            checked={selectedOption === choice.value}
            onChange={() => onOptionChange(choice.value)}
            className="mr-2 cursor-pointer w-4 h-4 hover:bg-[#8877e4]  "
          />
          <label
            htmlFor={`${Q}-${choice.value}`}
            className={`text-sm ${selectedOption === choice.value ? 'text-[#8877e4] font-bold' : ''}`}
          >
            {choice.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Question;
