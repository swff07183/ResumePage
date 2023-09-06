import { styled } from 'styled-components';

export const ResumeForm = styled.div`
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid #4876ef;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(17, 42, 128, 0.08);
  & .form-div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  & .form-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
