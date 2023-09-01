import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = (props: InputProps) => {
  const { className = 'input_m', ...rest } = props;
  return (
    <Wrapper className={className}>
      <input placeholder="input" {...rest} />
    </Wrapper>
  );
};

interface WrapperProps {
  width?: number;
}

const Wrapper = styled.div<WrapperProps>`
  border: 1px solid #8491a7;
  border-radius: 4px;
  box-sizing: border-box;
  width: ${({ width }) => `${width}px`};
  & input {
    width: 100%;
    padding: 0 12px;
    height: 100%;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

export default Input;
