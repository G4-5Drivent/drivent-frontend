import React from 'react';
import styled from 'styled-components';

const StyledButtonDayFilter = styled.button`
  width: 131px;
  height: 37px;
  background: ${props => props.selected ? '#FFD37D' : '#e0e0e0'};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  margin-right: 17px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  text-align: center;

  :hover{
    cursor: pointer;
    opacity: 0.9;
  }

  color: #000000;
`;

export default function ButtonDayFilter({ day, date, selected, onClick }) {
  const formatDate = (dateString) => {
    const [, month, dayNum] = dateString.split('-');
  
    return `${day}, ${dayNum}/${month}`;
  };

  return <StyledButtonDayFilter selected={selected} onClick={onClick}>{formatDate(date)}</StyledButtonDayFilter>;
}
