import React from 'react';
import { Resume } from '@/components/Resume';
import { useExtraState } from '../stores/hooks';
import { ResumeForm } from '@/components/ResumeForm';
import { useForm } from '@/hooks';
import { styled } from 'styled-components';
import { TextArea, NoListMessage, ResumeList } from '@components';
import {
  TEMPLATE_1,
  TEMPLATE_2,
  TEMPLATE_3,
  TEMPLATE_4,
} from '../constants/careerContentTemplate';
import { ICareerContent } from '../types';
import { useCareerContentQuery } from '../hooks/careerContent';

const CareerContent = () => {
  const { extraFormState, openExtraForm } = useExtraState();
  const { query } = useCareerContentQuery();

  return (
    <Resume
      title="경력기술서"
      isFormOpen={extraFormState.careerContent}
      hideAddButton={query.data !== undefined}
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

const TEMPLATE = { TEMPLATE_1, TEMPLATE_2, TEMPLATE_3, TEMPLATE_4 };

const CareerContentForm = () => {
  const { closeExtraForm } = useExtraState();
  const { query, mutation } = useCareerContentQuery();
  const { formData, setFormData, isError, setIsError, handleInputChange } =
    useForm<ICareerContent>({ content: query?.data?.content ?? '' });

  const handleTemplateButtonClick =
    (templateKey: 'TEMPLATE_1' | 'TEMPLATE_2' | 'TEMPLATE_3' | 'TEMPLATE_4') =>
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (
        formData.content === '' ||
        window.confirm(
          '작성한 내용이 사라집니다. 다른 양식을 선택하시겠습니까?'
        )
      ) {
        setFormData({ content: TEMPLATE[templateKey] });
      }
    };

  const handleSubmit = () => {
    if (formData.content !== '') {
      mutation.mutate(formData);
    } else {
      setIsError({ content: true });
    }
  };

  return (
    <ResumeForm>
      <ResumeForm.Row>
        <ContentRecommend>양식 추천</ContentRecommend>
        <RecommendButton onClick={handleTemplateButtonClick('TEMPLATE_1')}>
          프로젝트형
        </RecommendButton>
        <RecommendButton onClick={handleTemplateButtonClick('TEMPLATE_2')}>
          개발 기술형
        </RecommendButton>
        <RecommendButton onClick={handleTemplateButtonClick('TEMPLATE_3')}>
          디자이너형
        </RecommendButton>
        <RecommendButton onClick={handleTemplateButtonClick('TEMPLATE_4')}>
          영업 성과형
        </RecommendButton>
      </ResumeForm.Row>
      <ResumeForm.Row>
        <TextArea
          name="content"
          placeholder="최근 경력부터 역순으로 작성하며, 주요업무, 내용 단위로 본인의 역할과 객관적인 성과를 작성해보세요.
(업무 주요내용, 기간, 역할, 기여도, 성과 등을 작성하며 본인의 역량과 업무 능숙도를 어필해보세요.)"
          onChange={handleInputChange}
          invalid={isError.content}
          value={formData.content}
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
  const { query, deleteMutation } = useCareerContentQuery();
  const { openExtraForm } = useExtraState();

  return query.data?.content ? (
    <ResumeList>
      <ResumeList.TextArea content={query.data.content} />
      <div>
        <ResumeList.Button
          type="edit"
          onClick={() => {
            openExtraForm('careerContent');
          }}
        />
        <ResumeList.Button
          type="delete"
          onClick={() => {
            if (window.confirm('해당 항목을 삭제하시겠습니까?')) {
              deleteMutation.mutate();
            }
          }}
        />
      </div>
    </ResumeList>
  ) : (
    <NoListMessage message="경력기술서를 입력해주세요." />
  );
};

const ContentRecommend = styled.div`
  font-size: 15px;
  color: #5e6985;
  font-weight: 900;
  margin-right: 8px;
`;

const RecommendButton = styled.button`
  &:hover {
    background-color: #e8e8e8;
    cursor: pointer;
  }
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
