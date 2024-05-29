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
  height: 50%;
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
  width: 80%;
  margin: 10px;

  h1 {
    margin: 50px 0px;
    color: #fff;
  }
`;

export const BoxSection = styled.div`
  text-align: center;
  display: grid;
  grid: repeat(1, 250px) / auto-flow;

  @media ${breakpoints.size4} {
    grid: repeat(6, 180px) / auto-flow;
  }
`;

export const Line = styled.div`
  background-color: ${primaryDarkColor};
  width: 100%;
  height: 3%;
`;