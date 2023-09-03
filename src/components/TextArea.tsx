import React, { TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = (props: TextAreaProps) => {
  const { ...rest } = props;
  return (
    <Wrapper>
      <h5>TextArea Title</h5>
      <textarea {...rest} />
      <div>공백제외</div>
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
    letter-spacing: -1px;
  }
`;

export default TextArea;
