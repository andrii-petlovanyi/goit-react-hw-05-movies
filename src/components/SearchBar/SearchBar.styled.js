import styled from '@emotion/styled';

import { BiSearchAlt } from 'react-icons/bi';

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 25px;
  /* height: 65px; */
  /* border-bottom: 4px solid RGBA(0, 8, 0, 0.1); */
`;

export const Input = styled.input`
  margin-right: 5px;
  border-radius: 5px;
  height: 50px;
  width: 70vw;
  padding-left: 15px;
  color: RGBA(0, 8, 0, 0.68);
  font-size: 20px;
  font-weight: 500;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border: 3px solid white;

  @media screen and (min-width: 768px) {
    width: 50vw;
  }

  &:focus {
    border: 3px solid orange;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 24%;
  right: 10px;
  transform: scale(1);
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;

  &:focus {
    transform: scale(1.1);
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: none;
    outline: none;
  }
  &:hover {
    transform: scale(1.1);
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: none;
    outline: none;
  }
`;

export const IconSearch = styled(BiSearchAlt)`
  width: 32px;
  height: 32px;
  margin-top: 10px;
  fill: RGBA(0, 8, 0, 0.68);
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 100%;
  left: 45%;
  font-size: 16px;
  font-weight: 500;
  color: red;
  border-radius: 5px;
`;
