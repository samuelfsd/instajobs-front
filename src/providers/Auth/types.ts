import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
}

export interface IUserProps {
  email: string | null;
  password: string | null;
}

export interface IAuthContext {
  user: IUserProps | null;
  signed: boolean;
  signIn: ({ email, password }: IUserProps) => void;
  signOut: () => void;
}
