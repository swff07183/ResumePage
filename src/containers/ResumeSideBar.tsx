import React from 'react';
import styled from 'styled-components';

interface ResumeSideBarProps {}

const ResumeSideBar = (props: ResumeSideBarProps) => {
  const {} = props;

  return (
    <Wrapper>
      <h3>sidebar</h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 24px 16px 24px;
  width: 294px;
  height: 600px;
  border-radius: 8px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 4px 16px rgba(21, 39, 111, 0.08);
`;

export default ResumeSideBar;
