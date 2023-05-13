import styled from 'styled-components';

export default function ConfirmButton({ label, onClick }) {
  return <StyledConfirmButton onClick= {onClick} >{label}</StyledConfirmButton>;
}

const StyledConfirmButton = styled.button`
  width: 162px;
  height: 37px;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  font-size: 12px;
  margin-top: 17px;
  color: #000000;
  font-weight: 500;
  :hover {
    cursor: pointer;  
    background-color: lightgray;
  }

`;
