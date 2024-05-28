import React, { useState } from "react";
import { Box, FixedButton, Nav } from "./styled";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Nav>
        <a className="logo" title="Logo" href="#Home">
          <img alt="Foto" src={logo}></img>
        </a>
        <div className="links">
          {" "}
          <a title="Início" href="#Home">
            INÍCIO
          </a>
          <a title="SOBRE NÓS" href="#About">
            SOBRE NÓS
          </a>
          <a title="EQUIPE" href="#Team">
            EQUIPE
          </a>
          <a title="CONTATO" href="#Contact">
            CONTATO
          </a>
        </div>
        <div className="button">
          <button onClick={toggleNavbar}>
            {isOpen ? <FaTimes size={17} /> : <FaBars size={17} />}
          </button>
        </div>
        {isOpen && (
          <div className="links-open">
            {" "}
            <a title="Início" href="#Home">
              INÍCIO
            </a>
            <a title="SOBRE NÓS" href="#About">
              SOBRE NÓS
            </a>
            <a title="EQUIPE" href="#Team">
              EQUIPE
            </a>
            <a title="CONTATO" href="#Contact">
              CONTATO
            </a>
          </div>
        )}
      </Nav>
      <a>
        <FixedButton>
          <FaWhatsapp size={50} />
        </FixedButton>
      </a>
    </>
  );
}
