import { atom } from 'recoil';

export const careerFormState = atom<boolean>({
  key: 'careerFormState',
  default: false,
});
