import React, { useState, TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  name?: string;
}

export const TextArea = (props: TextAreaProps) => {
  const { title, name, onChange, ...rest } = props;

  const [text, setText] = useState<string>('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    onChange?.(e);
  };

  const getLength = (isIncludeSpace: boolean = true) => {
    return isIncludeSpace ? text.length : text.replaceAll(' ', '').length;
  };

  const getBytes = (isIncludeSpace: boolean = true) => {
    let bytes = 0;
    for (let i = 0; i < text.length; i++) {
      if (!isIncludeSpace && text.charAt(i) === ' ') continue;
      bytes += text.charCodeAt(i) > 128 ? 2 : 1;
    }
    return bytes;
  };

  return (
    <Wrapper>
      {title && <h5>{title}</h5>}
      <textarea name={name} {...rest} onChange={handleTextChange} />
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
