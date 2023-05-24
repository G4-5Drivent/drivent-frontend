import React from 'react';
import styled from 'styled-components';

const StyledButtonDayFilter = styled.button`
  width: 131px;
  height: 37px;
  background: #e0e0e0;
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

  color: #000000;
`;

const formatDate = (dateString) => {
  const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  const dateObj = new Date(dateString);
  const dayOfWeek = daysOfWeek[dateObj.getDay()];
  const day = dateObj.getDate() + 1;
  const month = dateObj.getMonth() + 1;

  return `${dayOfWeek}, ${day}/${month}`;
};

export default function ButtonDayFilter({ date, onClick }) {
  return <StyledButtonDayFilter onClick={onClick}>{formatDate(date)}</StyledButtonDayFilter>;
}
