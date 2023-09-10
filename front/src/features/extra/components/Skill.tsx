import React, { useEffect } from 'react';
import { Resume } from '@/components/Resume';
import { useExtraState } from '../stores/hooks';
import { ResumeForm } from '@/components/ResumeForm';
import NoListMessage from '@/components/NoListMessage';
import Input from '@/components/Input';
import { useForm } from '@/hooks';
import { useSkillQuery } from '../hooks/skill';
import { styled } from 'styled-components';
import ResumeList from '@/components/ResumeList';

const Skill = () => {
  const { extraFormState, openExtraForm } = useExtraState();

  return (
    <Resume
      title="스킬"
      isFormOpen={extraFormState.skill}
      handleAddButtonClick={() => openExtraForm('skill')}
    >
      {extraFormState.skill ? <SkillForm /> : <SkillList />}
    </Resume>
  );
};

const SkillForm = () => {
  const { closeExtraForm } = useExtraState();
  const { formData, handleInputChange } = useForm({ skill: '' });

  const { mutation } = useSkillQuery();

  const handleSubmit = () => {
    // console.log(formData);
    mutation.mutate();
    console.log('close');
    closeExtraForm('skill');
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
        onCancel={() => closeExtraForm('skill')}
        onSubmit={handleSubmit}
      />
    </ResumeForm>
  );
};

const SkillList = () => {
  const { query } = useSkillQuery();

  useEffect(() => {
    console.log(query.data);
  }, [query]);

  return query.data?.length > 0 ? (
    <ResumeList>
      <ResumeList.Row>
        <ResumeList.Title>나의 스킬</ResumeList.Title>
      </ResumeList.Row>
      <ResumeList.Row>
        {query.data.map((item: any) => (
          <SkillItem>{item.title}</SkillItem>
        ))}
      </ResumeList.Row>
    </ResumeList>
  ) : (
    <NoListMessage message="스킬을 추가해주세요." />
  );
};

const SkillListWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const SkillItem = styled.div`
  min-width: 48px;
  border: 1px solid #bcd1fc;
  color: #475067;
  background: #ffffff;
  display: flex;
  padding: 7px 11px;
  height: 36px;
  border-radius: 32px;
  box-sizing: border-box;
  font-size: 15px;
  letter-spacing: -0.5px;
  line-height: 20px;
  align-items: center;
  justify-content: center;
`;

export default Skill;
