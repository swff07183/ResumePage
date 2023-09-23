export type ExtraMenuType =
  | 'skill'
  | 'experience'
  | 'award'
  | 'portfolio'
  | 'careerContent'
  | 'selfIntroduction'
  | 'preferential';

export type ExperienceType =
  | '교내활동'
  | '인턴'
  | '자원봉사'
  | '동아리'
  | '아르바이트'
  | '사회활동'
  | '수행과제'
  | '해외연수'
  | '교육이수내역';

export interface ISkill {
  id?: number;
  skill: string;
}

export interface ICareerContent {
  content: string;
}

export interface ISelfIntroduction {
  title: string;
  content: string;
}

export interface IAward {
  id?: number;
  type: string;
  licenseName?: string;
  licenseDate?: string;
  licensePlace?: string;
  language?: string;
  languageScore?: string;
  languageName?: string;
  languageDate?: string;
  awardName?: string;
  awardDate?: string;
  awardPlace?: string;
}

export interface IExperience {
  id?: number;
  type: string;
  place: string;
  startDate: string;
  endDate: string;
  detail: string;
}
