import React from 'react';
import styled from 'styled-components';
import ResumeSideBar from '@components/ResumeSideBar';
import User from '@/features/user/components/User';
import Education from '@/features/education/components/Education';
import Career from '@/features/career/components/Career';

const IndexPage = () => {
  return (
    <Wrapper>
      <ContentDiv>
        <User />
        <Education />
        <Career />
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
  gap: 20px;
  box-sizing: border-box;
  padding: 0 20px;
`;

export default IndexPage;
