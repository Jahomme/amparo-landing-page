import image1 from "../../assets/worker1.png";
import image2 from "../../assets/worker2.png";
import image3 from "../../assets/worker3.png";
import image4 from "../../assets/worker4.png";
import image5 from "../../assets/worker5.png";
import image6 from "../../assets/worker6.png";

import React, { useState, useEffect } from "react";
import { Container, Info, Item } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";

const workers = [
  {
    id: 0,
    name: "Alicia",
    image: image1,
    crp: "00/000.000",
    description:
      "Lorem ipsum dolor sit amet. Et enim mollitia qui totam nobis cum reprehenderit enim est porro iure nam enim nobis eos soluta assumenda ea eligendi esse. Sed quis nobis aut dolorem consectetur sed quia nobis et dolorem vitae et possimus enim qui exercitationem beatae. Aut commodi quia quo expedita laboriosam est voluptatem galisum. Ab perferendis quam qui alias praesentium et rerum molestiae sed alias voluptatibus ex rerum rerum et quae magni.",
    approach: "Psicanálise",
  },
  {
    id: 1,
    name: "José Lucas",
    image: image2,
    crp: "00/000.000",
    description:
      "Meu nome é José Lucas, sou psicólogo formado na Universidade Potiguar (UNP) e sou psicólogo comportamental. Meu objetivo é te ajudar a ter uma vida mais leve e equilibrada com abordagens específicas. Faço atendimento clínico para casais e individuais.",
    approach: "Terapia cognitivo-comportamental (TCC)",
  },
  {
    id: 2,
    name: "Havila Raissa",
    image: image3,
    crp: "00/000.000",
    description:
      "Meu nome é Havila Raissa, sou psicóloga formada na Universidade Potiguar (UNP) e sou psicóloga psicanalista. Atualmente sou psicóloga hospitalar e tenho o objetivo de mudar a vida dos meus pacientes assim como a psicologia mudou a minha.",
    approach: "Psicanálise",
  },
  {
    id: 3,
    name: "Eduarda Fagundes",
    image: image4,
    crp: "00/000.000",
    description:
      "Meu nome é Eduarda Fagundes, sou psicóloga formada na Universidade Potiguar (UNP) e sou psicóloga comportamental. No momento atual na área infantil com foco em transtornos do neurodesenvolvimento. ",
    approach: "Terapia cognitivo-comportamental (TCC)",
  },
  {
    id: 4,
    name: "Clésio Ventura",
    image: image5,
    crp: "00/000.000",
    description:
      "Meu nome é Clésio Ventura, psicólogo formado pela UnP (Universidade Potiguar). Ajudo meus clientes a alcançar equilíbrio nas áreas familiar, profissional e pessoal, promovendo uma vida harmoniosa. Utilizo a Psicologia Psicanalítica para entender o inconsciente e os processos internos que influenciam comportamentos e emoções. Ofereço um espaço seguro e acolhedor para facilitar o autoconhecimento e a resolução de conflitos internos.",
    approach: "Psicanálise",
  },
  {
    id: 5,
    name: "Maria Gabriela",
    image: image6,
    crp: "00/000.000",
    description:
      "Meu nome é Maria Gabriela, sou psicóloga formada pela Universidade Potiguar (UNP). Meu objetivo é construir uma parceria acolhedora com meus clientes, ajudando-os a alcançar as mudanças desejadas. Atuo na Psicoterapia, que considero uma jornada de desenvolvimento pessoal. Durante essa jornada, trabalhamos para promover autoconhecimento, autoconfiança, inteligência emocional, bem-estar e saúde mental. Como Psicóloga Clínica, minha principal função é facilitar o desenvolvimento pessoal de cada cliente.",
    approach: "Psicologia Clínica",
  },
];

export default function Team() {
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 760) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <h1 id="Team">Nossa Equipe</h1>
      <Swiper
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        navigation={{ clickable: true }}
        loop={true}
        centeredSlides={true}
      >
        {workers.map((item) => {
          const { id, name, image, crp, description, approach } = item;
          return (
            <>
              <SwiperSlide key={id}>
                {" "}
                <Item>
                  {" "}
                  <img src={image} alt="Slider"></img>
                  <Info>
                    <span>
                      <b>Nome: </b>
                      {name}
                    </span>
                    <span className="crp">
                      <b>CRP: </b>
                      {crp}
                    </span>
                    <span>
                      <b>Sobre mim: </b>
                      {description}
                    </span>
                    <span>
                      <b>Abordagem: </b>
                      {approach}
                    </span>
                  </Info>
                </Item>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </Container>
  );
}
