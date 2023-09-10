import React from 'react';
import { Resume } from '@/components/Resume';
import { useExtraState } from '../stores/hooks';
import { ResumeForm } from '@/components/ResumeForm';
import NoListMessage from '@/components/NoListMessage';
import { useForm } from '@/hooks';
import CheckboxInput from '@/components/Input/CheckboxInput';

const Preferential = () => {
  const { extraFormState, openExtraForm } = useExtraState();

  return (
    <Resume
      title="취업우대사항"
      isFormOpen={extraFormState.preferential}
      handleAddButtonClick={() => openExtraForm('preferential')}
    >
      {extraFormState.preferential ? (
        <PreferentialForm />
      ) : (
        <PreferentialList />
      )}
    </Resume>
  );
};

const PreferentialForm = () => {
  const { closeExtraForm } = useExtraState();
  const { formData } = useForm({ content: '' });

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <ResumeForm>
      <ResumeForm.Row>
        <CheckboxInput content="" />
      </ResumeForm.Row>
      <ResumeForm.Buttons
        onCancel={() => closeExtraForm('careerContent')}
        onSubmit={handleSubmit}
      />
    </ResumeForm>
  );
};

const PreferentialList = () => {
  return <NoListMessage message="취업우대사항을 추가해주세요." />;
};

export default Preferential;
