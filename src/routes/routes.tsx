import { Outlet, Route, Routes as AllRoutes } from 'react-router-dom';
import { Header } from '~/components/Header';
import { HomePage } from '~/pages/Home';
import { LoginPage } from '~/pages/Login';
import { RegisterPage } from '~/pages/Register';
import { PrivateRoutes } from './privateRoutes';

function InstaJobsLayout() {
  return (
    <PrivateRoutes>
      <>
        <Header />
        <Outlet />
      </>
    </PrivateRoutes>
  );
}

export function Routes() {
  return (
    <AllRoutes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route element={<InstaJobsLayout />}>
        <Route path='/home' element={<HomePage />} />
      </Route>
    </AllRoutes>
  );
}
