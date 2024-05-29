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
  height: auto;
  align-items: center;
  justify-content: center;

  a {
    color: #fff;
    color: ${primaryColor};
    &:hover {
      filter: brightness(85%);
    }
  }

  p {
    color: ${primaryColor};
    text-align: center;
  }
`;

export const Section = styled.div`
  text-align: center;
  justify-content: center;
  width: 80%;
  margin: 10px;
  display: flex;
  justify-content: space-between;

  img {
    width: 30%;
    height: 30%;
    object-fit: cover;
    margin: 50px 0;
  }

  h2 {
    color: ${primaryColor};
    text-align: start;
    margin: 20px 0;
  }

  ul li {
    text-align: start;
    color: ${primaryColor};
    margin: 10px 0;
  }

  @media (max-width: 1050px) {
    display: block;

    img {
      margin: 0;
    }
  }

  @media (max-width: 500px) {
    .image {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Line = styled.div`
  background-color: ${primaryDarkColor};
  width: 100%;
  height: 5%;
`;
