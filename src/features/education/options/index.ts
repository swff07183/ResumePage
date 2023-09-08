import { IOptionType } from '@/types';

export const EDUCATION_OPTIONS: IOptionType[] = [
  {
    content: '최종학력 *',
  },
  {
    content: '초등학교 졸업',
    value: 'primary',
  },
  {
    content: '중학교 졸업',
    value: 'middle',
  },
  {
    content: '고등학교 졸업',
    value: 'high',
  },
  {
    content: '대학ㆍ대학원 이상 졸업',
    value: 'university',
  },
];

export const GRADUATION_OPTIONS: IOptionType[] = [
  {
    content: '졸업여부 *',
  },
  {
    content: '졸업',
    value: 'graduate',
  },
  {
    content: '중퇴',
    value: 'nograduate',
  },
];

export const HIGH_MAJOR_OPTIONS: IOptionType[] = [
  { content: '전공계열' },
  { content: '문과계열', value: '1' },
  { content: '이과계열', value: '2' },
  { content: '전문(실업)계', value: '3' },
  { content: '예체능계', value: '4' },
  { content: '특성화/마이스터고', value: '5' },
  { content: '특수목적고', value: '6' },
];

export const UNIVERSITY_TYPE_OPTIONS: IOptionType[] = [
  { content: '대학구분*' },
  { content: '대학교(2,3년)', value: '1' },
  { content: '대학교(4년)', value: '2' },
  { content: '대학원(석사)', value: '3' },
  { content: '대학원(박사)', value: '4' },
];

export const UNIVERSITY_TIME_OPTIONS: IOptionType[] = [
  { content: '주/야간 선택' },
  { content: '주간', value: '주간' },
  { content: '야간', value: '야간' },
];
