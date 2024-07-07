import { useState, useEffect } from 'react';
import './App.css';

type Question = {
  Q: string;
  Choices: string;
  Correct: string;
};

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    fetch('/jsonTanlentFly.json')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error('Error no se encuentran las preguntas:', error));
  }, []);

  return (
    <div className="App">
      <img src='https://talenfly.com/wp-content/uploads/2021/12/Logo_Talenfly-300x83.png'></img>
      <h1>Excel Quiz</h1>
      <ul>
        {
          questions.map((quest, index) => {
            const choices = quest.Choices.split(' | ').map(choice => choice.split(': '));

            return (
              <form key={index}>
                <h2>{quest.Q}</h2>
                {
                  choices.map(([letter, text]) => (
                    <label key={letter}>
                      <input type="radio" name={`answer-${index}`} value={`option${letter.toUpperCase()}`} />
                      {`${letter.toUpperCase()}) ${text}`}
                    </label>
                  ))
                }
              </form>
            );
          })
        }
      </ul>
      <button className='buttonTF'>Submit</button>
    </div>
  );
}

export default App;
