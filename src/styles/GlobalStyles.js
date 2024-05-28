import styled, { createGlobalStyle } from "styled-components";
import * as colors from "../config/colors";
import breakpoints from "./breakpoints";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body{
  font-family: "Segoe UI", sans-serif;
  background-color: ${colors.primaryColor};
  color: ${colors.primaryDarkColor};
  width: 100%;
}

html, body, #root{
  height: 100%;
}

p{
  color: ${colors.fontColor};

}

h1 {
  font-size: 3rem;
  color: ${colors.fontColor};

  @media ${breakpoints.size5} {
      font-size: 2.7rem;

  }

    @media (max-width: 965px) {
      font-size: 2.3rem;

  }

    @media ${breakpoints.size3} {
      font-size: 1.9rem;

  }



}

button{
  cursor: pointer;
  background: ${colors.primaryDarkColor};
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
  transition: all 300ms;

  &:hover {
    filter: brightness(85%);
  }
}


a{
  text-decoration: none;
  color: ${colors.primaryColor};
}

ul {
  list-style: none;
}


`;

export const Container = styled.section`
  max-width: 100%;
  background: #fff;
  padding: 30px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
