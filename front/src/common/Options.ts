import { IOptionType } from '@/types';

const regionList = [
  '서울',
  '경기',
  '광주',
  '대구',
  '대전',
  '부산',
  '울산',
  '인천',
  '강원',
  '경남',
  '경북',
  '전남',
  '전북',
  '충북',
  '충남',
  '제주',
  '전국',
  '세종',
  '아시아·중동',
  '북·중미',
  '남미',
  '유럽',
  '오세아니아',
  '아프리카',
  '남극대륙',
  '기타해외',
];

export const REGION_OPTIONS: IOptionType[] = [
  {
    content: '지역 선택',
  },
  ...regionList.map((region) => ({ content: region, value: region })),
];
