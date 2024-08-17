
import Recruiter from '../../components/Profile/ProfileCompany'
import NavbarCompany from '../../components/Navbar/NavbarCompany'

const RecruiterPage = () => {
  return (
    <div>
         <nav className="relative h-28">
        <video autoPlay muted loop className="absolute w-full h-full object-cover">
          <source src="https://talenfly.com/wp-content/uploads/2021/12/pexels-weldi-studio-design-8675550.mp4" type="video/mp4" />
        </video>
        <div className="relative flex items-center justify-center h-full">
          <img src="https://talenfly.com/wp-content/uploads/2021/12/Logo_Talenfly-300x83.png" alt="Logo" className="h-16" />
        <NavbarCompany />
        </div>
      </nav>
        <Recruiter />
    </div>
  )
}

export default RecruiterPage