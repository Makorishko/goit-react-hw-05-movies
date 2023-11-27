import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './Header-styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Link = styled(NavLink)`
  &.active {
    color: red;
  }
  padding-right: 10px;
`;
export const Layout = () => {
  const location = useLocation();
  return (
    <div>
      <Header>
        <nav>
          <Link to="/" state={{ from: location }}>
            Home
          </Link>
          <Link to="/movies" state={{ from: location }}>
            Movie
          </Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
