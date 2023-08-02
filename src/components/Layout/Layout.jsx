import Header from '../Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
	<Header/>
      <Suspense fallback={<p>Loading....</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
