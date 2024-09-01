import React from "react";
import { useNavigate, Link } from "react-router-dom";
import * as Components from "./Components";
import "./styles.css";
import axios from "axios";

const Login2: React.FC = () => {
  const [signIn, toggle] = React.useState<boolean>(true);
  const navigate = useNavigate();

  const handlePostulanteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      email: formData.get("email"),
      contrasena: formData.get("contrasena"),
    };
  
    try {
      const response = await axios.post("http://localhost:8081/login/postulante", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200) {
        navigate("/profile2");
      } else {
        console.error("Error during login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleReclutadorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      email: formData.get("email"),
      contrasena: formData.get("contrasena"),
    };
  
    try {
      const response = await axios.post("http://localhost:8081/login/reclutador", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200) {
        navigate("/profile1");
      } else {
        console.error("Error during login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form onSubmit={handlePostulanteSubmit}>
          <Components.Title>Inicia Sesión como Postulante</Components.Title>
          <Components.Input type="email" placeholder="Email" name="email" required />
          <Components.Input type="password" placeholder="Contraseña" name="contrasena" required />
          <Link to="/register">
            <Components.Anchor>¿No tienes una cuenta? Regístrate</Components.Anchor>
          </Link>
          <Components.Button type="submit">Iniciar Sesión</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form onSubmit={handleReclutadorSubmit}>
          <Components.Title>Inicia Sesión como Reclutador</Components.Title>
          <Components.Input type="email" placeholder="Email" name="email" required />
          <Components.Input type="password" placeholder="Contraseña" name="contrasena" required />
          <Link to="/register">
            <Components.Anchor>¿No tienes una cuenta? Regístrate</Components.Anchor>
          </Link>
          <Components.Button type="submit">Iniciar Sesión</Components.Button>
        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>¿Eres Reclutador?</Components.Title>
            <Components.Paragraph>
              Inicia sesión para encontrar el talento que necesitas para tu empresa en TalenFly.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Reclutador
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>¿Buscas Empleo?</Components.Title>
            <Components.Paragraph>
              Inicia sesión para explorar las oportunidades laborales que TalenFly ofrece para ti.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Postulante
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};

export default Login2;
