import styled from "styled-components";
import { primaryColor, primaryDarkColor, fontColor } from "../../config/colors";
import breakpoints from "../../styles/breakpoints";

export const Container = styled.div`
  text-align: center;
  background: ${primaryColor};
  padding: 25px;
  align-items: center;
  justify-content: center;

  h1 {
    padding: 0 25px 50px 25px;
  }

  a {
    color: #fff;
    margin: 0 10px;
    color: ${primaryColor};
  }

  p {
    color: ${primaryDarkColor};
  }
`;

export const Item = styled.div`
  display: flex;
  margin: 0 5px 50px;
  width: 90%;
  padding: 5px;
  border-radius: 5px;
  border: solid 1px #7d7d7d;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  img {
    width: 50%;
    height: 550px;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  margin: 30px 5px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .crp {
    color: ${fontColor};
  }

  .name {
    font-size: 1.1rem;
  }

  span {
    margin: 0 0 15px 10px;
    font-size: 1rem;
    text-align: start;

    @media ${breakpoints.size5} {
      font-size: 0.9rem;
    }

    @media ${breakpoints.size4} {
      font-size: 0.85rem;
    }

    @media ${breakpoints.size3} {
      font-size: 0.8rem;
    }

    @media ${breakpoints.size2} {
      font-size: 0.75rem;
    }

    @media ${breakpoints.size1} {
      font-size: 0.7rem;
    }
  }
`;
