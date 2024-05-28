import styled from "styled-components";
import { primaryColor, primaryDarkColor } from "../../config/colors";
import breakpoints from "../../styles/breakpoints";

export const Container = styled.div`
  background: ${primaryColor};
  width: 100%;
  margin: 25px 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: ${primaryDarkColor};
    font-size: 1.3rem;

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

  h1 {
    margin: 0px 0px 25px;
  }
`;
