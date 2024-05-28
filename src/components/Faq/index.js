import React, { useState } from "react";
import { Box, BoxSection, Circle, Container, Section } from "./styled";
import { FaPlus, FaTimes } from "react-icons/fa";
import { primaryColor } from "../../config/colors";

const content = [
  {
    id: 0,
    title: "Lorem ipslum",
    text: "Lorem ipsum dolor sit amet. Et enim mollitia qui totam nobis cum reprehenderit enim est porro iure nam enim nobis eos soluta assumenda ea eligendi esse. Sed quis nobis aut dolorem consectetur sed quia nobis et dolorem vitae et possimus enim qui exercitationem beatae. Aut commodi quia quo expedita laboriosam est voluptatem galisum. Ab perferendis quam qui alias praesentium et rerum molestiae sed alias voluptatibus ex rerum rerum et quae magni.",
  },
  {
    id: 1,
    title: "Lorem ipslum",
    text: "Lorem ipsum dolor sit amet. Et enim mollitia qui totam nobis cum reprehenderit enim est porro iure nam enim nobis eos soluta assumenda ea eligendi esse. Sed quis nobis aut dolorem consectetur sed quia nobis et dolorem vitae et possimus enim qui exercitationem beatae. Aut commodi quia quo expedita laboriosam est voluptatem galisum. Ab perferendis quam qui alias praesentium et rerum molestiae sed alias voluptatibus ex rerum rerum et quae magni.",
  },
  {
    id: 2,
    title: "Lorem ipslum",
    text: "Lorem ipsum dolor sit amet. Et enim mollitia qui totam nobis cum reprehenderit enim est porro iure nam enim nobis eos soluta assumenda ea eligendi esse. Sed quis nobis aut dolorem consectetur sed quia nobis et dolorem vitae et possimus enim qui exercitationem beatae. Aut commodi quia quo expedita laboriosam est voluptatem galisum. Ab perferendis quam qui alias praesentium et rerum molestiae sed alias voluptatibus ex rerum rerum et quae magni.",
  },
  {
    id: 3,
    title: "Lorem ipslum",
    text: "Lorem ipsum dolor sit amet. Et enim mollitia qui totam nobis cum reprehenderit enim est porro iure nam enim nobis eos soluta assumenda ea eligendi esse. Sed quis nobis aut dolorem consectetur sed quia nobis et dolorem vitae et possimus enim qui exercitationem beatae. Aut commodi quia quo expedita laboriosam est voluptatem galisum. Ab perferendis quam qui alias praesentium et rerum molestiae sed alias voluptatibus ex rerum rerum et quae magni.",
  },
  {
    id: 4,
    title: "Lorem ipslum",
    text: "Lorem ipsum dolor sit amet. Et enim mollitia qui totam nobis cum reprehenderit enim est porro iure nam enim nobis eos soluta assumenda ea eligendi esse. Sed quis nobis aut dolorem consectetur sed quia nobis et dolorem vitae et possimus enim qui exercitationem beatae. Aut commodi quia quo expedita laboriosam est voluptatem galisum. Ab perferendis quam qui alias praesentium et rerum molestiae sed alias voluptatibus ex rerum rerum et quae magni.",
  },
  {
    id: 5,
    title: "Lorem ipslum",
    text: "Lorem ipsum dolor sit amet. Et enim mollitia qui totam nobis cum reprehenderit enim est porro iure nam enim nobis eos soluta assumenda ea eligendi esse. Sed quis nobis aut dolorem consectetur sed quia nobis et dolorem vitae et possimus enim qui exercitationem beatae. Aut commodi quia quo expedita laboriosam est voluptatem galisum. Ab perferendis quam qui alias praesentium et rerum molestiae sed alias voluptatibus ex rerum rerum et quae magni.",
  },
  {
    id: 6,
    title: "Lorem ipslum",
    text: "Lorem ipsum dolor sit amet. Et enim mollitia qui totam nobis cum reprehenderit enim est porro iure nam enim nobis eos soluta assumenda ea eligendi esse. Sed quis nobis aut dolorem consectetur sed quia nobis et dolorem vitae et possimus enim qui exercitationem beatae. Aut commodi quia quo expedita laboriosam est voluptatem galisum. Ab perferendis quam qui alias praesentium et rerum molestiae sed alias voluptatibus ex rerum rerum et quae magni.",
  },
  {
    id: 7,
    title: "Lorem ipslum",
    text: "Lorem ipsum dolor sit amet. Et enim mollitia qui totam nobis cum reprehenderit enim est porro iure nam enim nobis eos soluta assumenda ea eligendi esse. Sed quis nobis aut dolorem consectetur sed quia nobis et dolorem vitae et possimus enim qui exercitationem beatae. Aut commodi quia quo expedita laboriosam est voluptatem galisum. Ab perferendis quam qui alias praesentium et rerum molestiae sed alias voluptatibus ex rerum rerum et quae magni.",
  },
];

export default function Faq() {
  const [isOpen, setIsOpen] = useState(Array(content.length).fill(false));
  const toggleContent = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <Container>
      <Section>
        <h1>Saiba mais</h1>
        <BoxSection>
          {content.map((item, index) => {
            const { id, title, text } = item;
            return (
              <Box key={id}>
                <div className="contentTitle">
                  <h2>{title}</h2>
                  <button onClick={() => toggleContent(index)}>
                    {isOpen[index] ? <FaTimes /> : <FaPlus />}
                  </button>
                </div>
                {isOpen[index] && <p>{text}</p>}{" "}
              </Box>
            );
          })}
        </BoxSection>
      </Section>
    </Container>
  );
}
