import { atom } from 'recoil';

export interface IUser {
  username: string;
}

export const userFormState = atom<boolean>({
  key: 'userFormState',
  default: false,
});

export const userState = atom<IUser | undefined>({
  key: 'userState',
  default: undefined,
});
