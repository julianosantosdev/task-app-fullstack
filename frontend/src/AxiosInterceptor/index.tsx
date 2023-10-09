import { useEffect } from 'react';
import axios from 'axios';
import api from '../services/api';
import ModalLoginWarning from '../Components/Modal/ModalLoginWarning';
import Modal from '../Components/Modal';
import useModal from '../hooks/useModal';

interface AxiosInterceptorProps {
  children: React.ReactNode;
}

const AxiosInterceptor = ({ children }: AxiosInterceptorProps) => {
  const { showErrorModal, setShowErrorModal } = useModal();

  useEffect(() => {
    const errorInterceptor = (error: Error) => {
      if (!axios.isAxiosError(error)) {
        return Promise.reject(error);
      }

      if (error.response?.status === 401) {
        setShowErrorModal(true);
      }

      return Promise.reject(error);
    };
    const interceptor = api.interceptors.response.use(null, errorInterceptor);

    return () => api.interceptors.response.eject(interceptor);
  });

  return (
    <>
      {showErrorModal && <Modal children={<ModalLoginWarning />} />}
      {children}
    </>
  );
};

export default AxiosInterceptor;
