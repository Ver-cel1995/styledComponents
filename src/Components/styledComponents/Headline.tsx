import { css, styled } from "styled-components";
import photo from './asserts/images/fine.png'

type PhotoPropsType = {
    filling?: string,
    fontSize?: string,
    urls?: string,
    one?: boolean
    two?: boolean,
    border?: string
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
export const Button = styled.button<PhotoPropsType>`
    background-color: ${props => props.filling || "#red"};
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    transition: all 0.5s;
    font-size: ${props => props.fontSize};
    

    ${props => props.one && css<PhotoPropsType>`
        color: snow;

        &:hover{
            color: #FDC87C;
        };
    `}

    ${props => props.two && css<PhotoPropsType>`
        color: #000;
        background-color: ${props => props.filling || "#red"};
        border: 2px solid rgb(78, 113, 254);

        &:hover{
            background-color: rgb(78, 113, 254);
            color: #FDC87C;
        }
    `};
`

export function PhotoSet(props: PhotoPropsType) {
    return (
        <div>
            <Image src={props.urls}/>
        </div>
    )
};

const Image = styled.img<PhotoPropsType>`
    border-radius: ${props => props.border};
`