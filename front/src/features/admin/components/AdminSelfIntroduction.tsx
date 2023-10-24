import { ResumeList } from '@/components';
import { ISelfIntroduction } from '@/features/extra/types';

export const AdminSelfIntroduction = ({
  selfIntroduction,
}: {
  selfIntroduction: ISelfIntroduction;
}) => {
  return selfIntroduction ? (
    <ResumeList>
      <div className="preview-title">자기소개서</div>
      <ResumeList.Col>
        <ResumeList.Title>{selfIntroduction.title}</ResumeList.Title>
        <ResumeList.TextArea content={selfIntroduction.content} />
      </ResumeList.Col>
    </ResumeList>
  ) : (
    <></>
  );
};
