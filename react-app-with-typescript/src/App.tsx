import { useState} from 'react';
import './App.css';



function App() {
  const [user, setUser] = useState([
    {
      nick: "Alex M",
      quizLevel: "Junior",
      percentage: 80,
      description: "Soy un programador novato"
    }
  ]);

  const [company, setCompany] = useState([
    {
      comapanyName: "TalentFly",
      quizLevel: "Junior",
      percentage: 80,
      slogan: "Looking for new employees"
    },
    {
      comapanyName: "Google",
      quizLevel: "Junior",
      percentage: 70,
      slogan: "Looking for good employees"
    }
  ]);



  return (
    <div className="App">
      <img src='https://talenfly.com/wp-content/uploads/2021/12/cropped-Mesa-de-trabajo-%e2%80%93-2-180x180.jpg' className='logoTF'></img>
      {
      user.map(u => {
        return(
          <h1 className='colorTF'>Welcome {u.nick}</h1>
          
        )
      })
      }
      <ul>
        {
          company.map((comp, index) => {
            return (
              <form key={index}>
                <h2>{comp.comapanyName}</h2>
                <p>{comp.slogan}</p>
                <p>Looking for: {comp.percentage}% {comp.quizLevel}</p>
                <button className='buttonTF'>Apply</button>
              </form>
            );
          })
        }
      </ul>
      
    </div>
  );
}

export default App;
