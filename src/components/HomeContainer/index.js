import React from "react";
import { Container, Title } from "./styled";
import homeImage from "../../assets/img1.jpeg";

export default function HomeContainer() {
  return (
    <Container id="Home">
      <Title>
        <h1>
          <span>Terapia</span> não precisa durar anos para mudar sua vida
        </h1>
        <a>
          <button>Agendar Sessão</button>
        </a>
      </Title>
      <img alt="Foto" src={homeImage}></img>
    </Container>
  );
}
