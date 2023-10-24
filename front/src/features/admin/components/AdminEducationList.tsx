import React from 'react';
import { ResumeList } from '@components';
import { formatDate } from '@/utils';

export const AdminEducation = ({ educationInfo }: any) => {
  return educationInfo ? (
    <>
      <ResumeList>
        <div className="preview-title">학력</div>
        <ResumeList.Col>
          {/*  */}
          <ResumeList.Row>
            {!educationInfo.isQualificationExam && (
              <>
                <ResumeList.Title>{`${educationInfo.name} ${
                  educationInfo?.finalEdu === 'university'
                    ? `(${educationInfo.universityType})`
                    : ''
                }`}</ResumeList.Title>
                <ResumeList.State>{`(${educationInfo.state})`}</ResumeList.State>
                {(educationInfo.enterDate || educationInfo.graduateDate) && (
                  <ResumeList.Date>
                    {educationInfo.enterDate &&
                      `${formatDate(educationInfo.enterDate)}`}
                    {educationInfo.graduateDate &&
                      `~${formatDate(educationInfo.graduateDate)}`}
                  </ResumeList.Date>
                )}
              </>
            )}
            {educationInfo.isQualificationExam && (
              <>
                {educationInfo.finalEdu === 'primary' && (
                  <ResumeList.Title>{'중입 검정고시(초졸)'}</ResumeList.Title>
                )}
                {educationInfo.finalEdu === 'middle' && (
                  <ResumeList.Title>{'고입 검정고시(중졸)'}</ResumeList.Title>
                )}
                {educationInfo.finalEdu === 'high' && (
                  <ResumeList.Title>{'대입 검정고시(고졸)'}</ResumeList.Title>
                )}
                <ResumeList.State>{'(합격)'}</ResumeList.State>
                {educationInfo.passDate && (
                  <ResumeList.Date>
                    {formatDate(educationInfo.passDate)}
                  </ResumeList.Date>
                )}
              </>
            )}
          </ResumeList.Row>
          {/*  */}
          {educationInfo.major && (
            <ResumeList.Row>
              <ResumeList.Content>{educationInfo.major}</ResumeList.Content>
            </ResumeList.Row>
          )}
          {/*  */}
          {(educationInfo?.finalEdu === 'university' ||
            educationInfo?.region) && (
            <ResumeList.DetailDiv>
              {educationInfo.universityTime && (
                <ResumeList.Row>
                  <ResumeList.Detail>주야간</ResumeList.Detail>
                  <ResumeList.DetailContent>
                    {educationInfo.universityTime}
                  </ResumeList.DetailContent>
                </ResumeList.Row>
              )}
              {/*  */}
              {educationInfo.extraMajor && (
                <ResumeList.Row>
                  <ResumeList.Detail>
                    {educationInfo.extraMajorType}
                  </ResumeList.Detail>
                  <ResumeList.DetailContent>
                    {educationInfo.extraMajor}
                  </ResumeList.DetailContent>
                </ResumeList.Row>
              )}
              {/*  */}
              {educationInfo.grade && (
                <ResumeList.Row>
                  <ResumeList.Detail>학점</ResumeList.Detail>
                  <ResumeList.DetailContent>
                    {`${educationInfo.grade}/${educationInfo.standardGrade}`}
                  </ResumeList.DetailContent>
                </ResumeList.Row>
              )}
              {/*  */}
              {educationInfo.region && (
                <ResumeList.Row>
                  <ResumeList.Detail>지역</ResumeList.Detail>
                  <ResumeList.DetailContent>
                    {educationInfo.region}
                  </ResumeList.DetailContent>
                </ResumeList.Row>
              )}
            </ResumeList.DetailDiv>
          )}
        </ResumeList.Col>
      </ResumeList>
    </>
  ) : (
    <></>
  );
};
