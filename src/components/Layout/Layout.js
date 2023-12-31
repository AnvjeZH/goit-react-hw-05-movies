import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense>
          <Outlet fallback={<div>Loading...</div>}/>
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
