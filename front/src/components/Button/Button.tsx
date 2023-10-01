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
        background-color: #17755b;
        border: none;
        &:hover {
          background-color: #13614b;
        }
      `
      : type === 'border'
      ? `
        color: #17755b;
        background-color: transparent;
        border: 1px solid #17755b;
        &:hover {
          background-color: #17755b1a;
        }
      `
      : ``}
`;
