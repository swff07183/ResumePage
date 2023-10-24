import { ResumeList } from '@/components';
import { ICareerContent } from '@/features/extra';

export const AdminCareerContent = ({
  careerContent,
}: {
  careerContent: ICareerContent;
}) => {
  return careerContent?.content ? (
    <ResumeList>
      <div className="preview-title">경력기술서</div>
      <ResumeList.Col>
        <ResumeList.TextArea content={careerContent.content} />
      </ResumeList.Col>
    </ResumeList>
  ) : (
    <></>
  );
};
