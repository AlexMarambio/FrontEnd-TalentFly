import React from "react";
import { useNavigate, Link } from "react-router-dom";
import * as Components from "./Components";
import "./styles.css";
import axios from "axios";

const Register: React.FC = () => {
  const [signIn, toggle] = React.useState<boolean>(true);
  const navigate = useNavigate();

  const handlePostulanteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      nombre: formData.get("nombre"),
      apellido: formData.get("apellido"),
      profesion: formData.get("profesion"),
      email: formData.get("email"),
      contrasena: formData.get("contrasena"),
    };
  
    try {
      const response = await axios.post("http://localhost:8081/register/postulante", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200) {
        navigate("/profile2");
      } else {
        console.error("Error during registration");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleReclutadorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      nombre_empresa: formData.get("nombre_empresa"),
      cargo: formData.get("cargo"),
      pais: formData.get("pais"),
      email: formData.get("email"),
      contrasena: formData.get("contrasena"),
    };
  
    try {
      const response = await axios.post("http://localhost:8081/register/reclutador", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200) {
        navigate("/profile1");
      } else {
        console.error("Error during registration");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form onSubmit={handlePostulanteSubmit}>
          <Components.Title>Regístrate como postulante</Components.Title>
          <Components.Input type="text" placeholder="Nombre" name="nombre" required />
          <Components.Input type="text" placeholder="Apellido" name="apellido" required />
          <Components.Input type="text" placeholder="Profesión" name="profesion" required />
          <Components.Input type="email" placeholder="Email" name="email" required />
          <Components.Input type="password" placeholder="Contraseña" name="contrasena" required />
          {/* Reemplazando href con Link */}
          <Link to="/login">
            <Components.Anchor>¿Ya tienes una cuenta?</Components.Anchor>
          </Link>
          <Components.Button type="submit">Crear Cuenta</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form onSubmit={handleReclutadorSubmit}>
          <Components.Title>Regístrate como Reclutador</Components.Title>
          <Components.Input type="text" placeholder="Nombre de Empresa" name="nombre_empresa" required />
          <Components.Input type="text" placeholder="Cargo" name="cargo" required />
          <Components.Input type="text" placeholder="País" name="pais" required />
          <Components.Input type="email" placeholder="Email" name="email" required />
          <Components.Input type="password" placeholder="Contraseña" name="contrasena" required />
          {/* Reemplazando href con Link */}
          <Link to="/login">
            <Components.Anchor>¿Ya tienes una cuenta?</Components.Anchor>
          </Link>
          <Components.Button type="submit">Crear Cuenta</Components.Button>
        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>¿Buscas personal?</Components.Title>
            <Components.Paragraph>
              Regístrate como Reclutador para que veas los talentos disponibles en TalenFly, contactando con los mejores para tu empresa!
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Reclutador
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>¿Buscas Empleo?</Components.Title>
            <Components.Paragraph>
              Regístrate como Postulante para que veas las ofertas y nuevas oportunidades que TalenFly ofrece para ti!
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

export default Register;
