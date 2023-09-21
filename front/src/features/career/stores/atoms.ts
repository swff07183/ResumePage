import { atom } from 'recoil';
import { ICareer } from '../types/ICareer';

export const careerFormState = atom<boolean>({
  key: 'careerFormState',
  default: false,
});

export const selectedCareerState = atom<ICareer | null>({
  key: 'selectedCareerState',
  default: null,
});
