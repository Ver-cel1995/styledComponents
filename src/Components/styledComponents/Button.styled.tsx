import styled from 'styled-components';
import { MyAnimation } from '../../styles/annimation/annimations';

export const StyledBtn = styled.button`
  border: none;
  background-color: ${props => props.color};
  padding: 10px 20px;
  color: #f3f30d;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: #ebb0e7;
}
  &:last-child {
    background-color: #df3a4d;
}
`
export const SuperBtn = styled(StyledBtn)`
  background-color: #53f470;
  border-radius: 5px;
  animation: ${MyAnimation} 3s cubic-bezier(0, 0, 0.93, 0.89) infinite;
  /* &:hover {
    animation: ${MyAnimation} 3s cubic-bezier(0, 0, 0.93, 0.89) infinite;
  } */
`