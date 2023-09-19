import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Pencil } from '@assets/svg/pencil.svg';

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

ResumeList.State = styled.div`
  color: #67738e;
  font-size: 14px;
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

ResumeList.DetailDiv = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
  font-size: 13px;
`;

ResumeList.Detail = styled.div`
  color: #292141;
  /* font-size: 14px; */
  width: 60px;
`;

ResumeList.DetailContent = styled.div`
  color: #292141;
  /* font-size: 14px; */
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

const EditButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <EditButtonWrapper onClick={onClick}>
      <Pencil />
    </EditButtonWrapper>
  );
};

const EditButtonWrapper = styled.button`
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    background-color: #a6b0c02f;
  }
  & svg {
    width: 30px;
    height: 30px;
  }
  & path {
    fill: #8491a7;
  }
`;

ResumeList.EditButton = EditButton;
