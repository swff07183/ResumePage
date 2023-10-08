import React from 'react';
import Preview from '@/features/preview/components/Preview';
import styled from 'styled-components';

const PreviewPage = () => {
  return (
    <Wrapper>
      <Preview />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* width: 970px; */
  min-width: 840px;
  display: flex;
  justify-content: center;
  /* padding: 0 20px; */
  /* padding-top: 40px; */
`;

export default PreviewPage;
