import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Btn = styled.button`
  transform: scale(1);
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  padding: 10px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  color: orange;
  background: rgba(255, 255, 255, 0.45);
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  border: 1px solid rgba(255, 255, 255, 0.225);
  border-radius: 10px;
  :hover {
    transform: scale(1.05);
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;

export const Linked = styled(Link)`
  margin-left: 20px;
  cursor: default;
`;
