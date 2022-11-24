import styled from '@emotion/styled';

export const FilmWrapper = styled.div`
  position: relative;
`;

export const FilmTitle = styled.h1`
  text-decoration: none;
  color: orange;
  color: #eb9128;
  text-align: center;
  justify-content: center;
  vertical-align: baseline;
  align-items: center;
  height: 70px;
  padding: 0 10px;
`;

export const FilmPoster = styled.img`
  width: 100%;
`;

export const Rating = styled.p`
  color: orange;
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  color: white;
  padding: 10px 15px;
  font-size: 18px;
`;
