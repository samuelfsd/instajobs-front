import { AuthProvider } from './providers/Auth/authContext';
import { Routes } from './routes/routes';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
