import React from 'react';
import { styled } from 'styled-components';

interface ButtonProps {
  type: 'fill' | 'border' | 'transparent';
  content: string;
  style?: any;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const Button = (props: ButtonProps) => {
  const { type, content, ...rest } = props;
  return (
    <StyledButton type={type} {...rest}>
      {content}
    </StyledButton>
  );
};

interface StyledButtonProps {
  type: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  width: 80px;
  height: 48px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 4px;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
  ${({ type }) =>
    type === 'fill'
      ? `
        color: #ffffff;
        background-color: #00553D;
        border: none;
      `
      : type === 'border'
      ? `
        color: #00553D;
        background-color: transparent;
        border: 1px solid #00553D;
      `
      : ``}
`;
