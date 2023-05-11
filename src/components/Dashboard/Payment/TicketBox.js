import styled from 'styled-components';

function TicketBox({ children, onClick, selected }) {
  return (
    <StyledTicketBox selected={selected} onClick={onClick}>
      {children}
    </StyledTicketBox>
  );
}

const StyledTicketBox = styled.button`
  box-sizing: border-box;
  width: 145px;
  height: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 17px;
  background-color: ${(props) => (props.selected ? '#FFEED2' : 'transparent')};
  :hover{
    background-color: #FFEED2;
    cursor: pointer;
  }

  h1 {
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #454545;
    font-weight: 400;
  }

  h2 {
    line-height: 16px;
    text-align: center;
    font-size: 14px;
    color: #898989;
  }
`;

export default TicketBox;
