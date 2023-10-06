import { createContext, useEffect } from 'react';
import {
  IAuthContextValues,
  IAuthProviderProps,
} from '../interfaces/auth.interfaces';
import { TLoginValidate } from '../schemas/loginSchema';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({} as IAuthContextValues);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('myTaskApp:token');
    if (!token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }, []);

  const signIn = async (data: TLoginValidate) => {
    try {
      const response = await api.post('/login', data);
      const token: string = response.data.token;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem('myTaskApp:token', token);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
