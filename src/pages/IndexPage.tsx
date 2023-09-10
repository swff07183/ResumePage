import React from 'react';
import styled from 'styled-components';
import ResumeSideBar from '@components/ResumeSideBar';
import { Education } from '@/features/education';
import { Career } from '@/features/career';
import { User } from '@/features/user';
import { Extra } from '@/features/extra';

const IndexPage = () => {
  return (
    <Wrapper>
      <ContentDiv>
        <User />
        <Education />
        <Career />
        <Extra />
      </ContentDiv>
      <ResumeSideBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 1250px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  box-sizing: border-box;
  padding: 0 20px;
`;

export default IndexPage;
