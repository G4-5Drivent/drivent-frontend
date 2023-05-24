import styled from 'styled-components';

export default function Instruction({ children }) {
  return <StyledInstruction>{children}</StyledInstruction>;
}

const StyledInstruction = styled.p`
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
  margin-top: 37px;
`;

