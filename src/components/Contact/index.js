import React from "react";
import { Container, Section } from "./styled";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <Container id="Contact">
      <Section>
        {" "}
        <h1>Agende sua consulta</h1>
        <h2>
          Cadastre-se ou entre em contato conosco via Whatsapp e em instantes
          nossa equipe irá lhe atender para marcar a sua sessão.
        </h2>
        <Link to="/login">
          <button>Marcar minha sessão</button>
        </Link>
      </Section>
    </Container>
  );
}
