import Header from '../Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = ({ value, onChange }) => {
  return (
    <>
      <Header value={value} onChange={onChange} />
      <Suspense fallback={<p>Loading....</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
