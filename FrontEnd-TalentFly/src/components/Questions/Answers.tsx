import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CircleProps {
  score: number;
}

const Answers: React.FC<CircleProps> = ({ score }) => {
  const [progress, setProgress] = useState(0);

  const getColor = (score: number) => {
    if (score <= 40) {
      return '#FF0000'; // Rojo
    } else if (score <= 70) {
      return '#FFA500'; // Naranja
    } else {
      return '#008000'; // Verde
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= score) {
          clearInterval(intervalId);
          return score;
        }
        return prevProgress + 1; // Ajustar el incremento según sea necesario
      });
    }, 20); // Ajustar el intervalo
  
    return () => clearInterval(intervalId);
  }, [score]);

  return (
    <div style={{ width: '200px', height: '200px' }}>
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        styles={buildStyles({
          textColor: getColor(progress),
          pathColor: getColor(progress),
          trailColor: '#d6d6d6',
          textSize: '20px'
        })}
      />
      <p style={{ textAlign: 'center', marginTop: '20px' , }}>Resultado obtenido</p>
    </div>
  );
};

export default Answers;
