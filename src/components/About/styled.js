import styled from "styled-components";
import { fontColor, primaryColor, primaryDarkColor } from "../../config/colors";
import breakpoints from "../../styles/breakpoints";

export const Container = styled.div`
  background: ${primaryColor};
  width: 100%;
  height: auto;
  margin: 25px 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: ${primaryDarkColor};

    @media (max-width: 720px) {
      font-size: 1rem;
    }

    @media (max-width: 450px) {
      font-size: 0.8rem;
    }
  }
`;

export const Section = styled.div`
  text-align: center;
  justify-content: center;
  width: 60%;

  ol li {
    text-align: start;
    margin: 20px 0 20px 20px;
    color: ${fontColor};
  }

  ul li {
    text-align: start;
    margin: 20px 0 20px 25px;
    list-style: square;
    color: ${fontColor};
  }

  h1 {
    margin: 0px 0px 25px;
  }

  h3 {
    margin: 20px 0 30px;
  }

  span {
    color: ${fontColor};
  }
`;
