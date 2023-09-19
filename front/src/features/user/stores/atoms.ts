import { atom } from 'recoil';
import { IUserInfo } from '../types';

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

export const userInfoDataState = atom<IUserInfo | undefined>({
  key: 'userInfoData',
  default: undefined,
});
