import React from 'react';
import { Resume } from '@/components/Resume';
import { useExtraState } from '../stores/hooks';
import { useForm } from '@/hooks';
import { useSkillQuery } from '../hooks/skill';
import { styled } from 'styled-components';
import { Input, NoListMessage, ResumeList, ResumeForm } from '@components';
import { ISkill } from '../types';
import { IReadonly } from '@/types';

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

  const { data, mutation } = useSkillQuery();

  const handleSubmit = () => {
    mutation.mutate(formData);
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
      {data?.length > 0 && (
        <ResumeList.Col>
          <ResumeList.State style={{ fontWeight: 'bold', marginTop: '10px' }}>
            나의 스킬
          </ResumeList.State>
          <ResumeList.Row>
            {data.map((skill: ISkill) => (
              <SkillItem key={skill.id} item={skill} deleteActive />
            ))}
          </ResumeList.Row>
        </ResumeList.Col>
      )}
      <ResumeForm.Buttons
        onCancel={() => closeExtraForm('skill')}
        onSubmit={handleSubmit}
      />
    </ResumeForm>
  );
};

export const SkillList = ({ readonly }: IReadonly) => {
  const { data } = useSkillQuery();
  const { openExtraForm } = useExtraState();

  return data?.length > 0 ? (
    <ResumeList>
      <ResumeList.Col>
        <ResumeList.Title>나의 스킬</ResumeList.Title>
        <ResumeList.Row>
          {data.map((skill: ISkill) => (
            <SkillItem key={skill.id} item={skill} />
          ))}
        </ResumeList.Row>
      </ResumeList.Col>
      {!readonly && (
        <div>
          <ResumeList.Button
            type="edit"
            onClick={() => openExtraForm('skill')}
          />
        </div>
      )}
    </ResumeList>
  ) : !readonly ? (
    <NoListMessage message="스킬을 추가해주세요." />
  ) : (
    <></>
  );
};

interface SkillItemProps {
  item: ISkill;
  deleteActive?: boolean;
}

export const SkillItem = ({ item, deleteActive }: SkillItemProps) => {
  const { deleteMutation } = useSkillQuery();
  const handleDeleteClick = () => {
    if (window.confirm('정말 삭제하시겠습니까?'))
      deleteMutation.mutate(item.id!);
  };

  return (
    <SkillItemWrapper>
      <span>{item.skill}</span>
      {deleteActive && (
        <button className="btn-delete" onClick={handleDeleteClick}>
          X
        </button>
      )}
    </SkillItemWrapper>
  );
};

const SkillItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  border: 1px solid #bcd1fc;
  color: #475067;
  background: #ffffff;
  padding: 7px 12px;
  height: 36px;
  border-radius: 32px;
  box-sizing: border-box;
  font-size: 15px;
  letter-spacing: -0.5px;
  line-height: 20px;

  & .btn-delete {
    border: none;
    background: transparent;
    margin-left: 8px;
    color: #8491a7;
    font-weight: bold;
  }
`;

export default Skill;
