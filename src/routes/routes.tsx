import { Outlet, Route, Routes as AllRoutes } from 'react-router-dom';
import { Header } from '~/components/Header';
import { HomePage } from '~/pages/Home';
import { LoginPage } from '~/pages/Login';

function InstaJobsLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export function Routes() {
  return (
    <AllRoutes>
      <Route path='/' element={<LoginPage />} />
      <Route element={<InstaJobsLayout />}>
        <Route path='/home' element={<HomePage />} />
      </Route>
    </AllRoutes>
  );
}
