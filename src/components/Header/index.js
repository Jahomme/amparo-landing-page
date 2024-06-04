import React, { useState } from "react";
import { Box, FixedButton, Nav } from "./styled";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes, FaWhatsapp, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

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
          <Link to="/login">
            <button className="loginButton">
              {" "}
              <FaUser />
              <span>ACESSAR</span>
            </button>
          </Link>
        </div>
        <div className="button">
          <button onClick={toggleNavbar}>
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
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
            <Link to="/login">
              <button className="loginButton">
                {" "}
                <FaUser />
                <span>ACESSAR</span>
              </button>
            </Link>
          </div>
        )}
      </Nav>
      <a>
        <FixedButton>
          <a href="https://wa.me/message/GLX5E6IA7AAYB1">
            {" "}
            <FaWhatsapp size={50} />
          </a>
        </FixedButton>
      </a>
    </>
  );
}
