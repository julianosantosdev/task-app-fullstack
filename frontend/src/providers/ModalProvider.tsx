import { createContext, useRef, useState } from 'react';
import {
  IModalContextValues,
  IModalProviderProps,
} from '../interfaces/modal.interfaces';

const ModalContext = createContext({} as IModalContextValues);

const ModalProvider = ({ children }: IModalProviderProps) => {
  const [handleShowModal, setHandleShowModal] = useState(false);

  const [showErrorModal, setShowErrorModal] = useState(false);

  const toggleModal = () => {
    setHandleShowModal(!handleShowModal);
  };

  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <ModalContext.Provider
      value={{
        handleShowModal,
        setHandleShowModal,
        toggleModal,
        modalRef,
        setShowErrorModal,
        showErrorModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
