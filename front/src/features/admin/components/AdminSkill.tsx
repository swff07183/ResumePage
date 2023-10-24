import { ResumeList } from '@/components';
import { ISkill } from '@/features/extra';
import { SkillItem } from '@/features/extra/components/Skill';

export const AdminSkill = ({ skills }: any) => {
  return skills?.length > 0 ? (
    <ResumeList>
      <ResumeList.Col>
        <ResumeList.Title>나의 스킬</ResumeList.Title>
        <ResumeList.Row>
          {skills.map((skill: ISkill) => (
            <SkillItem key={skill.id} item={skill} />
          ))}
        </ResumeList.Row>
      </ResumeList.Col>
    </ResumeList>
  ) : (
    <></>
  );
};
