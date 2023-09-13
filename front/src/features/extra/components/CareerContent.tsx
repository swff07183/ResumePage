import React from 'react';
import { Resume } from '@/components/Resume';
import { useExtraState } from '../stores/hooks';
import { ResumeForm } from '@/components/ResumeForm';
import { useForm } from '@/hooks';
import { styled } from 'styled-components';
import { TextArea, NoListMessage } from '@components';

const CareerContent = () => {
  const { extraFormState, openExtraForm } = useExtraState();

  return (
    <Resume
      title="경력기술서"
      isFormOpen={extraFormState.careerContent}
      handleAddButtonClick={() => openExtraForm('careerContent')}
    >
      {extraFormState.careerContent ? (
        <CareerContentForm />
      ) : (
        <CareerContentList />
      )}
    </Resume>
  );
};

const CareerContentForm = () => {
  const { closeExtraForm } = useExtraState();
  const { formData, handleInputChange } = useForm({ content: '' });

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <ResumeForm>
      <ResumeForm.Row>
        <ContentRecommend>양식 추천</ContentRecommend>
        <RecommendButton>프로젝트형</RecommendButton>
        <RecommendButton>개발 기술형</RecommendButton>
        <RecommendButton>디자이너형</RecommendButton>
        <RecommendButton>영업 성과형</RecommendButton>
      </ResumeForm.Row>
      <ResumeForm.Row>
        <TextArea
          name="content"
          placeholder="최근 경력부터 역순으로 작성하며, 주요업무, 내용 단위로 본인의 역할과 객관적인 성과를 작성해보세요.
(업무 주요내용, 기간, 역할, 기여도, 성과 등을 작성하며 본인의 역량과 업무 능숙도를 어필해보세요.)"
          onChange={handleInputChange}
        />
      </ResumeForm.Row>
      <ResumeForm.Buttons
        onCancel={() => closeExtraForm('careerContent')}
        onSubmit={handleSubmit}
      />
    </ResumeForm>
  );
};

const CareerContentList = () => {
  return <NoListMessage message="경력기술서를 입력해주세요." />;
};

const ContentRecommend = styled.div`
  font-size: 15px;
  color: #5e6985;
  font-weight: 900;
  margin-right: 8px;
`;

const RecommendButton = styled.button`
  display: inline-flex;
  padding: 6px 11px;
  height: 40px;
  border: 1px solid #d7dce5;
  border-radius: 35px;
  color: #475067;
  font-size: 13px;
  letter-spacing: -1px;
  line-height: 24px;
  background: #ffffff;
  align-items: center;
  justify-content: center;
`;

export default CareerContent;
