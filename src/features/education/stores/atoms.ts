import { atom } from 'recoil';

export const finalEduState = atom<string>({
  key: 'finalEduState',
  default: '',
});
export const eduFormState = atom<boolean>({
  key: 'eduFormState',
  default: false,
});
