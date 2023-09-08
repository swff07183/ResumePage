import { HTMLAttributes } from 'react';
import { styled } from 'styled-components';

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
