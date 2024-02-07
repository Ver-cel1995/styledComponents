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
    border: none;
    // 1-й способ (статичный) background-color: ${props => props.Backcolor || "#760ef5"};
    padding: 10px 20px;
    // 1-й способ (статичный) color: #f3f30d;
    font-size: ${props => props.fontSize || "2rem"};
    font-weight: bold;
    transition: all 0.5s;

    &:hover {
      background-color: yellow;
    }

// 2-й способ outlned (динамичный)
${props => props.outlned && css<BtnPropsType>`
    border: 1px solid ${props => props.Backcolor || "#f50e0e"};
    background-color: transparent;
    
    
    &:hover {
      border: 1px solid yellow;
      box-shadow: 5px 5px 5px 5px #4800ffd3
    }
  `}
   // 2-й способ primary (динамичный)
  
  ${props => props.primary && css<BtnPropsType>`
    background-color: ${props => props.Backcolor || "#760ef5"};
    color: snow;
      &:hover {
      color: #000;
      box-shadow: 5px 5px 5px 5px #4800ffd3
    }
  `} 
  /* ${props => props.active && css<BtnPropsType>`
    box-shadow: 5px 5px 5px 5px #4800ffd3
  `} */
`