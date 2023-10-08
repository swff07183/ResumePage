import { ResumeList } from '@/components';
import { ISkill } from '@/features/extra';
import { SkillItem } from '@/features/extra/components/Skill';
import { useSkillQuery } from '@/features/extra/hooks/skill';
import React from 'react';
import styled from 'styled-components';

const SkillPreview = () => {
  const { data } = useSkillQuery();

  return data?.length > 0 ? (
    <ResumeList>
      <ResumeList.Col>
        <ResumeList.Title>나의 스킬</ResumeList.Title>
        <ResumeList.Row>
          {data?.map((skill: ISkill) => (
            <SkillItem key={skill.id} item={skill} />
          ))}
        </ResumeList.Row>
      </ResumeList.Col>
    </ResumeList>
  ) : (
    <></>
  );
};

const Wrapper = styled.div``;

export default SkillPreview;
