import React from "react";
import { Container, Section } from "./styled";
import { FaArrowDown } from "react-icons/fa";

export default function Contact() {
  return (
    <Container id="Contact">
      <Section>
        {" "}
        <h1>Agende sua consulta</h1>
        <h2>
          Entre em contato conosco e em instantes nossa equipe irá lhe atender
          para marcar a sua sessão.
        </h2>
        <a>
          <button>Marcar minha sessão</button>
        </a>
      </Section>
    </Container>
  );
}
