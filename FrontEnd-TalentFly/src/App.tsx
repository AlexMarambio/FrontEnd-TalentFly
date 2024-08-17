
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/LoginPage/LoginPage';
import Register from './pages/RegPage/RegPage';
import ProfileReclutador from './pages/Profiles/Recruiter';
import ProfilePostulante from './pages/Profiles/Postulant';
import Questions from './components/Questions/Questions'; 

function App() {
  return (
    <BrowserRouter>
      
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile1" element={<ProfileReclutador />} />
          <Route path="/profile2" element={<ProfilePostulante />} />
          <Route path="/Quiz" element={<Questions />} />
          


        </Routes>
        
      </div>

    </BrowserRouter>
  );
}

export default App;
