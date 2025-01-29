import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <div style={{ padding: '10px' }}>
        <div
          style={{ width: '100%', padding: '1rem', border: '1px solid #ccc' }}
        >
          Header
          <div>
            <ul style={{}}>
              <li>
                <Link to={'/about'} element={<About />}>
                  About
                </Link>
              </li>{' '}
              <li>
                <Link to={'/home'} element={<Home />}>
                  Home
                </Link>
              </li>{' '}
              <li>
                {' '}
                <Link to={'/serve'} element={<Serve />}>
                  Serve
                </Link>
              </li>{' '}
              <li>
                {' '}
                <Link to={'/pro'} element={<Layout2 />}>
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            width: '100%',
            height: '80vh',
            marginTop: '1rem',
            border: '1px solid #ccc',
            padding: '10px',
          }}
        >
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default Layout;
