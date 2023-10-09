import { useEffect } from 'react';
import StyledModalContainer from './styles';
import useModal from '../../hooks/useModal';

interface IModalProps {
  children: React.ReactNode;
  blockClosing?: boolean;
}

const Modal = ({ children, blockClosing }: IModalProps) => {
  const { toggleModal, modalRef } = useModal();

  useEffect(() => {
    const handleModalOutClick = (event: MouseEvent) => {
      if (modalRef.current === event.target) {
        toggleModal();
      }
    };

    window.addEventListener('click', handleModalOutClick);

    return () => {
      window.removeEventListener('click', handleModalOutClick);
    };
  }, [toggleModal]);

  return (
    <StyledModalContainer ref={blockClosing ? null : modalRef}>
      <div>{children}</div>
    </StyledModalContainer>
  );
};

export default Modal;
