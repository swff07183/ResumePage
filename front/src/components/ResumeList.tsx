import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Pencil } from '@assets/svg/pencil.svg';
import { ReactComponent as Trash } from '@assets/svg/trash.svg';

interface ResumeListProps {
  children?: React.ReactNode;
}

export const ResumeList = (props: ResumeListProps) => {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 28px;
  border-top: 1px solid #d7dce5;
`;

ResumeList.Item = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 100%; */
  & + & {
    padding-top: 18px;
    border-top: 1px solid #eaedf4;
  }
`;

ResumeList.Col = styled.div`
  display: flex;
  gap: 18px;
  flex-direction: column;
  flex-grow: 1;
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

const Button = ({
  type,
  onClick,
}: {
  type: 'edit' | 'delete';
  onClick: () => void;
}) => {
  return (
    <ButtonWrapper onClick={onClick}>
      {type === 'edit' && <Pencil className="pencil" />}
      {type === 'delete' && <Trash className="trash" />}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
  margin-left: 6px;
  cursor: pointer;
  &:hover {
    background-color: #a6b0c02f;
  }
  & svg {
    width: 25px;
    height: 25px;
  }
  & .pencil > path {
    fill: #8491a7;
    stroke-width: 1px;
  }
  & .trash > path {
    stroke: #8491a7;
    stroke-width: 1.5px;
  }
`;

const TextArea = ({ content }: { content: string }) => {
  return (
    <TextAreaWrapper>
      {content.split('\n').map((line, idx) => (
        <div key={`content-${idx}`}>
          {line}
          <br />
        </div>
      ))}
    </TextAreaWrapper>
  );
};

const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  letter-spacing: -2px;
`;

ResumeList.Button = Button;
ResumeList.TextArea = TextArea;
