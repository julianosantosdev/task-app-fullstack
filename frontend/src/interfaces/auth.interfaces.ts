import { ReactNode } from 'react';
import { TLoginValidate } from '../schemas/loginSchema';

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContextValues {
  signIn: (data: TLoginValidate) => Promise<void>;
  loading: boolean;
}

export type { IAuthProviderProps, IAuthContextValues };
