import styled, { css } from "styled-components";

// Tipos de props para los componentes estilizados
interface ContainerProps {}
interface SignUpContainerProps {
  signingIn: boolean;
}
interface SignInContainerProps {
  signingIn: boolean;
}
interface OverlayContainerProps {
  signingIn: boolean;
}
interface OverlayProps {
  signingIn: boolean;
}
interface OverlayPanelProps {
  signingIn: boolean;
}
interface LeftOverlayPanelProps {
  signingIn: boolean;
}
interface RightOverlayPanelProps {
  signingIn: boolean;
}

// Contenedor principal
export const Container = styled.div<ContainerProps>`
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 1000px;
  max-width: 100%;
  min-height: 480px;
`;

// Contenedor para el registro
export const SignUpContainer = styled.div<SignUpContainerProps>`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${({ signingIn }) =>
    !signingIn &&
    css`
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
    `}
`;

// Contenedor para el inicio de sesión
export const SignInContainer = styled.div<SignInContainerProps>`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${({ signingIn }) =>
    !signingIn &&
    css`
      transform: translateX(100%);
    `}
`;

// Formulario
export const Form = styled.form`  
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;
`;

// Título
export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 15px;
`;

// Entrada de texto
export const Input = styled.input`
  background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 8px;
    width: 100%;
    outline: none;
`;

// Botón principal
export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #512da8;
  background-color: #512da8;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

// Botón fantasma (transparente)
export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

// Enlace
export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

// Contenedor para el overlay
export const OverlayContainer = styled.div<OverlayContainerProps>`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${({ signingIn }) =>
    !signingIn &&
    css`
      transform: translateX(-100%);
    `}
`;

// Overlay de fondo
export const Overlay = styled.div<OverlayProps>`
  background: #512da8;
  background: -webkit-linear-gradient(to right, #5c6bc0, #512da8);
  background: linear-gradient(to right, #5c6bc0, #512da8);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${({ signingIn }) =>
    !signingIn &&
    css`
      transform: translateX(50%);
    `}
`;

// Panel del overlay
export const OverlayPanel = styled.div<OverlayPanelProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

// Panel del overlay izquierdo
export const LeftOverlayPanel = styled(OverlayPanel)<LeftOverlayPanelProps>`
  transform: translateX(-20%);
  ${({ signingIn }) =>
    !signingIn &&
    css`
      transform: translateX(0);
    `}
`;

// Panel del overlay derecho
export const RightOverlayPanel = styled(OverlayPanel)<RightOverlayPanelProps>`
  right: 0;
  transform: translateX(0);
  ${({ signingIn }) =>
    !signingIn &&
    css`
      transform: translateX(20%);
    `}
`;

// Párrafo
export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;
