import { css, styled } from "styled-components";

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

export const Title = styled.h1`
    color: #f7ff1c;
`

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 100px;
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

type BtnPropsType = {
  fontSize?: string,
  Backcolor?: string,
  primary?: boolean,
  outlned?: boolean
  active?: boolean
}

export const Btn = styled.button<BtnPropsType>`
    padding: 6px 0 6px 0;
    // 1-й способ (статичный) background-color: ${props => props.Backcolor || "#760ef5"};
    // 1-й способ (статичный) color: #f3f30d;
    font-size: ${props => props.fontSize || "2rem"};
    font-weight: bold;
    transition: all 0.5s;
    border-radius: 5px;
    width: 86px;
    border: none;

    &:hover {
      background-color: rgb(78, 113, 254);
    }

// 2-й способ outlned (динамичный)
${props => props.outlned && css<BtnPropsType>`
    border: 2px solid ${props => props.Backcolor || "#f50e0e"};
    background-color: transparent;
    
    
    &:hover {
      color: #87D3E9
    }
  `}
   // 2-й способ primary (динамичный)
  
  ${props => props.primary && css<BtnPropsType>`
    background-color: ${props => props.Backcolor || "#760ef5"};
    color: snow;
      &:hover {
      color: #87D3E9;
    }
  `}
`