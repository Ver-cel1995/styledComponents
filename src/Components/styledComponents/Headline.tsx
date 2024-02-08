import { styled } from "styled-components";
import photo from './asserts/images/fine.png'

type ImgPropsType = {
    filling?: string,
    fontSize?: string,
    urls?: string
}

export const Headline = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    margin-top: 200px;
    background: rgb(253,201,125);
    background: linear-gradient(0deg, rgba(253,201,125,1) 35%, rgba(93,183,233,1) 70%); 
`   

export const HeadlineWrap = styled.div`
    border-radius: 15px;
    box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
    background: rgb(255, 255, 255);
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 10px 10px 20px 10px;
`

export const Wrapper = styled.div`
    margin: 20px 10px 0 10px;
`

export const TitleHadline = styled.h3`
`

export const TextHadline = styled.p`
    margin: 20px 0 20px 0;
    font-size: 12px;
    font-family: Inter;
    opacity: 0.5;
`

export const WrapBtn = styled.div`
    display: flex;
    gap: 12px;
`
export const Button = styled.button<ImgPropsType>`
    background-color: ${props => props.filling || "#red"};
`

export const Photo = styled.img<ImgPropsType>`
    border-radius: 15px;
    background: url(${props => props.urls});
    
`