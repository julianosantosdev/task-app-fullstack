import { createContext, useEffect, useState } from 'react';
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('myTaskApp:token');
    if (!token) {
      setLoading(false);
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const signIn = async (data: TLoginValidate) => {
    try {
      const response = await api.post('/login', data);
      const token: string = response.data.token;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem('myTaskApp:token', token);
      setLoading(false);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={{ signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
