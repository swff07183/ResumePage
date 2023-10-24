import { useUserState } from '@/features/user';
import { Navigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const LoginRequired = () => {
  const { user } = useUserState();

  // useEffect(() => {
  //   if (!user) navigate('/login');
  // }, [user]);
  if (!user) return <Navigate to="/login" />;
  return <Outlet />;
};

export default LoginRequired;
