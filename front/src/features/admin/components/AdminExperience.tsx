import { ResumeList } from '@/components';
import { IExperience } from '@/features/extra/types';
import { formatDate } from '@/utils';

export const AdminExperience = ({ experiences }: any) => {
  return experiences && experiences.length > 0 ? (
    <ResumeList>
      <div className="preview-title">경험/활동/교육</div>
      <ResumeList.Col>
        {experiences.map((experience: IExperience) => (
          <ResumeList.Item style={{ minHeight: '80px' }} key={experience.id}>
            <ResumeList.Col>
              <ResumeList.Row>
                <ResumeList.Title>{experience.place}</ResumeList.Title>
                <ResumeList.Date>
                  {formatDate(experience.startDate)}~
                  {formatDate(experience.endDate)}
                </ResumeList.Date>
              </ResumeList.Row>
              <ResumeList.Row>
                <ResumeList.TextArea content={experience.detail} />
              </ResumeList.Row>
            </ResumeList.Col>
          </ResumeList.Item>
        ))}
      </ResumeList.Col>
    </ResumeList>
  ) : (
    <></>
  );
};
