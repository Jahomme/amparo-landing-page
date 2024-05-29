import React from "react";
import { Line, BoxSection, Circle, Container, Section } from "./styled";
import logo from "../../assets/logo.png";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import { primaryColor } from "../../config/colors";

export default function Footer() {
  return (
    <Container>
      <Line></Line>

      <Section>
        <div className="image">
          {" "}
          <img alt="Foto" src={logo}></img>
        </div>
        <div>
          <h2>Redes</h2>
          <ul>
            <li>
              <FaWhatsapp /> 84 9 9999-9999
            </li>
            <li>
              <FaInstagram /> @ampara_psicologia
            </li>
            <li>
              <FaEnvelope /> amparapsicologia@gmail.com
            </li>
          </ul>
        </div>
        <div>
          <h2>Menu</h2>
          <ul>
            <li>
              <a title="Início" href="#Home">
                INÍCIO
              </a>
            </li>
            <li>
              {" "}
              <a title="SOBRE NÓS" href="#About">
                SOBRE NÓS
              </a>
            </li>
            <li>
              <a title="EQUIPE" href="#Team">
                EQUIPE
              </a>
            </li>
            <li>
              {" "}
              <a title="CONTATO" href="#Contact">
                CONTATO
              </a>
            </li>
          </ul>
        </div>
      </Section>
      <p>Feito por Jadilson Igor</p>
    </Container>
  );
}

