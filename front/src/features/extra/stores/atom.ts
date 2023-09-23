import { atom } from 'recoil';
import { IAward, IExperience } from '../types';

export const extraListRecoilState = atom({
  key: 'extraListRecoilState',
  default: {
    skill: false, // 스킬
    experience: false, // 경험/활동/교육
    award: false, // 자격/어학/수상
    portfolio: false, // 포트폴리오
    careerContent: false, // 경력기술서
    selfIntroduction: false, // 자기소개서
    preferential: false, // 우대사항
  },
});

export const extraFormRecoilState = atom({
  key: 'extraFormRecoilState',
  default: {
    skill: false, // 스킬
    experience: false, // 경험/활동/교육
    award: false, // 자격/어학/수상
    portfolio: false, // 포트폴리오
    careerContent: false, // 경력기술서
    selfIntroduction: false, // 자기소개서
    preferential: false, // 우대사항
  },
});

export const selectedAwardState = atom<IAward | null>({
  key: 'selectedAwardState',
  default: null,
});

export const selectedExperienceState = atom<IExperience | null>({
  key: 'selectedExperienceState',
  default: null,
});
