export interface optionType {
  value?: string;
  content: string;
}

export const EDUCATION_OPTIONS = [
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

export const GRADUATION_OPTIONS: optionType[] = [
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

export const REGION_OPTIONS: optionType[] = [
  {
    content: '지역 선택',
  },
  {
    content: '서울',
    value: '1',
  },
  {
    content: '대전',
    value: '2',
  },
  {
    content: '대구',
    value: '3',
  },
  {
    content: '부산',
    value: '4',
  },
];

export const HIGH_MAJOR_OPTIONS: optionType[] = [
  { content: '전공계열' },
  { content: '문과계열', value: '1' },
  { content: '이과계열', value: '2' },
  { content: '전문(실업)계', value: '3' },
  { content: '예체능계', value: '4' },
  { content: '특성화/마이스터고', value: '5' },
  { content: '특수목적고', value: '6' },
];
