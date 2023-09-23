import React from 'react';
import { Resume } from '@/components/Resume';
import { useExtraState } from '../stores/hooks';
import { ResumeForm } from '@/components/ResumeForm';
import { useForm } from '@/hooks';
import { TextArea, NoListMessage, Input, ResumeList } from '@components';
import { useSelfIntroductionQuery } from '../hooks/selfIntroduction';
import { ISelfIntroduction } from '../types';

const SelfIntroduction = () => {
  const { extraFormState, openExtraForm } = useExtraState();
  const { data } = useSelfIntroductionQuery();

  return (
    <Resume
      title="자기소개서"
      isFormOpen={extraFormState.selfIntroduction}
      hideAddButton={data?.title !== undefined}
      handleAddButtonClick={() => openExtraForm('selfIntroduction')}
    >
      {extraFormState.selfIntroduction ? (
        <SelfIntroductionForm />
      ) : (
        <SelfIntroductionList />
      )}
    </Resume>
  );
};

const SelfIntroductionForm = () => {
  const { closeExtraForm } = useExtraState();
  const { data, mutation } = useSelfIntroductionQuery();
  const { formData, isError, setIsError, handleInputChange } =
    useForm<ISelfIntroduction>({
      title: data?.title ?? '',
      content: data?.content ?? '',
    });

  const handleSubmit = () => {
    setIsError({
      title: formData.title === '',
      content: formData.content === '',
    });
    if (formData.title !== '' && formData.content !== '') {
      mutation.mutate(formData);
    }
  };

  return (
    <ResumeForm>
      <ResumeForm.Row>
        <Input
          className="input_xl"
          name="title"
          placeholder="자기소개서 제목"
          onChange={handleInputChange}
          value={formData.title}
          invalid={isError.title}
        />
      </ResumeForm.Row>
      <ResumeForm.Row>
        <TextArea
          name="content"
          placeholder="차별화된 자기소개서를 완성해보세요."
          onChange={handleInputChange}
          value={formData.content}
          invalid={isError.content}
        />
      </ResumeForm.Row>
      <ResumeForm.Buttons
        onCancel={() => closeExtraForm('selfIntroduction')}
        onSubmit={handleSubmit}
      />
    </ResumeForm>
  );
};

const SelfIntroductionList = () => {
  const { data, deleteMutation } = useSelfIntroductionQuery();
  const { openExtraForm } = useExtraState();

  return data ? (
    <ResumeList>
      <ResumeList.Col>
        <ResumeList.Title>{data.title}</ResumeList.Title>
        <ResumeList.TextArea content={data.content} />
      </ResumeList.Col>
      <div>
        <ResumeList.Button
          type="edit"
          onClick={() => {
            openExtraForm('selfIntroduction');
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
    <NoListMessage message="자기소개서를 작성해주세요." />
  );
};
export default SelfIntroduction;
