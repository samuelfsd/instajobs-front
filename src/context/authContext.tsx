import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '~/services/api';

interface IProps {
  children: ReactNode;
}
interface IUserProps {
  email: string | null;
  password: string | null;
}

export interface IAuthContext {
  user: string | null;
  signed: boolean;
  signIn: ({ email, password }: IUserProps) => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const loadingStoreData = async () => {
      const storageUser = localStorage.getItem('@Auth:user');
      const storageToken = localStorage.getItem('@Auth:token');

      if (storageUser && storageToken) {
        setUser(storageUser);
      }
    };
    loadingStoreData();
  }, []);

  const signIn = async ({ email, password }: IUserProps) => {
    const response = await api.post('/auth', {
      email,
      password,
    });
    if (response.data.error) {
      alert(response.data.error);
    } else {
      setUser(response.data.user);
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      localStorage.setItem('@Auth:token', response.data.token);
      localStorage.setItem('@Auth:user', JSON.stringify(response.data.user));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
