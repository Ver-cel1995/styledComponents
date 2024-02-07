import styled from 'styled-components';
import './App.css';
import { StyledBtn, SuperBtn } from './Components/styledComponents/Button.styled';
import { Link } from './Components/styledComponents/Link.styled';
import { Menu } from './Components/styledComponents/Menu.styled';
import { Box } from './Components/styledComponents/Box.styled';
import { BoxWrapper, Btn, Title, Wrap } from './Components/styledComponents/BoxWrapper';
import { mytheme } from './styles/theme/Theme';
import photo from './asserts/images/fine.png'
import { Headline, HeadlineWrap, TextHadline, TitleHadline, WrapBtn, Wrapper } from './Components/styledComponents/Headline';


function App() {
  return (
    <div className="App">
      <Menu>
        <MenuItem />
      </Menu>
      <Box>
          <StyledBtn as={Link} href='#'>LinkComponent</StyledBtn>
          <StyledBtn as={"a"} href='#'>Link</StyledBtn>
        <StyledBtn>Hello</StyledBtn>
        <SuperBtn>SuperBtn</SuperBtn>
      </Box>
      <BoxWrapper>
        <Title>Styled Components Props</Title>
        <Wrap color="#4abbeb">
          {/* <Btn Backcolor="#4a00f7">Hello</Btn>
          <Btn Backcolor={"red"} >Hello</Btn>
          <Btn fontSize={"10px"}>Hello</Btn> */}
          <Btn primary active>ХАЙ</Btn>
          <Btn primary active Backcolor={mytheme.colors.primary}>ХАЙ</Btn>
          <Btn outlned active Backcolor={"blue"}>ХАЙ</Btn> 
          {/* Backcolor={"blue"} -> статичный способ(1) */}
        </Wrap>
      </BoxWrapper>
      <Headline>
        <HeadlineWrap>
          <Img/>
          <Wrapper>
            <TitleHadline>Headline</TitleHadline>
            <TextHadline>
              Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
            </TextHadline>
            <WrapBtn>
              <Btn primary fontSize="10px" active Backcolor={"rgb(78, 113, 254)"}>See more</Btn> 
              <Btn outlned fontSize="10px" Backcolor={"rgb(78, 113, 254)"}>Save</Btn> 
            </WrapBtn>
          </Wrapper>
        </HeadlineWrap>
      </Headline>
    </div>
  );
}

function MenuItem() {
  return (
    <ul>
      <li>
        <a href="#">Menu Item 1</a>
      </li>
      <li>
        <a href="#">Menu Item 2</a>
      </li>
      <li>
        <a href="#">Menu Item 3</a>
      </li>
    </ul>
  )
}

export default App;

function Img() {
  return (
    <div>
      <Photo src={photo}/>
    </div>
  )
}

const Photo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`