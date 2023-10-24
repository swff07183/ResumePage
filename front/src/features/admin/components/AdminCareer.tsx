import React from 'react';
import { NoListMessage, ResumeList } from '@components';
import { formatDate } from '@/utils';

const AdminCareer = ({ careers }: any) => {
  return careers && careers?.length > 0 ? (
    <ResumeList>
      <div className="preview-title">경력</div>
      <ResumeList.Col>
        {careers.map((career: any) => (
          <ResumeList.Item style={{ minHeight: '80px' }} key={career.id}>
            <ResumeList.Col>
              {/*  */}
              <ResumeList.Row>
                <ResumeList.Title>{career.name}</ResumeList.Title>
                <ResumeList.Date>
                  {formatDate(career.enterDate)}~{formatDate(career.exitDate)}
                </ResumeList.Date>
              </ResumeList.Row>
              {/*  */}
              {(career.part || career.position) && (
                <ResumeList.Row>
                  {career.part} {career.position}
                </ResumeList.Row>
              )}
              {career.detail && (
                <ResumeList.Row>
                  <ResumeList.TextArea content={career.detail} />
                </ResumeList.Row>
              )}
              {/*  */}
              {(career.money || career.region) && (
                <ResumeList.DetailDiv>
                  {career.money && (
                    <ResumeList.Row>
                      <ResumeList.Detail>연봉</ResumeList.Detail>
                      <ResumeList.DetailContent>
                        {`${career.money}${career.moneyUnit}`}
                      </ResumeList.DetailContent>
                    </ResumeList.Row>
                  )}
                  {career.region && (
                    <ResumeList.Row>
                      <ResumeList.Detail>근무지역</ResumeList.Detail>
                      <ResumeList.DetailContent>
                        {career.region}
                      </ResumeList.DetailContent>
                    </ResumeList.Row>
                  )}
                </ResumeList.DetailDiv>
              )}
            </ResumeList.Col>
          </ResumeList.Item>
        ))}
      </ResumeList.Col>
    </ResumeList>
  ) : (
    <></>
  );
};

export default AdminCareer;
