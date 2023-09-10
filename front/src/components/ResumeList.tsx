import React from 'react';
import styled from 'styled-components';

interface ResumeListProps {
  children?: React.ReactNode;
}

export const ResumeList = (props: ResumeListProps) => {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  gap: 18px;
  padding: 28px;
  flex-direction: column;
  border-top: 1px solid #d7dce5;
`;

ResumeList.Row = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
`;

ResumeList.Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

ResumeList.Content = styled.div``;

ResumeList.Date = styled.div`
  display: flex;
  align-items: center;
  color: #67738e;
  font-size: 15px;
  &::before {
    display: inline-block;
    margin: 0 8px;
    width: 1px;
    height: 16px;
    background: #d7dce5;
    content: '';
  }
`;

ResumeList.Detail = styled.div`
  color: #292141;
  font-size: 14px;
  width: 80px;
`;

ResumeList.DetailContent = styled.div`
  color: #292141;
  font-size: 14px;
  display: flex;
  align-items: center;
  &::before {
    display: inline-block;
    margin: 0 8px;
    width: 1px;
    height: 16px;
    background: #d7dce5;
    content: '';
  }
`;

export default ResumeList;
