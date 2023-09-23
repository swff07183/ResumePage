import { IOptionType } from '@/types';

const languageList = [
  '영어',
  '일본어',
  '중국어',
  '독일어',
  '불어',
  '스페인어',
  '러시아어',
  '이탈리아어',
  '한국어',
  '기타',
];

const experienceList = [
  '교내활동',
  '인턴',
  '자원봉사',
  '동아리',
  '아르바이트',
  '사회활동',
  '수행과제',
  '해외연수',
  '교육이수내역',
];

export const EXPERIENCE_TYPE: IOptionType[] = [
  { content: '활동구분 선택 *' },
  ...experienceList.map((exp) => ({ content: exp, value: exp })),
];

export const AWARD_TYPE: IOptionType[] = [
  { content: '구분 *' },
  { content: '자격증∙면허증', value: 'license' },
  { content: '어학시험', value: 'language' },
  { content: '수상내역∙공모전', value: 'award' },
];

export const LANGUAGE_OPTIONS: IOptionType[] = [
  { content: '언어' },
  ...languageList.map((lang) => ({ content: lang, value: lang })),
];
