import { useState} from 'react';
import './App.css';



function App() {
  const [user, setUser] = useState([
    {
      nick: "Alex M",
      quizLevel: "Junior",
      percentage: 80,
      email: "alex@mail.cl",
      description: "Soy un programador novato",
      studies: "Informatica UDP",
      avatar: "https://i.pravatar.cc/150?u=alexml",
      experience:"none"
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
    ,
    {
      comapanyName: "Apple",
      quizLevel: "Junior",
      percentage: 75,
      slogan: "Looking for good employees"
    }
    ,
    {
      comapanyName: "Amazon",
      quizLevel: "Junior",
      percentage: 70,
      slogan: "Looking for good employees"
    }
    ,
    {
      comapanyName: "Funeraria Ivan Martínez",
      quizLevel: "Novato",
      percentage: 60,
      slogan: "Buscando buenos empleados"
    }
  ]);



  return (
    <div className="App">
      <img src='https://talenfly.com/wp-content/uploads/2021/12/cropped-Mesa-de-trabajo-%e2%80%93-2-180x180.jpg' className='logoTF'></img>
      {
        user.map(u => {
          return(
            <div>
              <h1 className='colorTF'>Welcome {u.nick}</h1>
              <form className='userCard'>
                <img src={u.avatar}></img>
                <h3>{u.nick}</h3>
                <p className='userinfo'>Correo: {u.email}</p>
                <p className='userinfo'>Perfil profesional: {u.studies}</p>
                <p className='userinfo'>Experiencia laboral: {u.experience}</p>
                <p className='userinfo'>{u.description}</p>
                <div className='userlevel'>
                  <h2> Nivel: {u.quizLevel} con {u.percentage}% de aprobación</h2>
                </div>
              </form>
            </div>
          )
        })
      }
      <ul className='grid-container'>
        {
          company.map((comp, index) => {
            return (
              <form key={comp.comapanyName}>
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
