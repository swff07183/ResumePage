import UserInfo from '@/features/user/components/UserInfo';
import React from 'react';
import styled from 'styled-components';
import SkillPreview from './SkillPreview';
import EducationPreview from './EducationPreview';

const Preview = () => {
  return (
    <Wrapper>
      <UserInfo />
      <EducationPreview />
      <SkillPreview />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export default Preview;
