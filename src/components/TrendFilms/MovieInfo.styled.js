import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
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

export const Wrapper = styled.div`
  padding-top: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
  display: flex;
  align-items: flex-end;

  background: rgba(176, 130, 171, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const WrapperBtn = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-end;
`;

export const WrapperOutlet = styled.div`
  /* padding-top: 25px; */
  padding-right: 25px;
  /* padding-bottom: 25px; */
  display: flex;
  align-items: flex-end;

  background: rgba(176, 130, 171, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Image = styled.img`
  height: 540px;
  margin-left: 20px;
`;

export const Desc = styled.div`
  margin-left: 20px;
  color: white;
  font-weight: 500;
`;

export const TextWrap = styled.span`
  color: orange;
`;

export const Title = styled.h1`
  color: orange;
`;

export const BackBtn = styled(NavLink)`
  transform: scale(1);
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: rgba(248, 246, 248, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 5px;
  width: 45px;
  height: 45px;
  margin: 20px 20px 20px 0;
  text-decoration: none;

  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: scale(1.05);
  }
`;

export const IconBack = styled(BiArrowBack)`
  width: 32px;
  height: 32px;
  fill: white;
  transition: fill 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    fill: orange;
  }
`;
