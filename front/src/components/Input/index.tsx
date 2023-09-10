import React, { InputHTMLAttributes, useId, useRef, useState } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
  invalid?: boolean;
}

const Input = (props: InputProps) => {
  const { className = 'input_m', placeholder, invalid, ...rest } = props;
  const uid = useId();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Wrapper className={`${className} ${invalid ? 'invalid' : ''}`}>
      {placeholder && (
        <label
          className={isFocused || inputRef.current?.value ? 'focused' : ''}
          htmlFor={`input-${uid}`}
        >
          {placeholder}
        </label>
      )}
      <input
        ref={inputRef}
        id={`input-${uid}`}
        placeholder={placeholder}
        {...rest}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
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
  position: relative;
  & .focused {
    top: 0;
    transform: scale(90%) translateY(-50%);
    padding: 6px;
  }
  & label {
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
    font-size: 14px;
    color: #67738e;
    transition: all 300ms ease;
  }
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
