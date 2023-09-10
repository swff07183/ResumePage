import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Minus } from '../../assets/svg/minus.svg';
import { ReactComponent as Plus } from '../../assets/svg/plus.svg';

interface AddButtonProps {
  content: string;
  isActive: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const AddButton = (props: AddButtonProps) => {
  const { content, isActive, onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      {isActive ? <Minus /> : <Plus />}
      {content}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  height: 48px;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: transparent;
  border: 1px solid #d7dce5;
  border-radius: 4px;
  font-size: 14px;
`;

export default AddButton;
