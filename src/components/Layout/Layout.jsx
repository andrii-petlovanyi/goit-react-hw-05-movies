import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Header, NavBtn } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavBtn to="/">Home</NavBtn>
          <NavBtn to="/Movie">Movie</NavBtn>
        </nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
