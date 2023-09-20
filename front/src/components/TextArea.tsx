import React, { useState, TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  name?: string;
  value?: string;
  invalid?: boolean;
}

export const TextArea = (props: TextAreaProps) => {
  const { title, value = '', invalid, ...rest } = props;

  const getLength = (isIncludeSpace: boolean = true) => {
    return isIncludeSpace ? value.length : value.replaceAll(' ', '').length;
  };

  const getBytes = (isIncludeSpace: boolean = true) => {
    let bytes = 0;
    for (let i = 0; i < value.length; i++) {
      if (!isIncludeSpace && value.charAt(i) === ' ') continue;
      bytes += value.charCodeAt(i) > 128 ? 2 : 1;
    }
    return bytes;
  };

  return (
    <Wrapper>
      {title && <h5>{title}</h5>}
      <textarea className={invalid ? 'invalid' : ''} value={value} {...rest} />
      <div className="text-len">
        <span>
          <span className="text-bold">총 글자 수</span>
          {` ${getLength()} 자 / ${getBytes()} bytes`}
        </span>
        <span>|</span>
        <span>
          <span className="text-bold">공백제외</span>
          {` ${getLength(false)} 자 / ${getBytes(false)} bytes`}
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & h5 {
    margin: 10px 0;
    font-size: 16px;
  }
  & textarea {
    height: 237px;
    padding: 24px;
    letter-spacing: -1px;
    border: 1px solid #8491a7;
    border-radius: 4px;
  }

  & .text-len {
    color: #67738e;
    gap: 10px;
    align-self: flex-end;
    display: flex;
    margin-top: 8px;
    font-size: 12px;
    letter-spacing: -1px;
  }
  & .text-bold {
    font-weight: bold;
  }
`;
