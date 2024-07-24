import React, { useEffect, useState } from 'react';
import './Circle.css';

interface CircleProps {
  score: number;
}

const Circle: React.FC<CircleProps> = ({ score }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < score) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 10);
    return () => clearInterval(interval);
  }, [score]);

  return (
    <div className='circle'>
      <div className='circular-progress' style={{ background: `conic-gradient(#9400d3 ${progress * 3.6}deg, #e3e3e3 ${progress * 3.6}deg)` }}>
        <span className='progress-value'>
          {progress}%
        </span>
      </div>
      <span className='text'>
        Resultado del cuestionario
      </span>
    </div>
  );
};

export default Circle;
