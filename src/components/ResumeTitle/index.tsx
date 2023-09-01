import React from 'react';
import styled from 'styled-components';

interface ResumeTitleProps {
  title: string;
  required?: boolean;
}

const ResumeTitle = (props: ResumeTitleProps) => {
  const { title } = props;
  return (
    <Wrapper>
      <h2>{title}</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 1px solid #d7dce5;
`;

export default ResumeTitle;
