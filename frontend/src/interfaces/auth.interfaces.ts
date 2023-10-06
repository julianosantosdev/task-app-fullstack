import { ReactNode } from 'react';
import { TLoginValidate } from '../schemas/loginSchema';

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContextValues {
  signIn: (data: TLoginValidate) => Promise<void>;
}

export type { IAuthProviderProps, IAuthContextValues };
