import { createContext, useEffect, useState } from 'react';
import { IAuthContext, IProps, IUserProps } from './types';

import { useToast } from '@chakra-ui/react';
import { api } from '~/services/api';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IProps) => {
  const toast = useToast()
  const navigate = useNavigate()

  const [user, setUser] = useState<IUserProps | null>(null);

  const signIn = async ({ email, password }: IUserProps) => {
    const response = await api.post('/auth', {
      email,
      password,
    });

    if (response.data.error) {
      toast({
        title: 'Erro ao fazer login.',
        status: 'error',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    setUser(response.data.user);
    api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    localStorage.setItem('@Auth:token', response.data.token);
    localStorage.setItem('@Auth:user', JSON.stringify(response.data.user));
    navigate('/home');
  };

  const signOut = () => {
    localStorage.removeItem('@Auth:token');
    localStorage.removeItem('@Auth:user');
    setUser(null);
    navigate('/');
  }

  useEffect(() => {
    const storageUser = localStorage.getItem('@Auth:user');
    const storageToken = localStorage.getItem('@Auth:token');

    if (storageUser && storageToken) {
      setUser(JSON.parse(storageUser))
      return
    }

  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
