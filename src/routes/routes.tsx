import { Route, Routes as AllRoutes } from 'react-router-dom';
import HomePage from '~/pages/Home';
import LoginPage from '~/pages/Login';
import PostsPage from '~/pages/Posts';

export function Routes() {
  return (
    <AllRoutes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/posts' element={<PostsPage />} />
    </AllRoutes>
  );
}
