import React from 'react';
import { Resume } from '@/components/Resume';
import { useExtraState } from '../stores/hooks';
import { ResumeForm } from '@/components/ResumeForm';
import NoListMessage from '@/components/NoListMessage';
import { useForm } from '@/hooks';
import TextArea from '@/components/TextArea';
import Input from '@/components/Input';

const SelfIntroduction = () => {
  const { extraFormState, openExtraForm } = useExtraState();

  return (
    <Resume
      title="자기소개서"
      isFormOpen={extraFormState.selfIntroduction}
      handleAddButtonClick={openExtraForm('selfIntroduction')}
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
  const { formData, handleInputChange } = useForm({ title: '', content: '' });

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <ResumeForm>
      <ResumeForm.Row>
        <Input
          className="input_xl"
          name="title"
          placeholder="자기소개서 제목"
          onChange={handleInputChange}
        />
      </ResumeForm.Row>
      <ResumeForm.Row>
        <TextArea
          name="content"
          placeholder="차별화된 자기소개서를 완성해보세요."
          onChange={handleInputChange}
        />
      </ResumeForm.Row>
      <ResumeForm.Buttons
        onCancel={closeExtraForm('selfIntroduction')}
        onSubmit={handleSubmit}
      />
    </ResumeForm>
  );
};

const SelfIntroductionList = () => {
  return (
    <NoListMessage
      message="자기소개서를 작성해주세요.
  "
    />
  );
};
export default SelfIntroduction;
