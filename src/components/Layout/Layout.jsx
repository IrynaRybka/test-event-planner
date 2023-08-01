import Header from '../Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
	<Header/>
      <Suspense fallback={<p>Loading....</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
