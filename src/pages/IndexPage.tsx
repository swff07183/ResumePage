import React from 'react';
import styled from 'styled-components';
import Resume from '../containers/Resume';
import ResumeSideBar from '../containers/ResumeSideBar';

const IndexPage = () => {
  return (
    <Wrapper>
      <ContentDiv>
        <Resume />
        <ResumeSideBar />
      </ContentDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 1250px;
  display: flex;
  justify-content: center;
`;

const ContentDiv = styled.div`
  box-sizing: border-box;
  width: 1250px;
  display: flex;
  gap: 20px;
  /* flex-direction: column; */
  padding: 0 20px;
`;

export default IndexPage;
