import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0f2027,
    #203a43,
    #2c5364
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0f2027,
    #203a43,
    #2c5364
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 100%;
  min-height: 100vh;
`;

export const Header = styled.header`
  height: 70px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  padding-top: 20px;
`;

export const NavBtn = styled(NavLink)`
  padding: 23px 8px;
  margin-left: 20px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: white;
  transition: all 250ms ease;

  &:hover,
  &:focus {
    color: orange;
  }
  &.active {
    border-bottom: 3px solid #f1962e;
    color: #f1962e;
  }
`;
