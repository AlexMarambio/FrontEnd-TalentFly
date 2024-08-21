import React from "react";
import { useNavigate, Link } from "react-router-dom";
import * as Components from "./Components";
import "./styles.css";

const Register: React.FC = () => {
  const [signIn, toggle] = React.useState<boolean>(true);
  const navigate = useNavigate();

  const handlePostulanteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/profile2");
  };

  const handleReclutadorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/profile1");
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form onSubmit={handlePostulanteSubmit}>
          <Components.Title>Regístrate como postulante</Components.Title>
          <Components.Input type="text" placeholder="Nombre" required />
          <Components.Input type="text" placeholder="Apellido" required />
          <Components.Input type="text" placeholder="Profesión" required />
          <Components.Input type="email" placeholder="Email" required />
          <Components.Input type="password" placeholder="Contraseña" required />
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
          <Components.Input type="text" placeholder="Nombre de Empresa" required />
          <Components.Input type="text" placeholder="Cargo" required />
          <Components.Input type="text" placeholder="País" required />
          <Components.Input type="email" placeholder="Email" required />
          <Components.Input type="password" placeholder="Contraseña" required />
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
