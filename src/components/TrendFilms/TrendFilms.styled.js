import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Links = styled(Link)`
  text-decoration: none;
`;

export const List = styled.ul`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ListItem = styled.li`
  width: 380px;
  transform: scale(1);
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: rgba(176, 130, 171, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  display: flex;
  flex-direction: column;
  margin-right: 60px;
  margin-bottom: 36px;
  &:hover {
    transform: scale(1.05);
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;
