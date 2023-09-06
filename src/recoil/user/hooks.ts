import { useRecoilState } from 'recoil';
import { userFormState } from './atoms';

export const useUserForm = () => {
  const [isUserFormOpen, setIsUserFormOpen] = useRecoilState(userFormState);

  const openUserForm = () => setIsUserFormOpen(true);
  const closeUserForm = () => setIsUserFormOpen(false);

  return { isUserFormOpen, openUserForm, closeUserForm };
};
