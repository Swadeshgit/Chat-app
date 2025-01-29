import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Set1 from './Set1';
import Set2 from './Set2';
import Set3 from './Set3';

function Layout2() {
  return (
    <>
      <div
        style={{
          width: '100%',
          display: 'flex',
          height: '400px',
        }}
      >
        <div
          style={{
            width: '30%',
            height: '100%',
            backgroundColor: 'crimson',
            margin: '2%',
          }}
        >
          <h3>Profile</h3>
          <hr />
          <div style={{ padding: '4%' }}>
            <Link to={'/pro/set1'} element={<Set1 />}>
              Set1
            </Link>{' '}
            <Link to={'/pro/set2'} element={<Set2 />}>
              Set2
            </Link>{' '}
            <Link to={'/pro/set3'} element={<Set3 />}>
              Set3
            </Link>
          </div>
        </div>
        <div style={{ backgroundColor: 'azure', width: '70%', margin: '2%' }}>
          <h3>Page</h3>
          <hr />

          <h1>
            {/* ye parent ke children ko show karta h */}
            <Outlet />
          </h1>
        </div>
      </div>
    </>
  );
}

export default Layout2;
