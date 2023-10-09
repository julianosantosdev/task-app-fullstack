import { useNavigate } from 'react-router-dom';
import useModal from '../../../hooks/useModal';

const ModalLoginWarning = () => {
  const navigate = useNavigate();
  const { setShowErrorModal } = useModal();

  const handleCloseAndRedirect = () => {
    setShowErrorModal(false);
    navigate('/');
  };
  return (
    <>
      You need to login to have to see the dashboard
      <button onClick={handleCloseAndRedirect}>Go to login page</button>
    </>
  );
};

export default ModalLoginWarning;
