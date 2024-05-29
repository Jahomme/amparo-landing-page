import styled from "styled-components";
import {
  primaryColor,
  primaryDarkColor,
  tertiaryColor,
} from "../../config/colors";

export const Nav = styled.nav`
  background: ${tertiaryColor};
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  button {
    background-color: transparent;
  }

  img {
    width: 20%;
    height: 20%;
  }

  a {
    color: #fff;
    margin: 0 20px;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;

    &:hover {
      filter: brightness(85%);
    }
  }

  @media (max-width: 1200px) {
    .links {
      display: none;
    }
    .links-open {
      display: flex;
      flex-direction: column;
      width: 30%;
    }
    .links-open a {
      color: #fff;
      margin: 0 10px;
      flex: 1 1 45%;
      margin: 5px 0;
    }
  }

  @media (max-width: 500px) {
    img {
      width: 25%;
      height: 25%;
    }
  }

  @media (max-width: 450px) {
    img {
      width: 33%;
      height: 33%;
    }
  }

  @media (min-width: 1200px) {
    .button {
      display: none;
    }
    .links-open {
      display: none;
    }
  }

  p {
    color: ${primaryDarkColor};
  }
`;

export const FixedButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 85px;
  height: 85px;
  background-color: #25d366;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 999; /* Garante que o botão esteja sempre sobre os outros elementos */
`;
