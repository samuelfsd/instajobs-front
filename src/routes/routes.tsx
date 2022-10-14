import { Route, Routes as AllRoutes } from 'react-router-dom';
import { HomePage } from '~/pages/Home';
import { LoginPage } from '~/pages/Login';
import { RegisterPage } from '~/pages/Register';
import { PrivateRoutes } from './privateRoutes';

export function Routes() {
  return (
    <AllRoutes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path='/home' element={<HomePage />} />
      </Route>
    </AllRoutes>
  );
}
