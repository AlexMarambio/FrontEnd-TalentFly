import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

interface CircleProps {
  profile: {
    name: string;
    role: string;
    level: string;
    validations: number;
    imgSrc: string;
  };
}

const Answers: React.FC<CircleProps> = ({ profile }) => {
  const [progress, setProgress] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const getColor = (score: number) => {
    if (score <= 40) {
      return '#FF0000'; // Rojo
    } else if (score <= 70) {
      return '#FFA500'; // Naranja
    } else {
      return '#008000'; // Verde
    }
  };

  const getStatusText = (score: number) => {
    if (score <= 40) {
      return 'Reprobado';
    } else if (score <= 70) {
      return 'Intermedio';
    } else {
      return 'Aprobado';
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= profile.validations) {
          clearInterval(intervalId);
          return profile.validations;
        }
        return prevProgress + 1;
      });
    }, 20);

    if (progress === profile.validations) {
      setTimeout(() => {
        setShowButtons(true);
      }, 500); // Retardo de 500ms para mostrar los botones después de completar la barra de progreso
    }

    return () => clearInterval(intervalId);
  }, [progress, profile.validations]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: '#fff', 
        padding: '20px', 
        borderRadius: '10px', 
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)', 
        width: '500px' // Ancho incrementado para un diseño más espacioso
      }}>
        <img 
          src={profile.imgSrc} 
          alt={profile.name} 
          style={{ 
            width: '100px', 
            height: '100px', 
            borderRadius: '50%', 
            marginRight: '20px' 
          }} 
        />
        <div style={{ marginRight: '20px' }}>
          <h3 style={{ margin: '0', fontSize: '18px' }}>{profile.name}</h3>
          <p style={{ margin: '5px 0 5px 0', fontSize: '14px', color: '#666' }}>{profile.role}</p>
          <p style={{ margin: '0', fontSize: '12px', color: '#999' }}>{profile.level}</p>
        </div>
        <div style={{ textAlign: 'center', width: '150px' }}>
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            styles={buildStyles({
              textColor: getColor(progress),
              pathColor: getColor(progress),
              trailColor: '#d6d6d6',
              textSize: '25px'
            })}
          />
          <p style={{ marginTop: '10px', fontSize: '16px', fontWeight: 'bold', color: getColor(progress) }}>
            {getStatusText(progress)}
          </p>
        </div>
      </div>

      {/* Botones con animación de aparición debajo del container principal */}
      {showButtons && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', animation: 'fadeIn 1s forwards' }}>
          {progress <= 40 && (
            <button 
              onClick={() => window.location.reload()} 
              style={{ 
                backgroundColor: '#8877e4', 
                color: '#fff', 
                padding: '10px 20px', 
                borderRadius: '5px', 
                marginRight: '10px' 
              }}
            >
              Reiniciar
            </button>
          )}
          <Link to="/profile2" style={{ 
            textDecoration: 'none' 
          }}>
            <button 
              style={{ 
                backgroundColor: '#888', 
                color: '#fff', 
                padding: '10px 20px', 
                borderRadius: '5px' 
              }}
            >
              Ir a la página principal
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Answers;
