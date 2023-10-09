interface IModalContextValues {
  handleShowModal: boolean;
  setHandleShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  toggleModal: () => void;
  modalRef: React.RefObject<HTMLDivElement>;
  showErrorModal: boolean;
  setShowErrorModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IModalProviderProps {
  children: React.ReactNode;
}

export type { IModalContextValues, IModalProviderProps };
