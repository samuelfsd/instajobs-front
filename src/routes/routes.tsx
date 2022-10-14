import { Route, Routes as AllRoutes } from 'react-router-dom';
import { Dashboard } from '~/pages/Dashboard';

import { LoginPage } from '~/pages/Login';
import { RegisterPage } from '~/pages/Register';
import { PrivateRoutes } from './privateRoutes';

export function Routes() {
  return (
    <AllRoutes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/dashboard' element={<PrivateRoutes />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
    </AllRoutes>
  );
}
