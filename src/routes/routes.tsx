import { Route, Routes as AllRoutes } from 'react-router-dom';

import { LoginPage } from '~/pages/Login';

export function Routes() {
  return (
    <AllRoutes>
      <Route path='/login' element={<LoginPage />} />
    </AllRoutes>
  );
}
