import styled from 'styled-components';

const OrderSummaryBox = styled.button`
  box-sizing: border-box;
  width: 290px;
  height: 108px;
  border: none;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 17px;
  background-color: #FFEED2;
  gap: 10px;
  

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

export default OrderSummaryBox;
