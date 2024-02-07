import { styled } from "styled-components";
import { Link } from "./Link.styled";
import { mytheme } from "../../styles/theme/Theme";

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media ${mytheme.media.tablet} {
    flex-direction: column
  }
`