import styled from 'styled-components';

export default function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

const StyledTitle = styled.p`
  font-size: 34px;
  line-height: 40px;
`;
