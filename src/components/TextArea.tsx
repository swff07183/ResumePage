import React, { useState, TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = (props: TextAreaProps) => {
  const { ...rest } = props;

  const [text, setText] = useState<string>('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const getLength = (text: string, isIncludeSpace: boolean = true) => {
    return isIncludeSpace ? text.length : text.replaceAll(' ', '').length;
  };

  const getBytes = (text: string, isIncludeSpace: boolean = true) => {
    let bytes = 0;
    for (let i = 0; i < text.length; i++) {
      if (!isIncludeSpace && text.charAt(i) === ' ') continue;
      bytes += text.charCodeAt(i) > 128 ? 2 : 1;
    }
    return bytes;
  };

  return (
    <Wrapper>
      <h5>TextArea Title</h5>
      <textarea {...rest} onChange={handleTextChange} />
      <div className="text-len">
        <span>
          <span className="text-bold">총 글자 수</span>
          {` ${getLength(text)} 자 / ${getBytes(text)} bytes`}
        </span>
        <span>|</span>
        <span>
          <span className="text-bold">공백제외</span>
          {` ${getLength(text, false)} 자 / ${getBytes(text, false)} bytes`}
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & textarea {
    height: 237px;
    padding: 24px;
    letter-spacing: -2px;
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
    font-weight: 700;
  }
`;

export default TextArea;
