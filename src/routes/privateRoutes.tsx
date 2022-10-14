import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Header } from '~/components/Header';
import { AuthContext } from '~/context/authContext';

function InstaJobsLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export const PrivateRoutes = () => {
  const { signed } = useContext(AuthContext);

  return signed ? <InstaJobsLayout /> : <Navigate to='/' />;
};
