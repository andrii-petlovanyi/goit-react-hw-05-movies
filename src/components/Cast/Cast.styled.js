import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Btn = styled.button`
  transform: scale(1);
  cursor: pointer;
  padding: 10px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  color: white;
  background-color: #5e475c;
  border: none;
  border-radius: 10px 10px 0 0;
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  :hover {
    /* transform: scale(1.05); */
    color: #f2f2f2;
    /* background-color: #91778e; */
    background-color: #91778e;
  }
`;

export const Linked = styled(NavLink)`
  cursor: default;
  &.active {
    color: #f1962e;

    button {
      color: white;
      background-color: #8978a3;
    }
  }
`;

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;

export const CastTitle = styled.h1`
  color: white;
`;
