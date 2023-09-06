import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

interface FormButtonsProps {
  onCancel?: () => void;
  onSubmit?: () => void;
}

const FormButtons = (props: FormButtonsProps) => {
  const { onCancel, onSubmit } = props;
  return (
    <Wrapper>
      <Button
        type="border"
        content="취소"
        onClick={() => {
          if (window.confirm('작성중인 내용을 저장하지 않고 취소하시겠습니까?'))
            onCancel?.();
        }}
      />
      <Button type="fill" content="저장" onClick={onSubmit} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 8px;
`;

export default FormButtons;
