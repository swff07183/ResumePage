import { ResumeList } from '@/components';
import { IAward } from '@/features/extra/types';
import { formatDate } from '@/utils';

export const AdminAward = ({ awards }: any) => {
  return awards && awards.length > 0 ? (
    <ResumeList>
      <div className="preview-title">자격/어학/수상</div>
      <ResumeList.Col>
        {awards.map((award: IAward) => (
          <ResumeList.Item style={{ minHeight: '80px' }} key={award.id}>
            {award.type === 'license' && (
              <ResumeList.Col>
                <ResumeList.Row>
                  <ResumeList.Title>{award.licenseName}</ResumeList.Title>
                  <ResumeList.State>(취득)</ResumeList.State>
                  <ResumeList.Date>
                    {formatDate(award.licenseDate)}
                  </ResumeList.Date>
                </ResumeList.Row>
                <ResumeList.Row>{award.licensePlace}</ResumeList.Row>
              </ResumeList.Col>
            )}
            {award.type === 'language' && (
              <ResumeList.Col>
                <ResumeList.Row>
                  <ResumeList.Title>{award.languageName}</ResumeList.Title>
                  <ResumeList.State>({award.language})</ResumeList.State>
                  <ResumeList.Date>
                    {formatDate(award.languageDate)}
                  </ResumeList.Date>
                </ResumeList.Row>
                {(award.languageScore || award.languageRating) && (
                  <ResumeList.DetailDiv>
                    {award.languageScore && (
                      <ResumeList.Row>
                        <ResumeList.Detail>점수</ResumeList.Detail>
                        <ResumeList.DetailContent>
                          {award.languageScore}점
                        </ResumeList.DetailContent>
                      </ResumeList.Row>
                    )}
                    {award.languageRating && (
                      <ResumeList.Row>
                        <ResumeList.Detail>급수</ResumeList.Detail>
                        <ResumeList.DetailContent>
                          {award.languageRating}
                        </ResumeList.DetailContent>
                      </ResumeList.Row>
                    )}
                  </ResumeList.DetailDiv>
                )}
              </ResumeList.Col>
            )}
            {award.type === 'award' && (
              <ResumeList.Col>
                <ResumeList.Row>
                  <ResumeList.Title>{award.awardName}</ResumeList.Title>
                  <ResumeList.State>(수상)</ResumeList.State>
                  <ResumeList.Date>
                    {formatDate(award.awardDate)}
                  </ResumeList.Date>
                </ResumeList.Row>
                <ResumeList.Row>{award.awardPlace}</ResumeList.Row>
              </ResumeList.Col>
            )}
          </ResumeList.Item>
        ))}
      </ResumeList.Col>
    </ResumeList>
  ) : (
    <></>
  );
};
