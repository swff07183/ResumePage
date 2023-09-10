import React from 'react';
import { Resume } from '@/components/Resume';
import { useExtraState } from '../stores/hooks';
import { ResumeForm } from '@/components/ResumeForm';
import NoListMessage from '@/components/NoListMessage';
import Input from '@/components/Input';
import { useForm } from '@/hooks';

const Skill = () => {
  const { extraFormState, openExtraForm } = useExtraState();

  return (
    <Resume
      title="스킬"
      isFormOpen={extraFormState.skill}
      handleAddButtonClick={openExtraForm('skill')}
    >
      {extraFormState.skill ? <SkillForm /> : <SkillList />}
    </Resume>
  );
};

const SkillForm = () => {
  const { closeExtraForm } = useExtraState();
  const { formData, handleInputChange } = useForm({ skill: '' });

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <ResumeForm>
      <ResumeForm.Row>
        <Input
          className="input_l"
          name="skill"
          placeholder="툴/직무역량/소프트스킬을 입력해주세요"
          onChange={handleInputChange}
        />
      </ResumeForm.Row>
      <ResumeForm.Buttons
        onCancel={closeExtraForm('skill')}
        onSubmit={handleSubmit}
      />
    </ResumeForm>
  );
};

const SkillList = () => {
  return <NoListMessage message="스킬을 추가해주세요." />;
};

export default Skill;
