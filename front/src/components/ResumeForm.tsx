import { HTMLAttributes } from 'react';
import { styled } from 'styled-components';
import { Button } from './Button/Button';

interface ResumeFormProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const ResumeForm = (props: ResumeFormProps) => {
  const { children, hidden } = props;

  return <Wrapper hidden={hidden}>{children}</Wrapper>;
};

interface WrapperProps {
  hidden?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: ${({ hidden }) => (hidden ? 'hidden' : 'flex')};
  padding: 32px 40px;
  flex-direction: column;
  gap: 16px;
  border-top: 2px solid #4876ef;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(17, 42, 128, 0.08);

  & .form-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

interface FormButtonsProps {
  onCancel?: () => void;
  onSubmit?: () => void;
}

const FormButtons = (props: FormButtonsProps) => {
  const { onCancel, onSubmit } = props;
  return (
    <FormButtonWrapper>
      <Button
        type="border"
        content="취소"
        onClick={() => {
          if (window.confirm('작성중인 내용을 저장하지 않고 취소하시겠습니까?'))
            onCancel?.();
        }}
      />
      <Button type="fill" content="저장" onClick={onSubmit} />
    </FormButtonWrapper>
  );
};

const FormButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 8px;
`;

ResumeForm.Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
ResumeForm.Buttons = FormButtons;
