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

export const EXPERIENCE_TYPE: IOptionType[] = [
  { content: '활동구분 선택 *' },
  { content: '교내활동', value: '1' },
  { content: '인턴', value: '2' },
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
