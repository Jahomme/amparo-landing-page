import styled from "styled-components";
import {
  primaryColor,
  primaryDarkColor,
  secondaryColor,
} from "../../config/colors";
import breakpoints from "../../styles/breakpoints";

export const Container = styled.div`
  background: ${secondaryColor};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
    height: 500px;
  }

  a {
    color: #fff;
    margin: 0 10px;
    color: ${primaryColor};
  }

  p {
    color: ${primaryDarkColor};
    font-size: 1.3rem;
  }
`;

export const Section = styled.div`
  text-align: center;
  justify-content: center;
  width: 50%;
  margin: 10px;

  h1 {
    margin: 25px 0px;
    color: #fff;
  }
`;

export const BoxSection = styled.div`
  text-align: center;
  display: grid;
  grid: repeat(2, 150px) / auto-flow;

  @media ${breakpoints.size4} {
    grid: repeat(6, 100px) / auto-flow;
  }
`;

export const Box = styled.div`
  text-align: center;
  margin: 0 10px;

  p {
    font-size: 1rem;
    color: #fff;

    @media (max-width: 750px) {
      font-size: 0.8rem;
    }
  }
`;
