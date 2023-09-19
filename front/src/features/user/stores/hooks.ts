import { useRecoilState } from 'recoil';
import { userFormState, userInfoDataState, userState } from './atoms';

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

export const useUserInfoData = () => {
  const [userInfoData, setUserInfoData] = useRecoilState(userInfoDataState);

  return { userInfoData, setUserInfoData };
};
