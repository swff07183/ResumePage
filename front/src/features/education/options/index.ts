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
    value: '졸업',
  },
  {
    content: '중퇴',
    value: '중퇴',
  },
];

export const UNIVERSITY_GRADUATION_OPTIONS: IOptionType[] = [
  {
    content: '졸업여부 *',
  },
  {
    content: '졸업',
    value: '졸업',
  },
  {
    content: '재학중',
    value: '재학중',
  },
  {
    content: '휴학중',
    value: '휴학중',
  },
  {
    content: '수료',
    value: '수료',
  },
  {
    content: '중퇴',
    value: '중퇴',
  },
  {
    content: '자퇴',
    value: '자퇴',
  },
  {
    content: '졸업예정',
    value: '졸업예정',
  },
];

export const HIGH_MAJOR_OPTIONS: IOptionType[] = [
  { content: '전공계열' },
  { content: '문과계열', value: '문과계열' },
  { content: '이과계열', value: '이과계열' },
  { content: '전문(실업)계', value: '전문(실업)계' },
  { content: '예체능계', value: '예체능계' },
  { content: '특성화/마이스터고', value: '특성화/마이스터고' },
  { content: '특수목적고', value: '특수목적고' },
];

export const UNIVERSITY_TYPE_OPTIONS: IOptionType[] = [
  { content: '대학구분*' },
  { content: '대학교(2,3년)', value: '2, 3년제' },
  { content: '대학교(4년)', value: '4년제' },
  { content: '대학원(석사)', value: '석사' },
  { content: '대학원(박사)', value: '박사' },
];

export const UNIVERSITY_TIME_OPTIONS: IOptionType[] = [
  { content: '주/야간 선택' },
  { content: '주간', value: '주간' },
  { content: '야간', value: '야간' },
];

export const EXTRA_MAJOR_TYPE_OPTIONS: IOptionType[] = [
  { content: '전공구분' },
  { content: '부전공', value: '부전공' },
  { content: '복수전공', value: '복수전공' },
  { content: '이중전공', value: '이중전공' },
];

export const STANDARD_GRADE_OPTIONS: IOptionType[] = [
  { content: '기준학점' },
  { content: '4.0', value: '4.0' },
  { content: '4.3', value: '4.3' },
  { content: '4.5', value: '4.5' },
  { content: '5.0', value: '5.0' },
  { content: '7.0', value: '7.0' },
  { content: '100', value: '100' },
];
