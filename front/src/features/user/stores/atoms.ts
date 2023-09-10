import { atom } from 'recoil';

export const userFormState = atom<boolean>({
  key: 'userFormState',
  default: false,
});
