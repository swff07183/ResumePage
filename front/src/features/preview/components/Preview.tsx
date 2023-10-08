import UserInfo from '@/features/user/components/UserInfo';
import React from 'react';
import styled from 'styled-components';
import EducationList from '@/features/education/components/EducationList';
import CareerList from '@/features/career/components/CareerList';
import { SkillList } from '@/features/extra/components/Skill';
import { ExperienceList } from '@/features/extra/components/Experience';
import { SelfIntroductionList } from '@/features/extra/components/SelfIntroduction';
import { CareerContentList } from '@/features/extra/components/CareerContent';
import { AwardList } from '@/features/extra/components/Award';

const Preview = () => {
  return (
    <Wrapper>
      <UserInfo readonly />
      <SkillList readonly />
      <EducationList readonly />
      <CareerList readonly />
      <ExperienceList readonly />
      <AwardList readonly />
      <CareerContentList readonly />
      <SelfIntroductionList readonly />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px 20px 40px 20px;
  width: 800px;
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

export default Preview;
