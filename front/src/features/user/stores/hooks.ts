import { useRecoilState } from 'recoil';
import { userFormState, userState } from './atoms';

export const useUserForm = () => {
  const [isUserFormOpen, setIsUserFormOpen] = useRecoilState(userFormState);

  const openUserForm = () => setIsUserFormOpen(true);
  const closeUserForm = () => setIsUserFormOpen(false);

  return { isUserFormOpen, openUserForm, closeUserForm };
};

export const useUserState = () => {
  const [user, setUser] = useRecoilState(userState);

  return { user, setUser };
};
