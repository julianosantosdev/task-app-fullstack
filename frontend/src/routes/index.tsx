import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login';
import DashboardPage from '../pages/Dashboard';
import ProtectedRoutes from './ProtectedRoutes';

const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/dashboard' element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
