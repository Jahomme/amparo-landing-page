import React from "react";
import { Container, Title } from "./styled";
import homeImage from "../../assets/img1.jpeg";
import { Link } from "react-router-dom";

export default function HomeContainer() {
  return (
    <Container id="Home">
      <Title>
        <h1>
          <span>Terapia</span> não precisa durar anos para mudar sua vida
        </h1>
        <a>
          <Link to="/login">
            <button>Agendar Sessão</button>
          </Link>
        </a>
      </Title>
      <img alt="Foto" src={homeImage}></img>
    </Container>
  );
}
